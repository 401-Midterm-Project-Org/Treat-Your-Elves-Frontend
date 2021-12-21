import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material/";
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const { loginWithRedirect, logout } = useAuth0();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            >
            <MenuIcon />
          </IconButton>
          <Typography variant="h3" component="div" color="light" sx={{ flexGrow: 1 }}>
            Treat Your Elves
          </Typography>
          <Button color="secondary"><AddCircleTwoToneIcon />SIGN-UP</Button>
          <Button color="secondary" onClick={() => loginWithRedirect()}><LoginTwoToneIcon />LOGIN</Button>
          <Button color="secondary"><AccountCircleTwoToneIcon />ACCOUNT</Button>


          <Button color="secondary" onClick={() => logout({ returnTo: window.location.origin })}><LogoutTwoToneIcon />LOGOUT</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
