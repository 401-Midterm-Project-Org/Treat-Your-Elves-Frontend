import axios from 'axios';

const APP_URL = process.env.REACT_APP_URL || 'http://localhost:3001';

const getGroups = (email) => async (dispatch) => {
  let response;
  try {
    response = await axios.get(`http://localhost:3001/associations/${email}`);
    console.log('group action response: ', response);
  } catch (e) {
    console.log('getGroups error:', e);
  }
  dispatch({
    type: 'GET_GROUPS',
    payload: response.data
  });
};

export default getGroups;