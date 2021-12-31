import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import {Button} from '@mui/material';
import {connect} from 'react-redux';
import {logout} from '../../store/actions/users';


function Logout({logoutClick}) {
  return <Button color="secondary" onClick={logoutClick}><LogoutTwoToneIcon/>LOGOUT</Button>;
};

export default connect(
  () => ({
    //
  }),
  ({
    logoutClick: logout,
  })
)(Logout);
