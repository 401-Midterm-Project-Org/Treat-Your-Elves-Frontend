import * as React from 'react';
import { AppBar, Box, Toolbar } from '@mui/material/';

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }} position="relative" min-height="100%" padding-bottom="2.5rem">
      <AppBar position="absolute" bottom="0" width="100%" height="2.5rem">
        <Toolbar>
          Place Holder for Footer Icons / Links
        </Toolbar>
      </AppBar>
    </Box>
  );
}