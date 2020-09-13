import { createStore, applyMiddleware } from 'redux'; //use store and middlewares in redux
import { logger } from 'redux-logger'; // use logger middleware for logging redux actions;

import { persistStore } from 'redux-persist'; //use redux persist for local and session storage

import rootReducer from './root-reducer'; //root reducer having all combined reducers;

// import thunk from 'redux-thunk'; //middleware which allows to fire functions

//REPLACING THUNK WITH REDUX SAGA FOR HANDLING ASYNC FUNCTIONS 
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root.saga';

const sagaMiddleware = createSagaMiddleware();

// const middlewares = [thunk]; // creating middleware array which consists an array of all middlewares used.
const middlewares = [sagaMiddleware];


// if(process.env.NODE_ENV === 'development'){
//     middlewares.push(logger)
// }

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); //creating redux stire which takes root-reducer and middlewares as two parameters [actions -> middleware -> reducers -> store -> DOM]

sagaMiddleware.run(rootSaga)  //To run redux saga middleware

export const persistor = persistStore(store); //convert store to persist storage and use this as wrapper for app

export default { store, persistor };