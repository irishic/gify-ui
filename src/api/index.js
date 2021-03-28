import axios from 'axios'
import { TRENDING_LINK, SEARCH_LINK } from './constants'

export const sendSearchGifsRequest = searchString => {
  if(!searchString) {
    // eslint-disable-next-line no-undef
    return axios.get(`${TRENDING_LINK}?api_key=${process.env.REACT_APP_API_KEY}`)
  }
  // eslint-disable-next-line no-undef
  return axios.get(`${SEARCH_LINK}?api_key=${process.env.REACT_APP_API_KEY}&q=${searchString}`)
}