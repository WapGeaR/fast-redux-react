import request from 'axios';
import config from '../../../package.json';

export const GET_USER = 'Users/GET_USER';
export const LOGIN = 'Users/LOGIN';
export const LOGIN_REQUEST = 'Users/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'Users/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'Users/LOGIN_FAILURE';

export const LOGOUT = 'Users/LOGOUT';
export const LOGOUT_REQUEST = 'Users/LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'Users/LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'Users/LOGOUT_FAILURE';

export const CLEAR_COOKIE = 'Users/CLEAR_COOKIE';

export function getUser(value) {
  return {
    type: GET_USER,
    payload: value
  };
}

export function getUserInfo(user) {
  return {
      type: GET_USER_INFO,
      promise: request.get(`http://${config.apiHost}:${config.apiPort}/api/users/${user.userId}?access_token=${user.token}`)
  };
}

export function toggleGetUserInfo(user) {
  return {
    type: TOGGLE_GET_USER_INFO,
    value: false
  }
}

export function auth(username, password) {
  return {
    type: LOGIN,
    promise: request.post(`http://${config.apiHost}:${config.apiPort}/api/users/login`, {username:username,password:password})
  };
}

export function logout(user) {
  return {
      type: LOGOUT,
      promise: request.post(`http://${config.apiHost}:${config.apiPort}/api/users/logout?access_token=${user.token}`)
  }
}

export function toogleClearCookie() {
    return {
        type: CLEAR_COOKIE
    };
}
