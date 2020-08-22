import { createStore, applyMiddleware } from 'redux'; //use store and middlewares in redux
import { logger } from 'redux-logger'; // use logger middleware for logging redux actions;

import rootReducer from './root-reducer'; //root reducer having all combined reducers;

const middlewares = [logger]; // creating middleware array which consists an array of all middlewares used.
const store = createStore(rootReducer, applyMiddleware(...middlewares)); //creating redux stire which takes root-reducer and middlewares as two parameters [actions -> middleware -> reducers -> store -> DOM]

export default store;