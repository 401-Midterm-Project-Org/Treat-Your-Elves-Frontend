export const Types = {
  USER_LOGGED_IN: 'USER_LOGGED_IN',
  USER_REGISTERED: 'USER_REGISTERED',
  USER_LOGGED_OUT: 'USER_LOGGED_OUT',
};

export const login = ({name, username, email}) => ({
  type: Types.USER_LOGGED_IN,
  payload: {
    user: {
      id: crypto.randomUUID(),
      token: crypto.randomUUID(),
      isLoggedIn: true,
      name,
      username,
      email,
    },
    /*
        loadStatus: {
          isLoading: false,
        },
    */
  },
});

export const register = ({name, username, email}) => login({name, username, email});

export const logout = () => ({
  type: Types.USER_LOGGED_OUT,
  payload: {},
});
