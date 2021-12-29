import {Button, Typography} from '@mui/material';


export default function Members({myMembers}) {
  return (
    <>
      <Typography variant="h4" component="div">
        GROUP ELVES
      </Typography>
      <ul>
        {myMembers?.map(
          member => (
            <li key={member.id}>
              {member.name}
              <Button
                variant="contained"
                size="small">Wishlist</Button>
              <Button variant="contained">Remove Member</Button>
            </li>))}
      </ul>
    </>
  );
}
