import React, { Component } from 'react';
import './CartDropdown.style.scss';
import { connect } from 'react-redux';
import CartItem from '../cart-item/CartItem.component';

class CartDropdown extends Component{
    render(){
        const { cartItems } = this.props;
        return(
            <div className="cart-dropdown">
                <div className="cart-items">
                    {
                        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    }
                </div>
                <button className="checkout">CHECKOUT</button>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    cartItems : state.cart.cartItems 
})

export default connect(mapStateToProps)(CartDropdown);