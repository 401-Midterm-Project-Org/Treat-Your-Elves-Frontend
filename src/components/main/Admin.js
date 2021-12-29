import {Button, Divider, List, ListItem, Typography} from '@mui/material';
import {connect} from 'react-redux';
import AddMember from '../forms/AddMember';
import Notification from '../forms/Notification';


const mapStateToProps = ({store}) => ({
  selectedGroup: store.groups.filter(group => group.isSelected)[0],
});

const mapDispatchToProps = (dispatch) => ({
  deleteGroup: (id) => {
    dispatch({
      type: 'GROUP_DELETED',
      payload: {
        id
      }
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(function Admin({selectedGroup, deleteGroup}) {
  return (
    <>
      <List sx={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'no-wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: 120
      }}>
        <ListItem>
          <Typography variant="h4" component="div">
            ADMIN
          </Typography>
        </ListItem>
      </List>
      <Divider/>
      <List sx={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'no-wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100
      }}>
        <ListItem>
          <Notification/>
        </ListItem>
        <ListItem>
          <AddMember/>
        </ListItem>
      </List>
      <Divider/>
      <List sx={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'no-wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100
      }}>
        <ListItem>
          <Button variant="contained">PAIR MEMBERS!</Button>
        </ListItem>
      </List>
      <Divider/>
      <List sx={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'no-wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100
      }}>
        <ListItem>
          <Button variant="contained" onClick={() => deleteGroup(selectedGroup.id)}>DELETE GROUP</Button>
        </ListItem>
      </List>
    </>
  );
});
