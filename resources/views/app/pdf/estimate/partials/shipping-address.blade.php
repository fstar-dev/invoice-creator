@if($estimate->user->shippingaddress)
    @if($estimate->user->shippingaddress->name || $estimate->user->shippingaddress->address_street_1 || $estimate->user->shippingaddress->address_street_2 || $estimate->user->shippingaddress->country || $estimate->user->shippingaddress->state || $estimate->user->shippingaddress->city || $estimate->user->shippingaddress->zip || $estimate->user->phone)
        <p class="ship-to">Ship To,</p>
    @endif
    @if($estimate->user->shippingaddress->name)
        <p class="ship-user-name">
            {{$estimate->user->shippingaddress->name}}
        </p>
    @endif
    <p class="ship-user-address">
        @if($estimate->user->shippingaddress->address_street_1)
            {{$estimate->user->shippingaddress->address_street_1}}<br>
        @endif

        @if($estimate->user->shippingaddress->address_street_2)
            {{$estimate->user->shippingaddress->address_street_2}}<br>
        @endif

        @if($estimate->user->shippingaddress->city && $estimate->user->shippingaddress->city->name)
            {{$estimate->user->shippingaddress->city->name}},
        @endif

        @if($estimate->user->shippingaddress->state && $estimate->user->shippingaddress->state->name)
            {{$estimate->user->shippingaddress->state->name}}.
        @endif

        @if($estimate->user->shippingaddress->zip)
            {{$estimate->user->shippingaddress->zip}}<br>
        @endif

        @if($estimate->user->shippingaddress->country && $estimate->user->shippingaddress->country->name)
            {{$estimate->user->shippingaddress->country->name}}<br>
        @endif

        @if($estimate->user->phone)
            <p class="ship-user-phone">
                Phone :{{$estimate->user->shippingaddress->phone}}
            </p>
        @endif

    </p>
@endif
