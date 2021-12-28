// import axios from 'axios';
// const APP_URL = process.env.REACT_APP_URL || 'http://localhost:3001';

let initialState = {
  groups: [],
};

function myGroupsReducer(state = initialState, {type, payload}) {
  switch (type) {
    case 'SET_GROUPS':
      return {...state, groups: payload};
    default:
      return state;
  }

}

export default myGroupsReducer;
