import * as React from 'react';

import PropTypes from 'prop-types';

import { styled } from '@mui/material/styles';

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material/";

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

import { useAuth0 } from "@auth0/auth0-react";

import Profile from './Profile';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function HeaderButtons() {
  const { loginWithRedirect, logout } = useAuth0();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <>
      <Button color="secondary" onClick={() => loginWithRedirect()}><LoginTwoToneIcon />LOGIN</Button>
      <Button color="secondary" onClick={handleClickOpen}><AccountCircleTwoToneIcon />ACCOUNT</Button>
      <Button color="secondary" onClick={() => logout({ returnTo: window.location.origin })}><LogoutTwoToneIcon />LOGOUT</Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="My Profile"
        open={open}
      >
        <BootstrapDialogTitle id="account" onClose={handleClose}>
          ACCOUNT
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Profile />
        </DialogContent>
      </BootstrapDialog>
    </>
  );
}