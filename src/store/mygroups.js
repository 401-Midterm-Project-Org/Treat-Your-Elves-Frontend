import axios from 'axios';

const APP_URL = process.env.REACT_APP_URL || 'http://localhost:3001';

let initialState= {
  groups: [
    { groupName: 'no Groups', groupAdminId: 'none' },
  ],
};

async function myGroupsReducer(state = initialState, action) {

  let { type, payload } = action;

  switch(type) {
    case 'GET_GROUPS':
      
      let groups = await axios.get(`${APP_URL}/associations/${payload}`);

      console.log(groups);
      
      return { groups }

    default:
      return state;
  }
}

export default myGroupsReducer;