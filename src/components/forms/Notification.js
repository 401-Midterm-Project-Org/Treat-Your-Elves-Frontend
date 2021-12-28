import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
  Button, 
  Dialog, 
  DialogTitle, 
  DialogActions, 
  FormControl, 
  FormControlLabel,
  Checkbox} 
  from '@mui/material';

const Notification = () => {

  const notify = () => toast('🎇 Your alert Has been sent! 🎇');
  const [openNotifs, setOpenNotifs] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  const handleOpenNotifs = () => {
    setOpenNotifs(true);
  }

  const handleCloseNotifs = () => {
    setOpenNotifs(false)
  }

    return (
      <>
      <Button onClick={handleOpenNotifs}variant="contained"
      sx={{
        display: 'inline-grid'
      }}>Notifications</Button>

      <Dialog open={openNotifs} onClose={handleCloseNotifs}>
        <DialogTitle>Send Notification</DialogTitle>
        <FormControl>
          <FormControlLabel control={<Checkbox />} label="Thirty days until Party!!!" />
        </FormControl>
        <DialogActions>
          <Button onClick={ () => {notify(); handleCloseNotifs(); handleSubmit()}}>Send</Button>
          <Button onClick={handleCloseNotifs}>Cancel</Button>
        </DialogActions>
      </Dialog>      

      <ToastContainer/>
      </>
    );
}

export default Notification