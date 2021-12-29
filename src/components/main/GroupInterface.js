import MenuOpenTwoToneIcon from '@mui/icons-material/MenuOpenTwoTone';
import {
  Box,
  Button,
  Drawer,
  FormControl,
  FormGroup,
  FormHelperText,
  Input,
  InputLabel,
  Typography
} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {Fragment, useState} from 'react';
import {connect} from 'react-redux';


const mapStateToProps = ({store}) => ({
  groups: store.groups,
});

const mapDispatchToProps = (dispatch) => ({
  handleGroupClick: group => {
    //
    dispatch({
      type: 'GROUP_CLICKED',
      payload: {
        group
      },
    });
  },

  createGroup: groupName => {
    dispatch({
      type: 'GROUP_CREATED',
      payload: {
        group: {
          id: crypto.randomUUID(),
          groupName,
          isSelected: false,
        }
      },
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(function GroupInterface({groups, handleGroupClick, createGroup}) {
  // groupName, groupAdminId
  const [state, setState] = useState({
    left: false
  });
  const [groupName, setGroupName] = useState();

  const handleCreateGroup = () => {
    createGroup(groupName);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({...state, [anchor]: open});
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: 250, justifyContent: 'center', alignItems: 'center'
      }}
      role="presentation"
      /*onKeyDown={toggleDrawer(anchor, false)}*/
    >
      <Box sx={{my: 4, justifyContent: 'center', alignItems: 'center'}}>
        <Typography variant="h4" component="div">Start A Group</Typography>
        <FormGroup sx={{my: 2, alignItems: 'center'}}>
          <FormControl sx={{my: 4}}>
            <InputLabel htmlFor="groupname">Group Name</InputLabel>
            <Input onChange={event => setGroupName(event.target.value)} id="my-input"
                   aria-describedby="my-helper-text"/>
            <FormHelperText id="my-helper-text">eg. My Amazing Group</FormHelperText>
          </FormControl>
          <Button variant="contained" onClick={handleCreateGroup} sx={{width: 200}}>+ Create Group</Button>
        </FormGroup>
      </Box>
      <Box sx={{my: 4}}>
        <Typography variant="h4" component="div">My Groups</Typography>
        <List sx={{my: 4}}>
          {
            groups?.map(group => (
              <ListItem key={group.id} disablePadding>
                <ListItemButton onClick={() => handleGroupClick(group)}>
                  <ListItemText primary={group.groupName}/>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Box>
      <Box sx={{my: 4}}>
        <Button variant="contained" onClick={toggleDrawer(anchor, false)} sx={{width: 200}}>CLOSE</Button>
      </Box>
    </Box>
  );

  return (
    <>
      {['left'].map((anchor) => (
        <Fragment key={anchor}>
          <MenuOpenTwoToneIcon onClick={toggleDrawer(anchor, true)}/>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>

        </Fragment>
      ))}
    </>
  );
});
