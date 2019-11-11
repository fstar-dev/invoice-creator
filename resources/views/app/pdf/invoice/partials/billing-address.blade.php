@if($invoice->user->billingaddress)
    @if($invoice->user->billingaddress->name || $invoice->user->billingaddress->address_street_1 || $invoice->user->billingaddress->address_street_2 || $invoice->user->billingaddress->country || $invoice->user->billingaddress->state || $invoice->user->billingaddress->city || $invoice->user->billingaddress->zip || $invoice->user->billingaddress->phone)
        <p class="bill-to">Bill To,</p>
    @endif
    @if($invoice->user->billingaddress->name)
        <p class="bill-user-name">
            {{$invoice->user->billingaddress->name}}
        </p>
    @endif
    <p class="bill-user-address">
        @if($invoice->user->billingaddress->address_street_1)
            {{$invoice->user->billingaddress->address_street_1}}<br>
        @endif
        @if($invoice->user->billingaddress->address_street_2)
            {{$invoice->user->billingaddress->address_street_2}}<br>
        @endif
        @if($invoice->user->billingaddress->city && $invoice->user->billingaddress->city->name)
            {{$invoice->user->billingaddress->city->name}},
        @endif
        @if($invoice->user->billingaddress->state && $invoice->user->billingaddress->state->name)
            {{$invoice->user->billingaddress->state->name}}.
        @endif
        @if($invoice->user->billingaddress->zip)
            {{$invoice->user->billingaddress->zip}}<br>
        @endif
        @if($invoice->user->billingaddress->country && $invoice->user->billingaddress->country->name)
            {{$invoice->user->billingaddress->country->name}}<br>
        @endif
        @if($invoice->user->billingaddress->phone)
            <p class="bill-user-phone">
                Phone :{{$invoice->user->billingaddress->phone}}
            </p>
        @endif
    </p>
@endif
