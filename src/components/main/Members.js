import {Button, Typography, List, ListItem} from '@mui/material';
import {connect} from 'react-redux';


const mapStateToProps = ({store}) => ({
  members: store.groups
    .filter(group => group.isSelected)
    .flatMap(group => group.groupMembers),

  group: store.groups.filter(group => group.isSelected)[0],
});

const mapDispatchToProps = (dispatch) => ({
  showWishList: (username) => {
    dispatch({
      type: 'WISHLIST_CLICKED',
      payload: {
        username,
      },
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
      <List>
        {members?.map(
          member => (
            <ListItem key={member.id}>
              {member.name}
              <Button
                variant="contained"
                size="small"
                onClick={() => showWishList(member.name)}>Wishlist</Button>
                {/* remove member only shows if admin */}
              <Button
                variant="contained"
                size="small"
                onClick={() => removeMember(member.id, group.id)}>Remove</Button>
            </ListItem>))}
      </List>
    </>
  );
});
