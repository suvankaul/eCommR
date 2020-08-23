import CardActionTypes from './cart.types';

export const toggleCardVisibility = () => ({
    type: CardActionTypes.TOGGLE_CART_VISIBILITY
});

export const addCartItem = item => ({
    type: CardActionTypes.ADD_CART_ITEM,
    payload: item
});
