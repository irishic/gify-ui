import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { SEARCH_GIFS } from './gifs.actionTypes';
import { sendSearchGifsRequest } from '../../api';
import { setGifsSearchResult } from './gifs.actions'

function* searchGifs ({payload}) {
  const { data } = yield sendSearchGifsRequest(payload)
  yield put(setGifsSearchResult(data.data))
}

function* onGifsSearch () {
  yield takeLatest(SEARCH_GIFS, searchGifs)
}

function* gifsSagas() {
  yield all([call(onGifsSearch)])
}

export default gifsSagas;