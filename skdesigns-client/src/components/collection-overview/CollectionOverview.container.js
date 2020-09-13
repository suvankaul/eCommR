import { connect } from 'react-redux';
import {createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';
import Loader from '../loader/Loader.component';
import CollectionOverview from './CollectionOverview.component';

import {compose} from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

// const CollectionOverviewConatiner = connect(mapStateToProps)(Loader(CollectionOverview))

const CollectionOverviewConatiner = compose(
    connect(mapStateToProps),
    Loader
)(CollectionOverview)

export default CollectionOverviewConatiner