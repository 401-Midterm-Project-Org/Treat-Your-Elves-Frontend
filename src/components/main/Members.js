import {Button, Typography} from '@mui/material';
import {connect} from 'react-redux';


const mapStateToProps = ({store}) => ({
  members: store.groups
    .filter(group => group.isSelected)
    .flatMap(group => group.groupMembers),

  group: store.groups.filter(group => group.isSelected)[0],
});

const mapDispatchToProps = (dispatch) => ({
  showWishList: () => {
    dispatch({
      type: 'SHOW_WISHLIST',
      payload: true,
    });
  },

  removeMember: async (id, groupId) => {
    dispatch({
      type: 'MEMBER_REMOVED',
      payload: {
        id,
        groupId,
      }
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(function Members({group, members, showWishList, removeMember}) {
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
            {group.isAdministrator && <Button
              variant="contained"
              size="small"
              onClick={() => removeMember(member.id, group.id)}>Remove Member</Button>}
          </li>))}
      </ul>
    </>
  );
});
