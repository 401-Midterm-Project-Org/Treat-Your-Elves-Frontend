const initialState = {
  user: {
    isLoggedIn: true,
    isAdministrator: false,
    username: null,
    email: null,
    picture: null,
  },
  loadStatus: {
    isLoading: true,
  },
  groups: [{
    //
    id: 0
  }],
  members: [{
    //
    id: 0
  }],
};

export default function storeReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case 'USER_LOGGED_IN':
    case 'USER_REGISTERED':
      return {
        ...state,
        payload,
      };
    case 'USER_LOGOUT':
      return initialState;
    default:
      return state;
  }
}
