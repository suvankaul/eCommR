import React from 'react';
import './StripeButton.style.scss';
import stripePublisherKey from './StripePublisherKey';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'; //similar to fetch
import { connect } from 'react-redux';
import { clearCart } from '../../redux/cart/cart.actions'

const favicon = require('../../assets/favicon.png') ;

//Check this link for more details: https://github.com/azmenak/react-stripe-checkout
const StripeButton = ({ price, clearCart }) => {
    const priceForStripe = price*100;
    const publisherKey = stripePublisherKey;
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data : {
                amount: priceForStripe,
                token
            }
        }).then(res => {
            clearCart();
            alert('Payment Successful. Your Order has been placed.');
        }).catch(e =>{
            console.log(e)
            alert('Payment Failed. Please check the card details and try again.')
        })
        
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
        >
            <button className="checkout-button">Proceed to Pay</button>
        </StripeCheckout>
    )
}

const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(clearCart())
})

export default connect(null, mapDispatchToProps)(StripeButton);