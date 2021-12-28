const initialState = {
  isLoggedIn: false,
  isAdministrator: false,
  username: null,
  token: null,
  id: null,
};

function userReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case 'USER_LOGIN':
    case 'USER_LOGOUT':
    case 'USER_REGISTERED':
      console.log(payload);
      return payload;
    default:
      return state;
  }
}

export default userReducer;
