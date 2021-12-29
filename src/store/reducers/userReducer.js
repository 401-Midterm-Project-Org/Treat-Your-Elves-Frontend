const initialState = {
  /*
  isLoggedIn: false,
  isAdministrator: false,
  username: null,
  token: null,
  id: null,
  */

  isLoggedIn: true,
  username: 'testdummy',
  token: 'abcdefg',
  id: 2, // user's id
  userGroups: [{
    id: 1,
    groupId: 11,
    userId: 2,
    role: 'user',
  },{
    id: 2,
    groupId: 22,
    userId: 2,
    role: 'user',
  },{
    id: 3,
    groupId: 33,
    userId: 2,
    role: 'admin',
  }],
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
