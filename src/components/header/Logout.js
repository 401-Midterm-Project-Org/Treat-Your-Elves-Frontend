import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import {Button} from '@mui/material';
import {connect} from 'react-redux';


const mapStateToProps = (state) => ({
  // todo: need any state?
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    // todo: async/await logout on backend --> invalidate token

    dispatch({
      type: 'USER_LOGOUT',
      payload: {
        isLoggedIn: false,
        username: null,
        token: null,
        id: null,
      },
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(function Logout({logout}) {
  const handleLogout = () => {
    logout();
  };

  return <Button color="secondary" onClick={handleLogout}><LogoutTwoToneIcon/>LOGOUT</Button>;
});
