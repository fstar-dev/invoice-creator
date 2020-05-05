<table width="100%" class="item-table" cellspacing="0" border="0">
    <tr class="item-table-heading-row">
        <th width="2%" class="item-table-heading text-right" style="padding-right: 20px">#</th>
        <th width="40%" class="item-table-heading text-left" style="padding-left: 0px">Items</th>
        <th class="item-table-heading text-right" style="padding-right: 20px">Quantity</th>
        <th class="item-table-heading text-right" style="padding-right: 20px">Price</th>
        @if($estimate->discount_per_item === 'YES')
        <th class="item-table-heading text-right" style="padding-left: 10px">Discount</th>
        @endif
        <th class="item-table-heading text-right">Amount</th>
    </tr>
    @php
        $index = 1
    @endphp
    @foreach ($estimate->items as $item)
        <tr class="item-row">
            <td
                class="item-cell text-right"
                style="padding-right: 20px; vertical-align: top;"
            >
                {{$index}}
            </td>
            <td
                class="item-cell text-left"
                style="padding-left: 0px"
            >
                <span>{{ $item->name }}</span><br>
                <span
                    class="text-left"
                    style="color: #595959; font-size: 9px; font-weight:300; line-height: 12px;"
                >
                    {!! nl2br(htmlspecialchars($item->description)) !!}
                </span>
            </td>
            <td
                class="item-cell text-right"
                style="padding-right: 20px"
            >
                {{$item->quantity}}
            </td>
            <td
                class="item-cell text-right"
                style="padding-right: 20px"
            >
                {!! format_money_pdf($item->price, $estimate->user->currency) !!}
            </td>
            @if($estimate->discount_per_item === 'YES')
                <td class="item-cell text-right" style="padding-left: 10px">
                    @if($item->discount_type === 'fixed')
                        {!! format_money_pdf($item->discount_val, $estimate->user->currency) !!}
                    @endif
                    @if($item->discount_type === 'percentage')
                        {{$item->discount}}%
                    @endif
                </td>
            @endif
            <td class="item-cell text-right">
                {!! format_money_pdf($item->total, $estimate->user->currency) !!}
            </td>
        </tr>
        @php
            $index += 1
        @endphp
    @endforeach
</table>

<hr class="items-table-hr">

<table width="100%" cellspacing="0px" border="0" class="total-display-table @if(count($estimate->items) > 12) page-break @endif">
    <tr>
        <td class="no-border" style="color: #55547A; padding-left:10px;  font-size:12px;">Subtotal</td>
        <td class="no-border item-cell"
            style="padding-right:10px; text-align: right;  font-size:12px; color: #040405; font-weight: 500;">{!! format_money_pdf($estimate->sub_total, $estimate->user->currency) !!}</td>
    </tr>

    @if ($estimate->tax_per_item === 'YES')
        @for ($i = 0; $i < count($labels); $i++)
            <tr>
                <td class="no-border text-left" style="padding-left:10px; font-size:12px; color: #55547A;">
                    {{$labels[$i]}}
                </td>
                <td class="no-border item-cell padd2 text-right" style="padding-right:10px; font-weight: 500; font-size:12px; color: #040405">
                    {!! format_money_pdf($taxes[$i], $estimate->user->currency) !!}
                </td>
            </tr>
        @endfor
    @else
        @foreach ($estimate->taxes as $tax)
            <tr>
                <td class="no-border text-left" style="padding-left:10px; font-size:12px;  color: #55547A;">
                    {{$tax->name.' ('.$tax->percent.'%)'}}
                </td>
                <td class="no-border item-cell padd2 text-right" style="padding-right:10px; font-weight: 500; font-size:12px;  color: #040405">
                    {!! format_money_pdf($tax->amount, $estimate->user->currency) !!}
                </td>
            </tr>
        @endforeach
    @endif

    @if ($estimate->discount_per_item === 'NO')
        <tr>
            <td class="no-border" style="padding-left:10px; text-align:left; font-size:12px; color: #55547A;">
                @if($estimate->discount_type === 'fixed')
                    Discount
                @endif
                @if($estimate->discount_type === 'percentage')
                    Discount ({{$estimate->discount}}%)
                @endif
            </td>
            <td class="no-border item-cell padd2" style="padding-right:10px; font-weight: 500; text-align: right; font-size:12px;  color: #040405">
                @if($estimate->discount_type === 'fixed')
                    {!! format_money_pdf($estimate->discount_val, $estimate->user->currency) !!}
                @endif
                @if($estimate->discount_type === 'percentage')
                    {!! format_money_pdf($estimate->discount_val, $estimate->user->currency) !!}
                @endif
            </td>
        </tr>
    @endif
    <tr>
        <td style="padding:3px 0px"></td>
        <td style="padding:3px 0px"></td>
    </tr>
    <tr>
        <td class="no-border total-border-left"
            style="padding-left:10px; padding-bottom:10px; text-align:left; padding-top:20px; font-size:12px;  color: #55547A;"
        >
            <label class="total-bottom"> Total </label>
        </td>
        <td
            class="no-border total-border-right item-cell padd8"
            style="padding-right:10px; font-weight: 500; text-align: right; font-size:12px;  padding-top:20px; color: #5851DB"
        >
            {!! format_money_pdf($estimate->total, $estimate->user->currency)!!}
        </td>
    </tr>
</table>
