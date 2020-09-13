import { combineReducers } from 'redux'; //to combine all reducers;
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import menuReducer from './menu/menu.reducer';
import shopReducer from './shop/shop.reducer';

import { persistReducer } from 'redux-persist'; //reducer for redux persist
import storage from 'redux-persist/lib/storage'; //localstorage from redux persist

//key: main reducer object, storage,storage key from redux object, whitelist: array of reducers to persist
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    menu: menuReducer,
    shop: shopReducer
})

// export default combineReducers({
//     user: userReducer,
//     cart: cartReducer
// })
export default persistReducer(persistConfig, rootReducer)