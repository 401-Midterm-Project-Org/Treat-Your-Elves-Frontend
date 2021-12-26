import axios from 'axios';

const APP_URL = process.env.REACT_APP_URL || 'http://localhost:3001';

let initialState= {
  user: { id: null, email: 'no email', firstName: 'Santa', lastName: 'Claus' },
};

async function userReducer(state = initialState, action) {

  let { type, payload } = action;

  switch(type) {
    case 'GET_USER':
      
      let user = await axios.get(`${APP_URL}/signin/${payload}`);
      
      return { user }

    default:
      return state;
  }
}

export default userReducer;
