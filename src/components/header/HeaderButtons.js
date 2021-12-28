import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import {Box, Button, Modal,} from '@mui/material';
import {useState} from 'react';
import Login from './Login';
import Profile from './Profile';
import Register from './Register';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  alignitems: 'center',
};

export default function HeaderButtons({isLoggedIn}) {

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderLoginLogoutButton = () => {
    if (isLoggedIn) {
      return <>
        <Button color="secondary" onClick={handleOpen}><AccountCircleTwoToneIcon/>ACCOUNT</Button>
        <Button color="secondary"><LogoutTwoToneIcon/>LOGOUT</Button>
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
          <Profile/>
        </Box>
      </Modal>
    </>
  );
}
