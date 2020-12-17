import { authApi } from "../api/api";
import jwtDecode from "jwt-decode";

const SET_USER_DATA = "/auth/SET_USER_DATA";

const initState = {
  userId: null,
  username: null,
  isAuth: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const login = (username, password) => async (dispatch) => {
  return await authApi.signin(username, password).then((response) => {
    if (response.status === 200) {
      if (response.data.token) {
        var decodedToken = jwtDecode(response.data.token);
        dispatch(setAuthUserData(decodedToken.user_id, decodedToken.username, true));
        localStorage.setItem("token", response.data.token);
      }
    }
  });
};

export const signup = (username, firstName, lastName, password) => async (
  dispatch
) => {
  console.log(
    `username = ${username}; fisrtName = ${firstName}; lastName = ${lastName}; password = ${password}`
  );
};

export const setAuthUserData = (userId, username, isAuth) => ({
  type: SET_USER_DATA, payload: { userId, username, isAuth }
});

export default authReducer;
