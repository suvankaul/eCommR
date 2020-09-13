import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Loader from '../../components/loader/Loader.component';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selector';
import ShopCollection from './shopCollection.component';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
})

const ShopCollectionContainer = compose(
    connect(mapStateToProps),
    Loader
)(ShopCollection)

export default ShopCollectionContainer