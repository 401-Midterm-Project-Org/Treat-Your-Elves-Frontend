import { Button, Typography, FormGroup, FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import HttpService from '../../services/httpService';



export default function GroupInterface({myGroups, groupAdminId, groupsSetter}) {
  // TODO: This component will be a MUI pop-out drawer

  // groupName, groupAdminId
  const [groupName, setGroupName] = useState('default');

  const { user } = useAuth0();

  return (
    <>
      <Typography variant="h4" component="div">My Groups</Typography>
        <FormGroup>
          <FormControl>
            <InputLabel htmlFor="groupname">Group Name</InputLabel>
            <Input onChange={event => setGroupName(event.target.value)} id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">eg. My Amazing Group</FormHelperText>
          </FormControl>
          <Button variant="contained" onClick={() => HttpService.createGroup(groupName, user.email)} >+ Create Group</Button>
        </FormGroup>
      <List>
        {
          myGroups.map(groupId => (
            <ListItem key={groupId} disablePadding>
              <ListItemButton>
                <ListItemText primary={groupId}/>
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
    </>
  );
}