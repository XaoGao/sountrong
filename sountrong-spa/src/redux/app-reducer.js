import jwtDecode from "jwt-decode";
import { setAuthUserData } from "./auth-reducer";

const INIT_SUCCESS = "app/INIT_SUCCESS";

const initState = {
  init: false,
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case INIT_SUCCESS:
      return {
        ...state,
        init: true,
      };
    default:
      return state;
  }
};

export default appReducer;

export const initApp = () => (dispatch) => {
  let token = localStorage.getItem("token");
  if (token) {
    var decodedToken = jwtDecode(token);
    const now = new Date();
    let nowUtc = new Date(now.toString()).getTime() / 1000;
    if (decodedToken.exp < nowUtc) {
      localStorage.removeItem("token");
    } else {
      dispatch(setAuthUserData(decodedToken.user_id, decodedToken.username, true));
    }
    dispatch(initSuccess());
  }
  else {
    dispatch(initSuccess());
  }
};

export const initSuccess = () => ({ type: INIT_SUCCESS });
