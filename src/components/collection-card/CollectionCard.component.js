import React, { Component } from 'react';
import './CollectionCard.style.scss';

import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addCartItem } from '../../redux/cart/cart.actions';
class CollectionCard extends Component{
    render(){
        const { item, addCartItem} = this.props;
        const { imageUrl, name, price } = item;
        console.log(item, imageUrl, name, price)
        return(
            <Card className="collection-card">
                <div className="collection-img">
                    <div className="img" style={{backgroundImage: `url(${imageUrl})`}}></div>
                    <div className="content">
                        <button className="content-text" onClick={() => addCartItem(item)}>ADD TO CART</button>
                    </div>
                </div>
                <div className="collection-details">
                    <div className="collection-title">{name}</div>
                    <div className="collection-price">&#36;{price}</div>
                </div>
            </Card>
        )
    }
}

const mapDispatchToProps  = dispatch => ({
    addCartItem : item => dispatch(addCartItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionCard);