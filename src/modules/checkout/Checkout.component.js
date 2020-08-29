import React, { Component} from 'react';
import './Checkout.style.scss';
import { Card } from 'react-bootstrap';
import { FaCreditCard } from 'react-icons/fa';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/CheckoutItem.component';
import StripeButton from '../../components/stripe-button/StripeButton.component';

class Checkout extends Component{
    render(){ 
        const { cartItems, cartTotal } = this.props;
        return(
            <div className="checkout-container">
                <Card className="checkout">
                    <div className="checkout-header">
                        <div className="header-item img">Product</div>
                        <div className="header-item desc">Description</div>
                        <div className="header-item qty">Quantity</div>
                        <div className="header-item price">Price</div>
                        <div className="header-item remove">Remove</div>
                    </div>
                    <div className="checkout-body">
                        {
                            cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
                        }
                    </div>
                    <div className="checkout-footer">
                        <div className="footer-total">TOTAL: ${cartTotal}</div>
                        
                    </div>
                </Card>
                <div className="checkout-container-footer">
                    <div className="footer-card">
                        <div>*Please use the following test credit card for payments*</div>
                        <div> 4242 4242 4242 4242 --- Exp: 01/21 --- CVV: 123</div>
                    </div>
                    {/* <button className="footer-checkout"><FaCreditCard /> Procced to Pay</button> */}
                    <StripeButton price={cartTotal}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})



export default connect(mapStateToProps)(Checkout);
