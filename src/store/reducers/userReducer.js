import {Types} from '../actions/users';


const initialState = {
  user: {
    // id: crypto.randomUUID(),
    // token: null,
    // isLoggedIn: true,
    // username: 'santa',
    // email: 's@clause.biz',
    // picture: null,
  },
};

function userReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case Types.USER_LOGGED_IN:
    case Types.USER_REGISTERED:
      return {
        ...state,
        user: {
          ...state.user,
          id: payload.user.id,
          token: payload.user.token,
          isLoggedIn: payload.user.isLoggedIn,
          username: payload.user.username,
          name: payload.user.name,
          email: payload.user.email,
        },
        loadStatus: {
          ...state.loadStatus,
          isLoading: false,
        },
      };
    case Types.USER_LOGGED_OUT:
      return initialState;
    default:
      return state;
  }
}

export default userReducer;
