import {Button, Typography} from '@mui/material';
import * as React from 'react';

export default function Members({members}) {
  const _members = members ? members : ['default1', 'default2'];
  return(
    <>
    <Typography variant="h4" component="div">
      Elves
    </Typography>

    <ul>
       {_members.map(member => <li>{member}<Button variant="contained" size="small">Wishlist</Button></li>)}
    </ul>
    </>
  )
}