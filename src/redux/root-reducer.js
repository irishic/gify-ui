import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { gifsReducer } from './gifs/gifs.reducer';

const gifsPersistConfig = {
  key: 'gifs',
  storage
};

export const rootReducer = combineReducers({
  gifs: persistReducer(gifsPersistConfig, gifsReducer),
});
