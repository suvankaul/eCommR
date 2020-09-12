import CartActionTypes from './cart.types';

export const toggleCardVisibility = () => ({
    type: CartActionTypes.TOGGLE_CART_VISIBILITY
});

export const addCartItem = item => ({
    type: CartActionTypes.ADD_CART_ITEM,
    payload: item
});

export const removeCartItem = item => ({
    type: CartActionTypes.REMOVE_CART_ITEM,
    payload: item
})

export const reduceCartItemQty = item => ({
    type: CartActionTypes.REDUCE_CART_ITEM_QTY,
    payload: item
})

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
})