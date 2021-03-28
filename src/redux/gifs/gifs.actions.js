import { SAVE_GIF, SET_GIFS_SEARCH_RESULT, CLEAR_GIFS_SEARCH_RESULT, SEARCH_GIFS, REMOVE_GIF } from './gifs.actionTypes';

export const addGifToSaved = payload => ({
  type: SAVE_GIF,
  payload
})

export const removeGifFromSaved = payload => ({
  type: REMOVE_GIF,
  payload
})

export const setGifsSearchResult = payload => ({
  type: SET_GIFS_SEARCH_RESULT,
  payload
})

export const clearGifsSearchResult = () => ({
  type: CLEAR_GIFS_SEARCH_RESULT
})

export const searchGifs = payload => {
  return {
    type: SEARCH_GIFS,
    payload
  }
}