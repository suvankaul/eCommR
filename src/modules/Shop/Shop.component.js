import React, { Component} from 'react';
import './Shop.style.scss';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from '../../components/collection-overview/CollectionOverview.component';
import shopCollection from '../shopCollection/shopCollection.component';
import {firestore, convertCollectionSnapshotToObject } from '../../firebase/firebase.util';
import { updateCollections } from '../../redux/shop/shop.actions';

import Loader from '../../components/loader/Loader.component';

const CollectionOverviewWithLoader = Loader(CollectionOverview);

const ShopCollectionWithLoader = Loader(shopCollection)

class Shop extends Component{
    state = {
        isLoading: true
    }
    unsubscribeFromSnapshot = null;

    componentDidMount = () => {

        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('shopCollections')

        //USING PROMISES AND FIREBASE get() METHOD
        collectionRef.get().then(snapshot => {
            const collMap = convertCollectionSnapshotToObject(snapshot);
            updateCollections(collMap);
            this.setState({ isLoading : false})
        })

        //USING SNAPSHOTS
        // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
        //    const collMap =  convertCollectionSnapshotToObject(snapshot);
        //    updateCollections(collMap)
        //    this.setState({isLoading : false})
        // })
    }

    render(){
        const { collections, match } = this.props;
        const { isLoading } = this.state;
        // return(
        //     <div className="shop-container">
        //         <Route exact path={`${match.path}`} component={CollectionOverview} />
        //         <Route path={`${match.path}/:collectionId`} component={shopCollection} />
        //     </div>
        // )

        //USING HIGHER ORDERED COMPONENTS (HOC)
        return(
            <div className="shop-container">
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithLoader isLoading={isLoading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <ShopCollectionWithLoader isLoading={isLoading} {...props} />} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(Shop);