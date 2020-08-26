import React, { Component} from 'react';
import './Shop.style.scss';
import { Route, withRouter } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/CollectionOverview.component';
import shopCollection from '../shopCollection/shopCollection.component';
class Shop extends Component{
    render(){
        const { collections,match } = this.props;
        return(
            <div className="shop-container">
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route path={`${match.path}/:collectionId`} component={shopCollection} />
            </div>
        )
    }
}


export default Shop;