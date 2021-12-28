import * as React from 'react';
import Register from './Register';
import Login from './Login'

import {
  Button,
  Modal,
  Box,
} from "@mui/material/";

import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

import Profile from './Profile';

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

export default function HeaderButtons(props) {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <>
      <>
        <Button color="secondary" onClick={handleOpen}><AccountCircleTwoToneIcon />ACCOUNT</Button>
        <Button color="secondary"><LogoutTwoToneIcon />LOGOUT</Button>
      </>
        <Login />
        <Register />
      
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
}