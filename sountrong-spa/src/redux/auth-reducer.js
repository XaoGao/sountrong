import { authApi } from '../api/api';
import jwtDecode from 'jwt-decode';

const SET_USER_DATA = '/auth/SET_USER_DATA'

const initState = {
  userId: null,
  username: null,
  isAuth: false
}

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

export const login = (username, password) => async (dispatch) => {
  console.log(`username = ${username}; password = ${password}`)
}

export const signup = (username, firstName, lastName, password) => async (dispatch) => {
  console.log(`username = ${username}; fisrtName = ${firstName}; lastName = ${lastName}; password = ${password}`)
}

export default authReducer;