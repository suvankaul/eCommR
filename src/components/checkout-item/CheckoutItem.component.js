import React, { Component } from 'react';
import './CheckoutItem.style.scss';

import { connect } from 'react-redux';
import { removeCartItem, addCartItem, reduceCartItemQty } from '../../redux/cart/cart.actions';
import { FaTimes, FaMinus, FaPlus } from 'react-icons/fa';
import { Card } from 'react-bootstrap';


class CheckoutItem extends Component{
    render(){
        const { cartItem, clearItem, addCartItem, removeCartItem } = this.props;
        const {name, imageUrl, price, quantity} = cartItem;
        return(
            <Card className="checkout-item">
                <div className="item-img">
                    <img src={imageUrl} alt={name} />
                </div>
                <div className="item-details">
                    <div className="item-desc">{name}</div>
                    <div className="item-price">Price: <span className="price">${price}</span></div>
                    <div className="item-qty"> Qty:
                        <div className="item-qty-value">
                            <div className="item-qty-modify remove"><FaMinus onClick={() => removeCartItem(cartItem)} /></div>
                            <div className="item-qty-number">{quantity}</div>
                            <div className="item-qty-modify add"><FaPlus onClick={() => addCartItem(cartItem)} /></div>
                        </div>
                    </div>                    
                </div>
                <div className="item-remove"><div onClick={() => clearItem(cartItem)} className="remove"><FaTimes /></div></div>
            </Card>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(removeCartItem(item)),
    addCartItem: item => dispatch(addCartItem(item)),
    removeCartItem: item => dispatch(reduceCartItemQty(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);