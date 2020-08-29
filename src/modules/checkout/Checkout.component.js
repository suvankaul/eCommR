import React, { Component} from 'react';
import './Checkout.style.scss';
import { Card } from 'react-bootstrap';
import { FaCreditCard } from 'react-icons/fa';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/CheckoutItem.component';
import StripeButton from '../../components/stripe-button/StripeButton.component';
import { FaShoppingBag } from 'react-icons/fa'

class Checkout extends Component{
    render(){ 
        const { cartItems, cartTotal } = this.props;
        return(
            <div className="checkout-container">
                <Card className="checkout-desktop-view">
                    <div className="checkout-title"><FaShoppingBag /><span>Your Shopping Cart</span></div>
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
                        <div>*Please use the following test card for payments*</div>
                        <div className="card-info">
                            <div> 4242 4242 4242 4242</div>
                            <div>--- Exp: 01/21 --- CVV: 123</div>
                        </div>                        
                    </div>
                    {/* <button className="footer-checkout"><FaCreditCard /> Procced to Pay</button> */}
                    <div className="footer-button"><StripeButton price={cartTotal}/></div>
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
