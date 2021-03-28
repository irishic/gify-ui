import { all, call } from 'redux-saga/effects'
import gifsSagas from './gifs/gifs.sagas'

export const rootSagas = function* () {
  yield all([call(gifsSagas)])
}