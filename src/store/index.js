import {combineReducers, createStore} from 'redux';
import storeReducer from './reducers/storeReducer';

const reducers = combineReducers({
  store: storeReducer,
});

const store = () => createStore(reducers);

export default store;
