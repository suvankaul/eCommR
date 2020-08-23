import React, { Component } from 'react';
import './CartDropdown.style.scss';

class CartDropdown extends Component{
    render(){
        return(
            <div className="cart-dropdown">
                <div className="cart-items"></div>
                <button className="checkout">CHECKOUT</button>
            </div>
        )
    }
}

export default CartDropdown;