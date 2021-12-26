import { createStore, combineReducers } from 'redux';

import myGroupsReducer from './mygroups.js';
import userReducer from './user';
// import groupMemberReducer from './groupmembers.js'
// import wishlistReducer from './wishlist.js';

let reducers = combineReducers({
  mygroups: myGroupsReducer,
  user: userReducer,
  // members: groupMemberReducer,
  // wishlist: wishlistReducer
});

const store = () => {
  return createStore(reducers);
}

export default store;