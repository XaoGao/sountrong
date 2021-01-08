import { albumsApi } from "../api/api";
import { setAuthUserData } from "./auth-reducer";

const SET_ALBUM_DATA = "albums/SET_ALBUM_DATA";
const SET_FETCHING = "/albums/SET_FETCHING";

const initState = {
  album: {
    id: null,
    title: "",
    description: "",
    yearOfIssue: new Date(),
    countSong: 0,
    language: "",
    country: "",
    duration: "",
  },
  isFetching: true,
};

const albumReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ALBUM_DATA:
      return {
        ...state,
        album: action.album,
      };
    case SET_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};
export default albumReducer;

export const getAlbum = (id) => async (dispatch) => {
  dispatch(setFetching(true));
  return await albumsApi
    .getAlbum(id)
    .then((response) => {
      if (response.status === 200) {
        if (response.data.album.data) {
          const album = response.data.album.data
          const attr = response.data.album.data.attributes;
          dispatch(
            setAlbum(
              album.id,
              attr.title,
              attr.description,
              attr.yearOfIssue,
              attr.countSong,
              attr.language,
              attr.country,
              attr.duration
            )
          );
        }
      }
    })
    .catch((error) => {
      let er = error.response.data.error
        ? error.response.data.error
        : "Непредвиденная ошибка";
      throw Error(er);
    })
    .finally(() => {
      dispatch(setFetching(false));
    });
};

export const createAlbum = (formData) => async (dispatch) => {
  dispatch(setFetching(true));
  return await albumsApi
    .updateAlbum(formData)
    .then((response) => {
      if (response.status === 200) {
        return response;
      }
    })
    .catch((error) => {
      let er = error.response.data.error
        ? error.response.data.error
        : "Непредвиденная ошибка";
      throw Error(er);
    })
    .finally(() => {
      dispatch(setFetching(false));
    });
};

export const updateAlbum = (albumId, formData) => async (dispatch) => {
  dispatch(setFetching(true));
  return await albumsApi
    .updateAlbum(albumId, formData)
    .then((response) => {
      if (response.status === 200) {
        return response;
      }
    })
    .catch((error) => {
      let er = error.response.data.error
        ? error.response.data.error
        : "Непредвиденная ошибка";
      throw Error(er);
    })
    .finally(() => {
      dispatch(setFetching(false));
    });
};

export const purgeAlbum = () => async (dispatch) => {
  dispatch(setAlbum(null, "", "", new Date(), 0, "", "", ""));
};

export const setAlbum = (
  id,
  title,
  description,
  yearOfIssue,
  countSong,
  language,
  country,
  duration
) => ({
  type: SET_ALBUM_DATA,
  album: {
    id,
    title,
    description,
    yearOfIssue,
    countSong,
    language,
    country,
    duration,
  },
});

export const setFetching = (isFetching) => ({
  type: SET_FETCHING,
  isFetching: isFetching,
});
