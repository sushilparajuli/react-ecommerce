import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


// import root Reducer
import { rootReducer } from './root-reducer';


// persist store configuration
const persistConfig = {
  key: 'root',
  storage,
  blacklist : ['user'], // no to persist user
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// logger middleware -> middleware run before dispatcher
// eslint-disable-next-line no-undef
const middlewares = [process.env.NODE_ENV  === 'development' && logger, thunk].filter(Boolean);

// config for showing store in devtools
// eslint-disable-next-line no-undef 
const composedEnhancer = (process.env.NODE_ENV === 'development' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// to use middleware need to use applyMiddleware with compose
const composedEnhancers = composedEnhancer(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer,undefined, composedEnhancers);

export const persistor = persistStore(store);