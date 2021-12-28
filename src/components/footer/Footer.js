import {AppBar, Box, Toolbar} from '@mui/material';


export default function Footer() {
  return (
    <Box
      sx={{flexGrow: 1}}
      position="relative"
      min-height="100%"
      padding-bottom="2.5rem"
    >
      <AppBar position="absolute" bottom="0" width="100%" height="2.5rem">
        <Toolbar><a href="https://icons8.com/icon/cBCCvlQwZrNE/elf">Elf icon by Icons8</a></Toolbar>
      </AppBar>
    </Box>
  );
}
