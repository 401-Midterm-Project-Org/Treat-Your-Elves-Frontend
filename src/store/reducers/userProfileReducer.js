const initialState = {
  isLoading: false,
  email: null,
  picture: null,
};

function userProfileReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case 'PROFILE_UPDATED':
      console.log(payload);
      return payload;
    default:
      return state;
  }
}

export default userProfileReducer;
