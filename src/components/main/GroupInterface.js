import { Button, Typography, FormGroup, FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { useState } from "react";
import HttpService from '../../services/httpService';
import { connect } from 'react-redux';
import getGroups from '../../store/actions/groups';


export default function GroupInterface(props) {
  // TODO: This component will be a MUI pop-out drawer

  // groupName, groupAdminId
  // const [groupName, setGroupName] = useState('default');

  function setGroupName(e){

  }

  let groupName = '';
  let email = '';

  console.log(props.myGroups);
  
  return (
    <>
      <Typography variant="h4" component="div">My Groups</Typography>
        <FormGroup>
          <FormControl>
            <InputLabel htmlFor="groupname">Group Name</InputLabel>
            <Input onChange={event => setGroupName(event.target.value)} id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">eg. My Amazing Group</FormHelperText>
          </FormControl>
          <Button variant="contained" onClick={() => HttpService.createGroup(groupName, email)} >+ Create Group</Button>
        </FormGroup>
      <List>
      <Button variant="contained" onClick={() => HttpService.createGroup(groupName, email)} >+ Create Group</Button>
        {/* {
          props.myGroups.map(association => (
            <ListItem key={association.groupAdminId} disablePadding>
              <ListItemButton>
                <ListItemText primary={association.groupName}/>
              </ListItemButton>
            </ListItem>
          ))
        } */}
      </List>
    </>
  );
}
