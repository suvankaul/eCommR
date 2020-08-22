import { combineReducers } from 'redux'; //to combine all reducers;
import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer
})