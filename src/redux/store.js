import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './root-reducer';
import { rootSagas } from './root-sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSagas);

export const persistedStore = persistStore(store);

export default store;