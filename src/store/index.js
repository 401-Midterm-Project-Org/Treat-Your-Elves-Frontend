import {combineReducers, createStore} from 'redux';
import myGroupsReducer from './reducers/myGroupsReducer.js';
import userReducer from './reducers/userReducer';
// import groupMemberReducer from './reducers/groupMembersReducer.js'
// import wishlistReducer from './reducers/wishlistReducer.js';

const reducers = combineReducers({
  myGroups: myGroupsReducer,
  user: userReducer,
  // members: groupMemberReducer,
  // wishlist: wishlistReducer
});

const store = () => createStore(reducers);

export default store;
