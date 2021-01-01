import { albumsApi } from "../api/api";

const SET_ALBUM_DATA = 'albums/SET_ALBUM_DATA'
const SET_FETCHING = "/albums/SET_FETCHING";

const initState = {
  album: null,
  isFetching: true,
}

const albumReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ALBUM_DATA:
      return {
        ...state,
        album: action.album
      }
    case SET_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    default:
      return {
        ...state
      }
  }
}

export default albumReducer;