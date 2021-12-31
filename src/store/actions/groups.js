export const Types = {
  GROUP_CLICKED: 'GROUP_CLICKED',
  GROUP_CREATED: 'GROUP_CREATED',
  GROUP_DELETED: 'GROUP_DELETED',
  GROUP_MEMBER_ADDED: 'GROUP_MEMBER_ADDED',
  GROUP_MEMBER_DELETED: 'GROUP_MEMBER_DELETED',
};

export const selectGroup = (group) => ({
  type: 'GROUP_CLICKED',
  payload: {
    group,
  },
});
