import {Button, Typography} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';

import { useAuth0 } from "@auth0/auth0-react";

export default function Group({myGroups}) {

  const { user } = useAuth0();

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
