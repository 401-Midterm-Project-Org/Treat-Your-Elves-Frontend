import {combineReducers, createStore} from 'redux';
import groupReducer from './reducers/groupReducer';
import loadStatusReducer from './reducers/loadStatusReducer';
import userReducer from './reducers/userReducer';
import wishListReducer from './reducers/wishListReducer';


const reducers = combineReducers({
  group: groupReducer,
  loadStatus: loadStatusReducer,
  user: userReducer,
  wishList: wishListReducer,
});

const store = () => createStore(reducers);

export default store;
