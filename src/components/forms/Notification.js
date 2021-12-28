import {Button, Dialog, DialogActions, DialogTitle, FormControl, TextField} from '@mui/material';
import {useState} from 'react';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


const Notification = () => {

  const notify = () => toast('🎇 Email has been sent 🎇');
  const [openNotifs, setOpenNotifs] = useState(false);
  const [text, setText] = useState('')
  const [sent, setSent] = useState(false)

  const handleSend = async() => {
    setSent(true)
    try {
      await axios.post("http://localhost:3001/sendmail/", {
        text,
      })
    } catch(error) {
      console.log(error)
    }
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
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Notify your elves"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </FormControl>
        <DialogActions>
          <Button onClick={() => {
            notify();
            handleSend();
          }}>
            Send
          </Button>
          <Button onClick={handleCloseNotifs}>Cancel</Button>
        </DialogActions>
      </Dialog>

      <ToastContainer/>
    </>
  );
};

export default Notification;
