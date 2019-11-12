<?php
namespace Laraspace\Http\Controllers;

use Illuminate\Http\Request;
use Laraspace\CompanySetting;
use Illuminate\Support\Collection;
use Laraspace\Currency;
use Laraspace\InvoiceTemplate;
use Laraspace\Http\Requests;
use Laraspace\Invoice;
use Laraspace\InvoiceItem;
use Carbon\Carbon;
use Laraspace\Item;
use Laraspace\Mail\invoicePdf;
use function MongoDB\BSON\toJSON;
use Illuminate\Support\Facades\Log;
use Laraspace\User;
use Mailgun\Mailgun;
use PDF;
use Validator;
use Laraspace\TaxType;
use Laraspace\Tax;

class InvoicesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $limit = $request->has('limit') ? $request->limit : 10;

        $invoices = Invoice::with(['items', 'user', 'invoiceTemplate', 'taxes'])
            ->join('users', 'users.id', '=', 'invoices.user_id')
            ->applyFilters($request->only([
                'status',
                'paid_status',
                'customer_id',
                'invoice_number',
                'from_date',
                'to_date',
                'orderByField',
                'orderBy',
                'search',
            ]))
            ->whereCompany($request->header('company'))
            ->select('invoices.*', 'users.name')
            ->latest()
            ->paginate($limit);

        return response()->json([
            'invoices' => $invoices,
            'invoiceTotalCount' => Invoice::count()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $tax_per_item = CompanySetting::getSetting('tax_per_item', $request->header('company'));
        $discount_per_item = CompanySetting::getSetting('discount_per_item', $request->header('company'));
        $nextInvoiceNumber = "INV-".Invoice::getNextInvoiceNumber();

        return response()->json([
            'nextInvoiceNumber' => $nextInvoiceNumber,
            'items' => Item::with('taxes')->whereCompany($request->header('company'))->get(),
            'invoiceTemplates' => InvoiceTemplate::all(),
            'tax_per_item' => $tax_per_item,
            'discount_per_item' => $discount_per_item
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Requests\InvoicesRequest $request)
    {
        $invoice_date = Carbon::createFromFormat('d/m/Y', $request->invoice_date);
        $due_date = Carbon::createFromFormat('d/m/Y', $request->due_date);
        $status = Invoice::STATUS_DRAFT;

        $tax_per_item = CompanySetting::getSetting('tax_per_item', $request->header('company')) ?? 'NO';
        $discount_per_item = CompanySetting::getSetting('discount_per_item', $request->header('company')) ?? 'NO';

        if ($request->has('invoiceSend')) {
            $status = Invoice::STATUS_SENT;
        }

        $invoice = Invoice::create([
            'invoice_date' => $invoice_date,
            'due_date' => $due_date,
            'invoice_number' => $request->invoice_number,
            'reference_number' => $request->reference_number,
            'user_id' => $request->user_id,
            'company_id' => $request->header('company'),
            'invoice_template_id' => $request->invoice_template_id,
            'status' => $status,
            'paid_status' => Invoice::STATUS_UNPAID,
            'sub_total' => $request->sub_total,
            'discount' => $request->discount,
            'discount_type' => $request->discount_type,
            'discount_val' => $request->discount_val,
            'total' => $request->total,
            'due_amount' => $request->total,
            'tax_per_item' => $tax_per_item,
            'discount_per_item' => $discount_per_item,
            'tax' => $request->tax,
            'notes' => $request->notes,
            'unique_hash' => str_random(60)
        ]);

        $invoiceItems = $request->items;

        foreach ($invoiceItems as $invoiceItem) {
            $invoiceItem['company_id'] = $request->header('company');
            $item = $invoice->items()->create($invoiceItem);

            if (array_key_exists('taxes', $invoiceItem) && $invoiceItem['taxes']) {
                foreach ($invoiceItem['taxes'] as $tax) {
                    $tax['company_id'] = $request->header('company');

                    if ($tax['amount']) {
                        $item->taxes()->create($tax);
                    }
                }
            }
        }

        if ($request->has('taxes')) {
            foreach ($request->taxes as $tax) {
                $tax['company_id'] = $request->header('company');

                if ($tax['amount']) {
                    $invoice->taxes()->create($tax);
                }
            }
        }

        if ($request->has('invoiceSend')) {
            $data['invoice'] = Invoice::findOrFail($invoice->id)->toArray();
            $data['user'] = User::find($request->user_id)->toArray();

            $notificationEmail = CompanySetting::getSetting(
                'notification_email',
                $request->header('company')
            );

            $email = $data['user']['email'];

            if (!$email) {
                return response()->json([
                    'error' => 'user_email_does_not_exist'
                ]);
            }

            if (!$notificationEmail) {
                return response()->json([
                    'error' => 'notification_email_does_not_exist'
                ]);
            }

            \Mail::to($email)->send(new invoicePdf($data, $notificationEmail));
        }

        $invoice = Invoice::with(['items', 'user', 'invoiceTemplate', 'taxes'])->find($invoice->id);

        return response()->json([
            'url' => url('/invoices/pdf/'.$invoice->unique_hash),
            'invoice' => $invoice
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $invoice = Invoice::with([
            'items',
            'items.taxes',
            'user',
            'invoiceTemplate',
            'taxes.taxType'
        ])->find($id);

        $siteData = [
            'invoice' => $invoice,
            'shareable_link' => url('/invoices/pdf/' . $invoice->unique_hash)
        ];

        return response()->json($siteData);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request,$id)
    {
        $invoice = Invoice::with([
            'items',
            'items.taxes',
            'user',
            'invoiceTemplate',
            'taxes.taxType'
        ])->find($id);

        return response()->json([
            'nextInvoiceNumber' => $invoice->invoice_number,
            'invoice' => $invoice,
            'invoiceTemplates' => InvoiceTemplate::all(),
            'tax_per_item' => $invoice->tax_per_item,
            'discount_per_item' => $invoice->discount_per_item,
            'shareable_link' => url('/invoices/pdf/'.$invoice->unique_hash)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Requests\InvoicesRequest $request, $id)
    {
        $invoice_date = Carbon::createFromFormat('d/m/Y', $request->invoice_date);
        $due_date = Carbon::createFromFormat('d/m/Y', $request->due_date);

        $invoice = Invoice::find($id);
        $oldAmount = $invoice->total;

        if ($oldAmount != $request->total) {
            $oldAmount = (int)round($request->total) - (int)$oldAmount;
        } else {
            $oldAmount = 0;
        }

        $invoice->due_amount = ($invoice->due_amount + $oldAmount);

        if ($invoice->due_amount == 0 && $invoice->paid_status != Invoice::STATUS_PAID) {
            $invoice->status = Invoice::STATUS_COMPLETED;
            $invoice->paid_status = Invoice::STATUS_PAID;
        } elseif ($invoice->due_amount < 0 && $invoice->paid_status != Invoice::STATUS_UNPAID) {
            return response()->json([
                'error' => 'invalid_due_amount'
            ]);
        } elseif ($invoice->due_amount != 0 && $invoice->paid_status == Invoice::STATUS_PAID) {
            $invoice->status = $invoice->getPreviousStatus();
            $invoice->paid_status = Invoice::STATUS_PARTIALLY_PAID;
        }

        $invoice->invoice_date = $invoice_date;
        $invoice->due_date = $due_date;
        $invoice->invoice_number = $request->invoice_number;
        $invoice->reference_number = $request->reference_number;
        $invoice->user_id = $request->user_id;
        $invoice->invoice_template_id = $request->invoice_template_id;
        $invoice->sub_total = $request->sub_total;
        $invoice->total = $request->total;
        $invoice->discount = $request->discount;
        $invoice->discount_type = $request->discount_type;
        $invoice->discount_val = $request->discount_val;
        $invoice->tax = $request->tax;
        $invoice->notes = $request->notes;
        $invoice->save();

        $oldItems = $invoice->items->toArray();
        $oldTaxes = $invoice->taxes->toArray();
        $invoiceItems = $request->items;

        foreach ($oldItems as $oldItem) {
            InvoiceItem::destroy($oldItem['id']);
        }

        foreach ($oldTaxes as $oldTax) {
            Tax::destroy($oldTax['id']);
        }

        foreach ($invoiceItems as $invoiceItem) {
            $invoiceItem['company_id'] = $request->header('company');
            $item = $invoice->items()->create($invoiceItem);

            if (array_key_exists('taxes', $invoiceItem) && $invoiceItem['taxes']) {
                foreach ($invoiceItem['taxes'] as $tax) {
                    $tax['company_id'] = $request->header('company');

                    if ($tax['amount']) {
                        $item->taxes()->create($tax);
                    }
                }
            }
        }

        if ($request->has('taxes')) {
            foreach ($request->taxes as $tax) {
                $tax['company_id'] = $request->header('company');

                if ($tax['amount']) {
                    $invoice->taxes()->create($tax);
                }
            }
        }

        $invoice = Invoice::with(['items', 'user', 'invoiceTemplate', 'taxes'])->find($invoice->id);

        return response()->json([
            'url' => url('/invoices/pdf/' . $invoice->unique_hash),
            'invoice' => $invoice,
            'success' => true
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $invoice = Invoice::find($id);

        if ($invoice->payments()->exists() && $invoice->payments()->count() > 0) {
            return response()->json([
                'error' => 'payment_attached'
            ]);
        }

        $invoice = Invoice::destroy($id);

        return response()->json([
            'success' => true
        ]);
    }

    public function delete(Request $request)
    {
        foreach ($request->id as $id) {
            $invoice = Invoice::find($id);

            if ($invoice->payments()->exists() && $invoice->payments()->count() > 0) {
                return response()->json([
                    'error' => 'payment_attached'
                ]);
            }
        }

        $invoice = Invoice::destroy($request->id);

        return response()->json([
            'success' => true
        ]);
    }

    public function sendInvoice(Request $request)
    {
        $invoice = Invoice::findOrFail($request->id);

        if ($invoice->status == Invoice::STATUS_DRAFT) {
            $invoice->status = Invoice::STATUS_SENT;
            $invoice->sent = true;
            $invoice->save();
        }

        $data['invoice'] = $invoice->toArray();
        $userId = $data['invoice']['user_id'];
        $data['user'] = User::find($userId)->toArray();
        $email = $data['user']['email'];
        $notificationEmail = CompanySetting::getSetting(
            'notification_email',
            $request->header('company')
        );

        if (!$email) {
            return response()->json([
                'error' => 'user_email_does_not_exist'
            ]);
        }

        if (!$notificationEmail) {
            return response()->json([
                'error' => 'notification_email_does_not_exist'
            ]);
        }

        \Mail::to($email)->send(new invoicePdf($data, $notificationEmail));

        return response()->json([
            'success' => true
        ]);
    }

    public function markAsSent(Request $request)
    {
        $invoice = Invoice::findOrFail($request->id);
        $invoice->status = Invoice::STATUS_SENT;
        $invoice->sent = true;
        $invoice->save();

        return response()->json([
            'success' => true
        ]);
    }

    public function markAsPaid(Request $request)
    {
        $invoice = Invoice::findOrFail($request->id);
        $invoice->status = Invoice::STATUS_COMPLETED;
        $invoice->paid_status = Invoice::STATUS_PAID;
        $invoice->due_amount = 0;
        $invoice->save();

        return response()->json([
            'success' => true
        ]);
    }

    public function getCustomersUnpaidInvoices(Request $request, $id)
    {
        $invoices = Invoice::where('paid_status', '<>', Invoice::STATUS_PAID)
            ->where('user_id', $id)->where('due_amount', '>', 0)
            ->whereCompany($request->header('company'))
            ->get();

        return response()->json([
            'invoices' => $invoices
        ]);
    }
}
