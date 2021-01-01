import { singersApi } from "../api/api";

const SET_SINGERS_DATA = "/singers/SET_SINGERS_DATA";
const SET_SINGER_DATA = "/singers/SET_SINGER_DATA";
const SET_FETCHING = "/singers/SET_FETCHING";

const initState = {
  singers: [],
  singer: null,
  isFetching: true,
};

const singersReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case SET_SINGERS_DATA:
      return {
        ...state,
        singers: action.singers,
      };
    case SET_SINGER_DATA:
      return {
        ...state,
        singer: action.singer,
      };
    default:
      return state;
  }
};

export default singersReducer;

export const getSingers = () => async (dispatch) => {
  dispatch(setFetching(true));
  return await singersApi.getSingers().then((response) => {
    if (response.status === 200) {
      if (response.data.singers) {
        dispatch(setSingers(response.data.singers.data));
      }
    }
    dispatch(setFetching(false));
  });
};

export const getSinger = (singerId) => async (dispatch) => {
  dispatch(setFetching(true));
  return await singersApi.getSinger(singerId).then((response) => {
    if (response.status === 200) {
      if (response.data.singer) {
        dispatch(setSinger(response.data.singer.data));
      }
    }
    dispatch(setFetching(false));
  });
};

export const createSinger = (singerData) => async (dispatch) => {
  dispatch(setFetching(true));
  return await singersApi
    .createSinger(singerData)
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

export const setSingers = (singers) => ({
  type: SET_SINGERS_DATA,
  singers: singers,
});

export const setSinger = (singer) => ({
  type: SET_SINGER_DATA,
  singer: singer,
});

export const setFetching = (isFetching) => ({
  type: SET_FETCHING,
  isFetching: isFetching,
});
