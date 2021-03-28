import { SAVE_GIF, SET_GIFS_SEARCH_RESULT, CLEAR_GIFS_SEARCH_RESULT, REMOVE_GIF } from './gifs.actionTypes';

const INITIAL_STATE = {
  savedGifs: [],
  gifsSearchResult: []
};

export const gifsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch(type) {
    case SAVE_GIF:
      return {
        ...state,
        savedGifs: [...state.savedGifs, payload]
      }
    case REMOVE_GIF:
      return {
        ...state,
        savedGifs: state.savedGifs.filter(gif => gif !== payload)
      }
    case SET_GIFS_SEARCH_RESULT:
      return {
        ...state,
        gifsSearchResult: [...payload]
      }
    case CLEAR_GIFS_SEARCH_RESULT:
      return {
        ...state,
        gifsSearchResult: []
      }
    default:
      return { ...state }
  }
}