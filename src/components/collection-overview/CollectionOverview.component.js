import React, { Component } from 'react';
import './CollectionOverview.style.scss';
import CollectionPreview from '../../components/collection-preview/CollectionPreview.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../redux/shop/shop.selector';

class CollectionOverview extends Component{
    render(){
        const { collections } = this.props;
        return(
            <div className="collection-overview">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})
export default connect(mapStateToProps)(CollectionOverview);
