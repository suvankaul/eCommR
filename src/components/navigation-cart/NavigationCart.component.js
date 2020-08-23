import React, { Component } from 'react';
import './NavigationCart.style.scss';
import { FaShoppingCart, FaShoppingBag } from 'react-icons/fa';

import { connect } from 'react-redux';
import { toggleCardVisibility } from '../../redux/cart/cart.actions';

class NavigationCart extends Component{
    render(){
        const { toggleCardVisibility } = this.props;
        return(
            <div className="cart-icon" onClick={toggleCardVisibility}>
                <FaShoppingBag />
                <div className="item-count">1</div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    toggleCardVisibility: () => dispatch(toggleCardVisibility())
})

export default connect(null,mapDispatchToProps)(NavigationCart);