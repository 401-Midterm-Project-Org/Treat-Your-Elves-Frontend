import {Button, Checkbox, Dialog, DialogActions, DialogTitle, FormControl, FormControlLabel} from '@mui/material';
import {useState} from 'react';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Notification = () => {

  const notify = () => toast('🎇 Your alert Has been sent! 🎇');
  const [openNotifs, setOpenNotifs] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  const handleOpenNotifs = () => {
    setOpenNotifs(true);
  };

  const handleCloseNotifs = () => {
    setOpenNotifs(false);
  };

  return (
    <>
      <Button onClick={handleOpenNotifs} variant="contained"
              sx={{
                display: 'inline-grid'
              }}>Notifications</Button>

      <Dialog open={openNotifs} onClose={handleCloseNotifs}>
        <DialogTitle>Send Notification</DialogTitle>
        <FormControl>
          <FormControlLabel control={<Checkbox/>} label="Thirty days until Party!!!"/>
        </FormControl>
        <DialogActions>
          <Button onClick={() => {
            notify();
            handleCloseNotifs();
            handleSubmit();
          }}>Send</Button>
          <Button onClick={handleCloseNotifs}>Cancel</Button>
        </DialogActions>
      </Dialog>

      <ToastContainer/>
    </>
  );
};

export default Notification;
