import React, { useEffect, lazy, Suspense} from 'react';
import './Shop.style.scss';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Spinner } from 'react-bootstrap';
// import CollectionOverview from '../../components/collection-overview/CollectionOverview.component';
// import shopCollection from '../shopCollection/shopCollection.component';
// import {firestore, convertCollectionSnapshotToObject } from '../../firebase/firebase.util';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selector';


//*********************CONTAINERS********************
// import CollectionOverviewContainer from '../../components/collection-overview/CollectionOverview.container'
// import ShopCollectionContainer from '../shopCollection/ShopCollection.container';

//**************DIRECTLY USE HOC IN CODE********/
// const CollectionOverviewWithLoader = Loader(CollectionOverview);
// const ShopCollectionWithLoader = Loader(shopCollection)

const CollectionOverviewContainer = lazy(() => import('../../components/collection-overview/CollectionOverview.container'));
const ShopCollectionContainer = lazy(() => import('../shopCollection/ShopCollection.container'))


const Shop = ({ fetchCollectionsStartAsync, match}) => {

    // unsubscribeFromSnapshot = null;

    useEffect(() => {
        fetchCollectionsStartAsync()
    },[fetchCollectionsStartAsync])

    return(
        <div className="shop-container">
            <Suspense fallback={
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            }>
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={ShopCollectionContainer}/>
            </Suspense>
        </div>
    )

    // componentDidMount = () => {

    //     const { fetchCollectionsStartAsync } = this.props;
    //     fetchCollectionsStartAsync();
 
    //     //************WITHOUT THUNK*************
    //     // const { updateCollections } = this.props;
    //     // const collectionRef = firestore.collection('shopCollections')

    //     //USING PROMISES AND FIREBASE get() METHOD
    //     // collectionRef.get().then(snapshot => {
    //     //     const collMap = convertCollectionSnapshotToObject(snapshot);
    //     //     updateCollections(collMap);
    //     //     this.setState({ isLoading : false})
    //     // })

    //     //USING SNAPSHOTS
    //     // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
    //     //    const collMap =  convertCollectionSnapshotToObject(snapshot);
    //     //    updateCollections(collMap)
    //     //    this.setState({isLoading : false})
    //     // })
    // }


    // render(){
    //     const { collections, match, isCollectionFetching, isCollectionLoaded } = this.props;
    //     // const { isLoading } = this.state;
    //     // return(
    //     //     <div className="shop-container">
    //     //         <Route exact path={`${match.path}`} component={CollectionOverview} />
    //     //         <Route path={`${match.path}/:collectionId`} component={shopCollection} />
    //     //     </div>
    //     // )

    //     //***********************USING HIGHER ORDERED COMPONENTS (HOC)*****************
    //     // return(
    //     //     <div className="shop-container">
    //     //         <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithLoader isLoading={!isCollectionLoaded} {...props} />} />
    //     //         <Route path={`${match.path}/:collectionId`} render={(props) => <ShopCollectionWithLoader isLoading={!isCollectionLoaded} {...props} />} />
    //     //     </div>
    //     // )

    //     //***************************USING CONTAINERS**************
    //     return(
    //         <div className="shop-container">
    //             <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
    //             <Route path={`${match.path}/:collectionId`} component={ShopCollectionContainer}/>
    //         </div>
    //     )
    // }
}

// const mapDispatchToProps = dispatch => ({
//     updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
// })

const mapStateToProps = createStructuredSelector({
    // isCollectionFetching : selectIsCollectionFetching,
    isCollectionLoaded : selectIsCollectionLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Shop);