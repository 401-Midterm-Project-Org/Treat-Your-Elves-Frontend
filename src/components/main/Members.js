import {Button, Typography, List, ListItem} from '@mui/material';
import {connect} from 'react-redux';
import HttpService from '../../services/httpService';

const mapStateToProps = (state) => ({
  myMembers: state.myGroups.members,
});
const mapDispatchToProps = (dispatch) => ({
  showWishList: () => {
    dispatch({
      type: 'SHOW_WISHLIST',
      payload: true,
    });
  },
  /*
  addMember: async (groupId, username, token) => {
    // const response = await HttpService.addMember(groupId, username, token);
    // const data = response.data;

    dispatch({
      type: 'ADD_GROUPS',
      payload:{
        groups: [{
          id: 1,
          name: 'aaa',
          email: 'aaa@aaa.com',
        },{
          id: 2,
          name: 'bbb',
          email: 'bbb@bbb.com',
        }],
      }
    });
  },
    */
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

export default connect(mapStateToProps, mapDispatchToProps)(function Members({myMembers, showWishList, removeMember}) {
  return (
    <>
      <Typography variant="h4" component="div">
        GROUP ELVES
      </Typography>
      <List>
        {myMembers?.map(
          member => (
            <ListItem key={member.id}>
              {member.name}
              <Button
                variant="contained"
                size="small"
                onClick={showWishList}>Wishlist</Button>
                {/* remove member only shows if admin */}
              <Button
                variant="contained"
                size="small"
                onClick={removeMember}>Remove</Button>
            </ListItem>))}
      </List>
    </>
  );
});
