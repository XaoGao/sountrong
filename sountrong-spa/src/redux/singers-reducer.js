import { singersApi } from "../api/api";

const SET_SINGERS_DATA = "/singers/SET_SINGERS_DATA";
const SET_SINGER_DATA = "/singers/SET_SINGER_DATA";

const initState = {
  singers: [],
  singer: null,
  sFetching: false,
};

const singersReducer = (state = initState, action) => {
  switch (action.type) {
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
  return await singersApi.getSingers().then((response) => {
    if (response.status === 200) {
      if (response.singers) {
        dispatch(setSingers(response.singers));
      }
    }
  });
};

export const setSingers = (singers) => ({
  type: SET_SINGERS_DATA,
  singers: singers,
});
