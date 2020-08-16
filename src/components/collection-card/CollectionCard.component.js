import React, { Component } from 'react';
import './CollectionCard.style.scss';

import { Card } from 'react-bootstrap';

class CollectionCard extends Component{
    render(){
        const { imageUrl, name, price} = this.props;
        return(
            <Card className="collection-card">
                <div className="collection-img">
                    <div className="img" style={{backgroundImage: `url(${imageUrl})`}}></div>
                    <div className="content">
                        <div className="content-text">ADD TO CART</div>
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

export default CollectionCard;