import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import {Button} from '@mui/material';
import {connect} from 'react-redux';


const mapStateToProps = ({store}) => ({
  // todo: need any state?
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch({
      type: 'USER_LOGOUT',
      payload: {},
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(function Logout({logout}) {
  const handleLogout = () => {
    logout();
  };

  return <Button color="secondary" onClick={handleLogout}><LogoutTwoToneIcon/>LOGOUT</Button>;
});
