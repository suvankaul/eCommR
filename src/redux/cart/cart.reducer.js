import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart, reduceCardItemQty } from './cart.utils';

const INITIAL_STATE ={
    hidden : true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_VISIBILITY :
            return{
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_CART_ITEM :
            return{
                ...state,
                cartItems : addItemToCart(state.cartItems, action.payload)
            };
        case CartActionTypes.REDUCE_CART_ITEM_QTY: 
            return {
                ...state,
                cartItems : reduceCardItemQty(state.cartItems, action.payload)
            };
        case CartActionTypes.REMOVE_CART_ITEM: 
            return {
                ...state,
                cartItems : removeItemFromCart(state.cartItems, action.payload)
            }
        default: return state;
    }
}

export default cartReducer;