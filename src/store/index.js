import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';


// import root Reducer
import { rootReducer } from './root-reducer';

// logger middleware -> middleware run before dispatcher
const middlewares = [logger];

// to use middleware need to use applyMiddleware with compose
const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer,undefined, composedEnhancers);