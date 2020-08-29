import React from 'react';
import './StripeButton.style.scss';
import stripePublisherKey from './StripePublisherKey';
import StripeCheckout from 'react-stripe-checkout';

const favicon = require('../../assets/favicon.png') ;

//Check this link for more details: https://github.com/azmenak/react-stripe-checkout
const StripeButton = ({ price }) => {
    const priceForStripe = price*100;
    const publisherKey = stripePublisherKey;
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return(
        <StripeCheckout 
            label='Pay Now'
            name='SK Clothes'
            billingAddress
            shippingAddress
            image={favicon}
            description={`Your total amt to be paid is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publisherKey}
        />
    )
}

export default StripeButton;