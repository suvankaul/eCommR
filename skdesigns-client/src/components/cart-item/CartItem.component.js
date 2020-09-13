import React, { Component } from 'react';
import './CartItem.style.scss';

class CartItem extends Component{
    render(){
        const { item : {imageUrl, price, name, quantity} } = this.props
        return(
            <div className="cart-item">
                <div className="cart-item-img"><img src={imageUrl} alt={name} /></div>
                <div className="cart-item-details">
                    <div className="card-item-name">{name}</div>
                    <div className="card-item-price">{quantity} x ${price}</div>
                </div>
            </div>
        )
    }
}

export default CartItem;