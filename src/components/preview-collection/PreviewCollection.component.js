import React, { Component } from 'react';
import './PreviewCollection.style.scss';
import CollectionCard from '../collection-card/CollectionCard.component'

class PreviewCollection extends Component{
    render(){
        const { title, items } = this.props;
        return(
            <div className="collection-preview">
                <div className="collection-title">{title.toUpperCase()}</div>
                <div className="collection">
                    {
                        items.filter((item, index) => (index < 4)).map((item) => (
                            <CollectionCard key={item.id} imageUrl={item.imageUrl} name={item.name} price={item.price} ></CollectionCard>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default PreviewCollection;