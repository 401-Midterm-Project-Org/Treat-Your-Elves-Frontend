import * as React from 'react';

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material/";
import MenuIcon from '@mui/icons-material/Menu';
import HeaderButtons from './HeaderButtons';



export default function Header() {
  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar >
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
            <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-elf-christmas-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"/>
            Treat Your Elves
          </Typography>
          <HeaderButtons />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
