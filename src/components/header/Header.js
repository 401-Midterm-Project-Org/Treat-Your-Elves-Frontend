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

import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme/theme'

export default function Header() {
  return (
    <ThemeProvider theme={theme}>
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
            <Typography variant="h6" component="div" color="light" sx={{ flexGrow: 1 }}>
              Treat Your Elves
            </Typography>
            <Button color="light"><AddCircleTwoToneIcon />SIGN-UP</Button>
            <Button color="light"><LoginTwoToneIcon />LOGIN</Button>
            <Button color="light"><AccountCircleTwoToneIcon />ACCOUNT</Button>
            <Button color="light"><LogoutTwoToneIcon />LOGOUT</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
