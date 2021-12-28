import axios from 'axios';

const APP_URL = process.env.REACT_APP_URL || 'http://localhost:3001';

let initialState= {
  groups: [],
};

async function myGroupsReducer(state = initialState, action) {

  switch(action.type) {
    case 'GET_GROUPS':
    let array = action.payload;
    console.log('myGroupsReducer in mygroups.js: ', array);
    return {...state, groups: array }
  
    default:
      return state;
  }

}

export default myGroupsReducer;