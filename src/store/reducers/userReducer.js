const initialState = {
  isLoggedIn: false,
  username: null,
  token: null,
};

function userReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case 'LOGIN':
      console.log(payload);
      return payload;
    default:
      return state;
  }
}

export default userReducer;
