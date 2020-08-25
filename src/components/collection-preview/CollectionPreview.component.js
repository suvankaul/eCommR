import React, { Component } from 'react';
import './CollectionPreview.style.scss';
import CollectionCard from '../collection-card/CollectionCard.component'

class PreviewCollection extends Component{
    render(){
        const { title, items } = this.props;
        return(
            <div className="collection-preview">
                <div className="collection-title">{title.toUpperCase()}</div>
                <div className="collection">
                    {
                        items.filter((item, index) => index < 4).map((item) => (
                            <CollectionCard key={item.id} item={item}></CollectionCard>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default PreviewCollection;