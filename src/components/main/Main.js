import { Paper, Grid, Box } from '@mui/material';
import React from 'react';
import {connect} from 'react-redux';
import Image from '../../theme/pixel-xmas.gif';
import Admin from '../main/Admin';
import Members from './Members';
import Recipient from './Recipient';


const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
  isAdministrator: state.user.isAdministrator,
});

const mapDispatchToProps = (dispatch) => ({
  //
}); 

export default connect(mapStateToProps, mapDispatchToProps)(function Main({isLoggedIn, isAdministrator}) {
  const styles = {
    paperContainer: {
      backgroundImage: `url(${Image})`,
      width: '100%',
      height: 800,
    }
  };

  return (
    <main xs={8} >
          <Paper style={styles.paperContainer}>
      <Grid container sx={{mt:'5%', justifyContent:'center'}}>
            {isLoggedIn &&
              <>
              <Grid item sx={{ m: 3, padding: 1, width: 250, height: 500, backgroundColor: 'light.main', color: 'primary.main', borderRadius: 5}} >
                <Members/>
              </Grid>
              <Grid item sx={{  m: 3, padding: 1, width: 450, height: 95, backgroundColor: 'light.main', fontSize: 12, color: 'black', borderRadius: 5 }} >
                <Admin/>
                <Box item sx={{ backgroundColor: 'primary.main', mt: 2, borderRadius: 5, color: 'white',  fontSize: 12, height: 200 }} >
                  <Recipient/>
                </Box>
              </Grid>
              </>}
    </Grid>
          </Paper>
    </main>
  );
});
