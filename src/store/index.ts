import { compose, createStore, applyMiddleware, Middleware } from 'redux';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';



// import root Reducer
import { rootReducer } from './root-reducer';


export type RootState = ReturnType<typeof rootReducer>

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?:  typeof compose
  }
}

type ExtendedPersistConfig =  PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
}

// persist store configuration
const persistConfig : ExtendedPersistConfig = {
  key: 'root',
  storage,
  whitelist : ['cart'], // no to persist user
};
const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

// logger middleware -> middleware run before dispatcher
// eslint-disable-next-line no-undef
const middlewares = [process.env.NODE_ENV  !== 'production' && logger, sagaMiddleware].filter((middleware): middleware is Middleware => Boolean(middleware));

// config for showing store in devtools
// eslint-disable-next-line no-undef 
const composedEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// to use middleware need to use applyMiddleware with compose
const composedEnhancers = composedEnhancer(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer,undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);