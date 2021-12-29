import {AppBar, Box, IconButton, Toolbar, Typography,} from '@mui/material';
import {connect} from 'react-redux';
import GroupInterface from '../main/GroupInterface';
import HeaderButtons from './HeaderButtons';


const mapStateToProps = ({store}) => ({
  isLoggedIn: store.user.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  //
});

export default connect(mapStateToProps, mapDispatchToProps)(function Header({isLoggedIn}) {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          {isLoggedIn &&
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{mr: 2}} >
            <GroupInterface/>
          </IconButton>}
          <Typography variant="h3" component="div" color="light" sx={{flexGrow: 1}}>
            <img
              src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-elf-christmas-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"
              alt="logo"/>
            Treat Your Elves
          </Typography>
          <HeaderButtons/>
        </Toolbar>
      </AppBar>
    </Box>
  );
});
