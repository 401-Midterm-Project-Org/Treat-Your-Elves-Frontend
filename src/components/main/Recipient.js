import {Button, Typography} from '@mui/material';


export default function Recipient({myRecipient}) {
  return (
    <>
      <Typography variant="h4" component="div">
        My Elf
      </Typography>
      <ul>
        {myRecipient?.map(
          recipient => (
            <li
              key={recipient}>{recipient}
              <Button
                variant="contained"
                size="small">Wishlist</Button>
            </li>))}
      </ul>
    </>
  );
}