const initialState = {
  /*
  groups: [],
  */
  groups: [{
    id: 1,
    groupName: 'aaa',
    groupAdminId: 2,
  },{
    id: 2,
    groupName: 'bbb',
    groupAdminId: 2,
  }],

  members: [{
    //associations
    id: 1,
    groupId: 1,
    name: 'aaa.name',
    userId: 2,
    role: 'admin',
  },{
    //associations
    id: 2,
    groupId: 1,
    name: 'bbb.name',
    userId: 3,
    role: 'user',
  }],
};

const filterMember = (groupId, userId) => {
  //state.members.filter(member => member.id !== payload.userId);
}

function myGroupsReducer(state = initialState, {type, payload}) {
  switch (type) {
    case 'ADD_GROUPS':
      return {
        ...state,
        groups: payload};
    case 'REMOVE_MEMBER':
      return {
        ...state,
        members: filterMember(payload.groupId, payload.userId),
      };
    default:
      return state;
  }

}

export default myGroupsReducer;
