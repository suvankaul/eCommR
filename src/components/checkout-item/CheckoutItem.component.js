import React, { Component } from 'react';
import './CheckoutItem.style.scss';

import { FaTimesCircle, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

class CheckoutItem extends Component{
    render(){
        const { cartItem : {name, imageUrl, price, quantity} } = this.props;
        return(
            <div className="checkout-item">
                <div className="item-img">
                    <img src={imageUrl} alt={name} />
                </div>
                <div className="item-desc">{name}</div>
                <div className="item-qty"><FaAngleLeft /> {quantity} <FaAngleRight /></div>
                <div className="item-price">${price}</div>
                <div className="item-remove"><FaTimesCircle /></div>
            </div>
        )
    }
}

export default CheckoutItem;