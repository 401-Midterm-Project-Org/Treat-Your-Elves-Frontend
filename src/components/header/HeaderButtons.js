import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import {Box, Button, Modal,} from '@mui/material';
import {useState} from 'react';
import {connect} from 'react-redux';
import Login from './Login';
import Logout from './Logout';
import Profile from './Profile';
import Register from './Register';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
});

export default connect(mapStateToProps)(function HeaderButtons({isLoggedIn}) {

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderLoginLogoutButton = () => {
    if (isLoggedIn) {
      return <>
        <Button color="secondary" onClick={handleOpen}><AccountCircleTwoToneIcon/>ACCOUNT</Button>
        <Logout/>
      </>;
    }
    return <>
      <Login/>
      <Register/>
    </>;
  };

  return (
    <>
      {renderLoginLogoutButton()}
      <Modal
        onClose={handleClose}
        aria-labelledby="My Profile"
        open={open}
      >
        <Box style={style}>
          <Profile />
        </Box>
      </Modal>
    </>
  );
});
