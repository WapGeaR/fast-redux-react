import {
  GET_USER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS,
  GET_USER_INFO_FAILURE, GET_USER_INFO_SUCCESS, CLEAR_COOKIE, TOGGLE_GET_USER_INFO,
  INTRODUCE_SUCCESS, INTRODUCE_FAILURE, INIT_INTRODUCE_DIALOG, SET_INTRODUCE_DIALOG_STEP } from '../actions/user';

export default function user(state = {introduceStep: 1}, action) {
    switch (action.type) {
        case GET_USER:
            return state;
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                error: null,
                token: action.req.data.id,
                userId: action.req.data.userId,
                updateCookie: true
            });
        case INTRODUCE_SUCCESS:
            return Object.assign({}, state, {
              updateUser: true
            });
        case INIT_INTRODUCE_DIALOG:
            return Object.assign({}, state, {
              introduceStep: 1
            });
        case SET_INTRODUCE_DIALOG_STEP:
            return Object.assign({}, state, {
              introduceStep: action.step
            });
        case INTRODUCE_FAILURE:
            return Object.assign({}, state, {
              introductionError: action.error.data.error
            });
        case TOGGLE_GET_USER_INFO:
            return Object.assign({}, state, {
              updateUser: action.value
            });
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                error: action.error.data.error.message
            });
        case GET_USER_INFO_SUCCESS:
            return Object.assign({}, state, {
                info: action.req.data
            });
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
               info: null,
               token: null,
               userId: null,
               clearCookie: true
            });
        case CLEAR_COOKIE:
            return Object.assign({}, state, {
                clearCookie: false
            });
        default:
            return state;
    }
}
