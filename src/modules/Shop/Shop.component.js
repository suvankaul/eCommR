import React, { Component} from 'react';
import './Shop.style.scss';
import '../../components/navigation/Navigation.component'
import Navigation from '../../components/navigation/Navigation.component';
import shopData from '../../shoppingData';
import PreviewCollection from '../../components/preview-collection/PreviewCollection.component'

class Shop extends Component{
    constructor(){
        super();
        this.state = {
            collections: shopData
        }
    }
    render(){
        const { collections } = this.state;
        return(
            <div className="shop-container">
                <Navigation></Navigation>
                <div className="shop-collections">
                    {
                        collections.map(({id, ...otherCollectionProps}) => (
                            <PreviewCollection key={id} {...otherCollectionProps}></PreviewCollection>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Shop;