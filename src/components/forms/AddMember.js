import {Button, Dialog, DialogActions, DialogTitle, FormControl, Input, InputLabel} from '@mui/material';
import {useState} from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HttpService from '../../services/httpService';


export default function AddMember() {

  const [openInvite, setOpenInvite] = useState(false);
  const [addUser, setAddUser] = useState([]);

  function handleSubmit(e) {
    HttpService.addMember('bryndarling@gmail.com', 1);
    console.log(e);
    setAddUser([...addUser, e]);
  }

  const handleOpenInvite = () => {
    setOpenInvite(true);
  };

  const handleCloseInvite = () => {
    setOpenInvite(false);
  };

  return (
    <>
      <Button onClick={handleOpenInvite} variant="contained"
              sx={{
                display: 'inline-grid'
              }}>Add Member</Button>
      <Dialog open={openInvite} onClose={handleCloseInvite}>
        <DialogTitle>Invite New Member</DialogTitle>
        <FormControl>
          <InputLabel htmlFor="my-input">Enter email</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text"/>
        </FormControl>
        <DialogActions>
          <Button onClick={() => {
            handleCloseInvite();
            handleSubmit();
          }}>Send</Button>
          <Button onClick={handleCloseInvite}>Cancel</Button>
        </DialogActions>
      </Dialog>

      <ToastContainer/>
    </>
  );
}
