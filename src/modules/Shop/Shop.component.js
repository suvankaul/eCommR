import React, { Component} from 'react';
import './Shop.style.scss';

import CollectionOverview from '../../components/collection-overview/CollectionOverview.component';
class Shop extends Component{
    render(){
        const { collections } = this.props;
        return(
            <div className="shop-container">
               <CollectionOverview />
            </div>
        )
    }
}


export default (Shop);