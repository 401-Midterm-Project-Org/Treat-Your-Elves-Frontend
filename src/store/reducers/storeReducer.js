const initialState = {
  user: {
    // id: null,
    // token: null,
    // isLoggedIn: false,
    // username: null,
    // email: null,
    // picture: null,
  },
  loadStatus: {
    isLoading: true,
  },
  // groups: [],
  groups: [{
    id: crypto.randomUUID(),
    groupName: 'inb4',
    groupMembers: [],
    // isSelected: true,
    // isAdministrator: true,
  }, {
    id: crypto.randomUUID(),
    groupName: 'second!',
    groupMembers: [{
      id: crypto.randomUUID(),
      name: 'testmember1'
    }, {
      id: crypto.randomUUID(),
      name: 'testmember2'
    }],
    // isSelected: true,
    isAdministrator: true,
  }],
};

export default function storeReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case 'USER_LOGGED_IN':
    case 'USER_REGISTERED':
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
          isLoading: payload.loadStatus.isLoading,
        },
      };
    case 'USER_LOGOUT':
      return initialState;
    case 'GROUP_CLICKED':
      return {
        ...state,
        groups: state.groups.map(group => {
          if (group.id === payload.group.id) {
            return {...group, isSelected: true};
          }
          return {...group, isSelected: false};
        }),
      };
    case 'GROUP_CREATED':
      if (state.groups.some(g => g.groupName === payload.group.groupName)) {
        return state;
      }

      return {
        ...state,
        groups: [
          ...state.groups,
          payload.group,
        ],
      };
    case 'MEMBER_ADDED':
      return {
        ...state,
        groups: state.groups.map(group => {
          if (group.id === payload.groupId) {
            return {...group, groupMembers: [...group.groupMembers, {id: payload.id, name: payload.name}]};
          }
          return group;
        }),
      };
    case 'MEMBER_REMOVED':
      return {
        ...state,
        groups: state.groups.map(group => {
          if (group.id === payload.groupId) {
            return {
              ...group,
              groupMembers: [
                ...group.groupMembers.filter(m => m.id !== payload.id),
              ]
            };
          }
          return group;
        }),
      };
    default:
      return state;
  }
}
