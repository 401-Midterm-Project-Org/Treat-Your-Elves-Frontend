import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import {Button} from '@mui/material';


const handleLogout = () => {
  // todo: logout user
  // todo: dispatch logout state
};

export default function Logout() {
  return <Button color="secondary" onClick={handleLogout}><LogoutTwoToneIcon/>LOGOUT</Button>;
}
