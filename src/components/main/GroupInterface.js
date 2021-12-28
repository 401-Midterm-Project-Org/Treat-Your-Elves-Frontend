import {Box, Button, Drawer, FormControl, FormGroup, FormHelperText, Input, InputLabel, Typography} from '@mui/material';
import MenuOpenTwoToneIcon from '@mui/icons-material/MenuOpenTwoTone';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import HttpService from '../../services/httpService';


export default function GroupInterface({myGroups}) {
  // TODO: This component will be a MUI pop-out drawer

  // groupName, groupAdminId
  const [state, setState] = React.useState({
    left: false
  });

  function setGroupName(e) {
    // todo: dispatch to react store
  }

  let groupName = '';
  let email = '';

  const handleCreateGroup = () => {
    // todo: dispatch result to react store
    HttpService.createGroup(groupName, email);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography variant="h4" component="div">My Groups</Typography>
        <FormGroup>
          <FormControl>
            <InputLabel htmlFor="groupname">Group Name</InputLabel>
            <Input onChange={event => setGroupName(event.target.value)} id="my-input" aria-describedby="my-helper-text"/>
            <FormHelperText id="my-helper-text">eg. My Amazing Group</FormHelperText>
          </FormControl>
          <Button variant="contained" onClick={handleCreateGroup}>+ Create Group</Button>
        </FormGroup>
        <List>
          {
            myGroups?.map(association => (
              <ListItem key={association.groupAdminId} disablePadding>
                <ListItemButton>
                  <ListItemText primary={association.groupName}/>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
        <Button variant="contained" onClick={toggleDrawer(anchor, false)}>CLOSE</Button>
    </Box>
  );

  return (
    <>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
        <MenuOpenTwoToneIcon onClick={toggleDrawer(anchor, true)}/>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          >
          {list(anchor)}
        </Drawer>

      </React.Fragment>
      ))}
    </>
  );
}
