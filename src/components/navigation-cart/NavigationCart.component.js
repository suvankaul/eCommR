import React, { Component } from 'react';
import './NavigationCart.style.scss';
import { FaShoppingCart, FaShoppingBag } from 'react-icons/fa';

import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selector'
import { toggleCardVisibility } from '../../redux/cart/cart.actions';

class NavigationCart extends Component{
    render(){
        const { toggleCardVisibility, totalItems } = this.props;
        return(
            <div className="cart-icon" onClick={toggleCardVisibility}>
                <FaShoppingBag />
                <div className="item-count">{totalItems}</div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    toggleCardVisibility: () => dispatch(toggleCardVisibility())
})

// In component selector - affects performance as component is always re-rendered if any of the state value changes
// const mapStateToProps = state => ({
//     totalItems: state.cart.cartItems.reduce((accumulatedQuantity , cartItem) => accumulatedQuantity + cartItem.quantity ,0)
// })

//using reselect memoization to improve performance
const mapStateToProps = state => ({
    totalItems : selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(NavigationCart);