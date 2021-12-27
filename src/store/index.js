import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import myGroupsReducer from './mygroups.js';
import groupMemberReducer from './groupmembers.js'
import wishlistReducer from './wishlist.js';

let reducers = combineReducers({
  mygroups: myGroupsReducer,
  members: groupMemberReducer,
  wishlist: wishlistReducer
});

const middleware = applyMiddleware(thunk);

const store = () => {
  return createStore(reducers, middleware);
}

export default store;