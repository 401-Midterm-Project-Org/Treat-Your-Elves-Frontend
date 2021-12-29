const initialState = {
  user: {
    // id: crypto.randomUUID(),
    // token: null,
    // isLoggedIn: true,
    // username: 'santa',
    // email: 's@clause.biz',
    // picture: null,
  },
  loadStatus: {
    isLoading: true,
  },
  wishlists: [{
    username: 'tim',
    itemName: 'tv',
    // isSelected: true,
  }, {
    username: 'tim',
    itemName: 'baseball',
    // isSelected: true,
  }, {
    username: 'rudolph',
    itemName: 'blue nose',
    // isSelected: true,
  }, {
    username: 'steven',
    itemName: 'fireplace',
    // isSelected: true,
  }, {
    username: 'steven',
    itemName: 'marshmallows',
    // isSelected: true,
  }, {
    username: 'steven',
    itemName: 'travel van',
    // isSelected: true,
  },],
  groups: [{
    id: crypto.randomUUID(),
    groupName: 'penguins',
    groupMembers: [{
      id: crypto.randomUUID(),
      name: 'tim',
    }, {
      id: crypto.randomUUID(),
      name: 'santa',
    },],
    // isSelected: true,
    // isAdministrator: true,
  }, {
    id: crypto.randomUUID(),
    groupName: 'polar bears',
    groupMembers: [{
      id: crypto.randomUUID(),
      name: 'rudolph'
    }, {
      id: crypto.randomUUID(),
      name: 'steven'
    }, {
      id: crypto.randomUUID(),
      name: 'santa',
    },],
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
    case 'DELETE_WISHLIST':
      return {
        ...state,
        wishlists: state.wishlists.filter(l => {
          return l.itemName !== payload.itemName /*&& l.username !== payload.username*/;
        }),
      };
    case 'WISHLIST_CLICKED':
      return {
        ...state,
        wishlists: [
          ...state.wishlists.map(l => {
            if (l.username === payload.username) {
              return {...l, isSelected: true};
            }
            return {...l, isSelected: false};
          }),
        ],
      };
    case 'GROUP_CREATED':
      if (state.groups.some(g => g.groupName === payload.group.groupName)) {
        return state;
      }

      return {
        ...state,
        wishlists: [
          ...state.wishlists,
          payload.wishlists,
        ],
        groups: [
          ...state.groups.map(g => {
            if (g.isSelected) {
              return {...g, isSelected: false};
            }
            return g;
          }),
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
    case 'GROUP_DELETED':
      return {
        ...state,
        groups: [
          ...state.groups.filter(group => group.id !== payload.id)
        ],
      };
    default:
      return state;
  }
}
