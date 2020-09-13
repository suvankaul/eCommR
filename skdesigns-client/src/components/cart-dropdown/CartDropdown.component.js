import React, { Component } from 'react';
import './CartDropdown.style.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FaCheckCircle } from 'react-icons/fa';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selector'
import CartItem from '../cart-item/CartItem.component';
import { toggleCardVisibility } from '../../redux/cart/cart.actions';

class CartDropdown extends Component{
    render(){
        const { cartItems, history, dispatch } = this.props;
        return(
            <div className="cart-dropdown">
                <div className="cart-items">
                    {   cartItems.length > 0 ?
                        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) :
                        <img className="empty-cart" src={require('../../assets/empty_cart.png')} alt="empty-cart" />
                    }
                </div>
                <button disabled={cartItems.length === 0} className="checkout" onClick={() => {
                    history.push('/checkout')
                    dispatch(toggleCardVisibility())
                }}><FaCheckCircle></FaCheckCircle> CHECKOUT</button>
            </div>
        )
    }
}

// const mapStateToProps = state =>({
//     cartItems : state.cart.cartItems 
// })

// const mapStateToProps = state => ({
//     cartItems : selectCartItems(state)
// })

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
})


export default withRouter(connect(mapStateToProps)(CartDropdown));