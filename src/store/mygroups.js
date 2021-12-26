import axios from 'axios';

const APP_URL = process.env.REACT_APP_URL || 'http://localhost:3001';

let initialState= {
  groups: [
    { groupName: 'no Groups', groupAdminId: null },
  ],
};

async function myGroupsReducer(state = initialState, action) {

  let { type, payload } = action;

  switch(type) {
    case 'GET_GROUPS':
      
      let myGroups = await axios.get(`${APP_URL}/groups/${payload}`);
      
      return { myGroups }

    default:
      return state;
  }
}

export default myGroupsReducer;