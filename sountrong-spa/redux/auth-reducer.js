import { authApi } from '../api/api';
import jwtDecode from 'jwt-decode';

const SET_USER_DATA = '/auth/SET_USER_DATA'

const initState = {
  userId: null,
  username: null,
  isAuth: false
}

export const authReducer = (state = initState, action) => {
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
