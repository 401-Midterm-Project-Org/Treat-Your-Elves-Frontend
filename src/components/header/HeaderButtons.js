import * as React from 'react';

import {
  Button,
} from "@mui/material/";

import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

import { useAuth0 } from "@auth0/auth0-react";

import Profile from './Profile';

export default function HeaderButtons() {
  const { loginWithRedirect, logout } = useAuth0();
  
  return (
    <>
      <Button color="secondary"><AddCircleTwoToneIcon />SIGN-UP</Button>
      <Button color="secondary" onClick={() => loginWithRedirect()}><LoginTwoToneIcon />LOGIN</Button>
      <Button color="secondary"><AccountCircleTwoToneIcon />ACCOUNT</Button>
      <Button color="secondary" onClick={() => logout({ returnTo: window.location.origin })}><LogoutTwoToneIcon />LOGOUT</Button>
      <Profile />
    </>
  );
}