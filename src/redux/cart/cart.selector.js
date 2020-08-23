import { createSelector } from 'reselect';

// input selector : gets whole state and returns slice of it
const selectCart = state => state.cart;

// output selector : uses create selector and input selector

//CartItems selector
export const selectCartItems  = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

//NavigationCart selector
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulatedQuantity , cartItem) => accumulatedQuantity + cartItem.quantity ,0)
)

//Navigation selector
export const selectCardVisibility = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((totalCost, cartItem) => totalCost + (cartItem.quantity * cartItem.price) ,0)
)