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
  wishlists: [{
    userName: 'tim',
    itemName: 'tv',
    // isSelected: true,
  }, {
    userName: 'tim',
    itemName: 'baseball',
    // isSelected: true,
  }, {
    userName: 'tray',
    itemName: 'vacation',
  }],
  groups: [{
    id: crypto.randomUUID(),
    groupName: 'inb4',
    groupMembers: [{
      id: crypto.randomUUID(),
      name: 'tim',
    }],
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
    case 'WISHLIST_CLICKED':
      // const groupMember = state.groups.filter(g => g.id === payload.groupId);
      // const wishlist = groupMember.wishlists.filter(l => l.userId === payload.memberId);

      const s = {
        ...state,
        wishlists: [
          ...state.wishlists.map(l => {
            if (l.userName === payload.userName) {
              return {...l, isSelected: true};
            }
            return {...l, isSelected: false};
          }),
        ],
      };
      console.log(payload, s);
      return s;
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
