import {
  SET_TITLE
} from '../actions/site';

const initialState = {
  pageTitle: 'Default Project',
}

export default function site(state = initialState, action) {
    switch (action.type) {
        case SET_TITLE:
            return Object.assign({}, state, {
              pageTitle: action.value
            })
        default:
            return state;
    }
}
