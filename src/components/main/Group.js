import {Button, Typography} from '@mui/material';
import * as React from 'react';


export default function Group({myGroups}) {
  const _myGroups = myGroups ? myGroups : ['default1', 'default2'];

  return (
    <>
      <Typography variant="h4" component="div">
        Group
      </Typography>
      <Button variant="contained">+ Create Group</Button>
      <ul>
        {
          _myGroups.map(group => <li>{group}</li>)
        }
      </ul>
    </>
  );
}
