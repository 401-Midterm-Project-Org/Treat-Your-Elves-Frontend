import {Button, Typography, Divider, ListItem, List} from '@mui/material';
import AddMember from '../forms/AddMember';
import Notification from '../forms/Notification';


export default function Admin() {
  return (
    <>
      <List sx={{
        display:'flex',
        flexDirection: 'column',
        flexWrap:'no-wrap',
        justifyContent:'center',
        alignItems:'center',
        width: 120
      }}>
        <ListItem>
          <Typography variant="h4" component="div">
            ADMIN
          </Typography>
        </ListItem>
      </List>
      <Divider />
      <List sx={{
        display:'flex',
        flexDirection: 'column',
        flexWrap:'no-wrap',
        justifyContent:'center',
        alignItems:'center',
        width: 100
        }}>
        <ListItem>
          <Notification />
        </ListItem>
        <ListItem>
          <AddMember/>
        </ListItem>
      </List>
      <Divider />
      <List sx={{
      display:'flex',
      flexDirection: 'column',
      flexWrap:'no-wrap',
      justifyContent:'center',
      alignItems:'center',
      width: 100
      }}>
        <ListItem>
          <Button variant="contained">PAIR MEMBERS!</Button>
        </ListItem>
      </List>
      <Divider />
      <List sx={{
      display:'flex',
      flexDirection: 'column',
      flexWrap:'no-wrap',
      justifyContent:'center',
      alignItems:'center',
      width: 100
      }}>
        <ListItem>
          <Button variant="contained">DELETE GROUP</Button>
        </ListItem>
      </List>
    </>
  );
}
