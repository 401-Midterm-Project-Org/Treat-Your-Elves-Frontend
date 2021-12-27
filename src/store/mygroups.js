import axios from 'axios';

const APP_URL = process.env.REACT_APP_URL || 'http://localhost:3001';

let initialState= {
  groups: [
    { groupName: 'no Groups', groupAdminId: 'none' },
  ],
};

function myGroupsReducer(state = initialState, action) {

  let { type, payload } = action;

  switch(type) {
    case 'GET_GROUPS':
      
    return axios.get(`${APP_URL}/associations/${payload}`).then(response => {
      console.log(response.data);
      return { groups: response.data };
    });

    default:
      return state;
  }
}

export default myGroupsReducer;