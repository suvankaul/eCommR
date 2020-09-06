import React, { Component } from 'react';
import './shopCollection.style.scss';
import CollectionCard from '../../components/collection-card/CollectionCard.component';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';

class ShopCollection extends Component{
    render(){
        const { collection } = this.props;
        const { title, items } = collection;
        console.log(collection)
        return(
            <div className="shop-collection-page">
                <div className="shop-collection-page-title">{title}</div>
                <div className="shop-collection-page-item">
                    {
                        items.map(item => <CollectionCard key={item.id} item={item} />)
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(ShopCollection);