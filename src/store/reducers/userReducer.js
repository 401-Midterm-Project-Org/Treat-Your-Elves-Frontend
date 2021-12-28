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
      return {
        isLoggedIn: true,
        userName: payload.username,
        token: payload.token,
      };
    default:
      return state;
  }
}

export default userReducer;
