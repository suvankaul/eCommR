import React, { Component } from 'react';
import './CheckoutItem.style.scss';

import { connect } from 'react-redux';
import { removeCartItem, addCartItem, reduceCartItemQty } from '../../redux/cart/cart.actions';
import { FaTimesCircle, FaAngleLeft, FaAngleRight } from 'react-icons/fa';


class CheckoutItem extends Component{
    render(){
        const { cartItem, clearItem, addCartItem, removeCartItem } = this.props;
        const {name, imageUrl, price, quantity} = cartItem;
        return(
            <div className="checkout-item">
                <div className="item-img">
                    <img src={imageUrl} alt={name} />
                </div>
                <div className="item-desc">{name}</div>
                <div className="item-qty"><FaAngleLeft onClick={() => removeCartItem(cartItem)} /> {quantity} <FaAngleRight onClick={() => addCartItem(cartItem)} /></div>
                <div className="item-price">${price}</div>
                <div className="item-remove" onClick={() => clearItem(cartItem)}><FaTimesCircle /></div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(removeCartItem(item)),
    addCartItem: item => dispatch(addCartItem(item)),
    removeCartItem: item => dispatch(reduceCartItemQty(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);