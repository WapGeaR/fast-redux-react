import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import undoable from 'redux-undo';

import user from './user';
import site from './site';

const rootReducer = combineReducers({
  user : user,
  site: site,
  router : routerStateReducer
});

export default rootReducer;
