import {Button, Typography} from '@mui/material';


export default function Members({myMembers}) {
  return (
    <>
      <Typography variant="h4" component="div">
        Elves
      </Typography>
      <ul>
        {myMembers?.map(
          member => (
            <li
              key={member}>{member}
              <Button
                variant="contained"
                size="small">Wishlist</Button>
            </li>))}
      </ul>
    </>
  );
}
