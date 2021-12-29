import {Button, Typography} from '@mui/material';
import {connect} from 'react-redux';


const mapStateToProps = ({store}) => ({
  members: store.groups
    .filter(group => group.isSelected && group.groupMembers?.length > 0)
    .flatMap(group => group.groupMembers),
});

const mapDispatchToProps = (dispatch) => ({
  showWishList: () => {
    dispatch({
      type: 'SHOW_WISHLIST',
      payload: true,
    });
  },

  removeMember: async (groupId, userId, token) => {
    // const removeMemberReponse = await HttpService.removeMember(groupId, userId, token);
    // const response = await HttpService.removeMember(groupId, userId, token);

    dispatch({
      type: 'REMOVE_MEMBER',
      payload: {
        groupId,
        userId,
      }
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(function Members({members, showWishList, removeMember}) {
  return (
    <>
      <Typography variant="h4" component="div">
        GROUP ELVES
      </Typography>
      <ul>
        {members?.map(member => (
          <li key={member.id}>
            {member.name}
            <Button
              variant="contained"
              size="small"
              onClick={showWishList}>Show Wishlist</Button>
            {/* remove member only shows if admin */}
            <Button
              variant="contained"
              size="small"
              onClick={removeMember}>Remove Member</Button>
          </li>))}
      </ul>
    </>
  );
});
