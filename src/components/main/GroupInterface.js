import {Button, FormControl, FormGroup, FormHelperText, Input, InputLabel, Typography} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import HttpService from '../../services/httpService';


export default function GroupInterface({myGroups}) {
  // TODO: This component will be a MUI pop-out drawer

  // groupName, groupAdminId
  // const [groupName, setGroupName] = useState('default');

  function setGroupName(e) {
    // todo: dispatch to react store
  }

  let groupName = '';
  let email = '';

  const handleCreateGroup = () => {
    // todo: dispatch result to react store
    HttpService.createGroup(groupName, email);
  };


  return (
    <>
      <Typography variant="h4" component="div">My Groups</Typography>
      <FormGroup>
        <FormControl>
          <InputLabel htmlFor="groupname">Group Name</InputLabel>
          <Input onChange={event => setGroupName(event.target.value)} id="my-input" aria-describedby="my-helper-text"/>
          <FormHelperText id="my-helper-text">eg. My Amazing Group</FormHelperText>
        </FormControl>
        <Button variant="contained" onClick={handleCreateGroup}>+ Create Group</Button>
      </FormGroup>
      <List>
        {
          myGroups?.map(association => (
            <ListItem key={association.groupAdminId} disablePadding>
              <ListItemButton>
                <ListItemText primary={association.groupName}/>
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
    </>
  );
}
