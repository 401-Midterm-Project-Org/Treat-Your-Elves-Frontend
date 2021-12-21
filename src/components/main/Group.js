import {Button, Typography} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';


export default function Group({myGroups}) {
  return (
    <>
      <Typography variant="h4" component="div">My Groups</Typography>
      <Button variant="contained">+ Create Group</Button>
      <List>
        {
          myGroups.map(group => (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={group}/>
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
    </>
  );
}
