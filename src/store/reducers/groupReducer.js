import {Types} from '../actions/groups';


const initialState = {
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

function groupReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case Types.GROUP_CLICKED:
      return {
        ...state,
        groups: state.groups.map(group => {
          if (group.id === payload.group.id) {
            return {...group, isSelected: true};
          }
          return {...group, isSelected: false};
        }),
      };
    case Types.GROUP_CREATED:
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
    case Types.GROUP_DELETED:
      return {
        ...state,
        groups: [
          ...state.groups.filter(group => group.id !== payload.id)
        ],
      };
    case Types.GROUP_MEMBER_ADDED:
      return {
        ...state,
        groups: state.groups.map(group => {
          if (group.id === payload.groupId) {
            return {...group, groupMembers: [...group.groupMembers, {id: payload.id, name: payload.name}]};
          }
          return group;
        }),
      };
    case Types.GROUP_MEMBER_DELETED:
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

export default groupReducer;
