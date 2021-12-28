import {Button, Typography, Box} from '@mui/material';
import AddMember from '../forms/AddMember';
import Notification from '../forms/Notification';


export default function Admin() {
  return (
    <>
      <Typography variant="h4" component="div">
        Admin Interface
      </Typography>
      <Box sx={{
        display:'flex',
        flexDirection: 'row',
        flexWrap:'no-wrap',
        justifyContent:'space-evenly',
      }}>
      <Notification/>
      <AddMember/>
      <Button variant="contained">Remove Member</Button>
      <Button variant="contained">Match</Button>
      </Box>
    </>
  );
}
