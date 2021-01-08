import { singersApi } from "../api/api";

const SET_SINGERS_DATA = "/singers/SET_SINGERS_DATA";
const SET_SINGER_DATA = "/singers/SET_SINGER_DATA";
const SET_FETCHING = "/singers/SET_FETCHING";

const initState = {
  singers: [],
  singer: {
    id: 0,
    name: "",
    description: "",
    carierStart: new Date(),
    endOfCarier: null,
    mainImage: "",
    countOfAlbums: 0,
    albums: [],
  },
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
  return await singersApi
    .getSingers()
    .then((response) => {
      if (response.status === 200) {
        if (response.data.singers) {
          dispatch(setSingers(response.data.singers.data));
        }
      }
    })
    .finally(() => {
      dispatch(setFetching(false));
    });
};

export const getSinger = (singerId) => async (dispatch) => {
  dispatch(setFetching(true));
  return await singersApi
    .getSinger(singerId)
    .then((response) => {
      if (response.status === 200) {
        if (response.data.singer) {
          const singer = response.data.singer.data;
          const attr = singer.attributes;
          dispatch(
            setSinger(
              singer.id,
              attr.name,
              attr.description,
              attr.carierStart,
              attr.endOfCarier,
              attr.mainImage,
              attr.countOfAlbums,
              attr.albums
            )
          );
        }
      }
    })
    .finally(() => {
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

export const purgeSinger = () => async (dispatch) => {
  dispatch(setSinger(0, "", "", new Date(), null, "", 0, []));
};

export const updateSinger = (id, singerData) => async (dispatch) => {
  dispatch(setFetching(true));
  return await singersApi
    .updateSinger(id, singerData)
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

export const setSinger = (
  id,
  name,
  description,
  carierStart,
  endOfCarier,
  mainImage,
  countOfAlbums,
  albums
) => ({
  type: SET_SINGER_DATA,
  singer: {
    id,
    name,
    description,
    carierStart,
    endOfCarier,
    mainImage,
    countOfAlbums,
    albums,
  },
});

export const setFetching = (isFetching) => ({
  type: SET_FETCHING,
  isFetching: isFetching,
});
