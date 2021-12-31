import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import {Box, Button, FormControl, FormGroup, Input, InputLabel, Modal} from '@mui/material';
import {useState} from 'react';
import {connect} from 'react-redux';
import {login} from '../../store/actions/users';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Login({loginClick}) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    loginClick(username, password, handleClose);
  };

  return (
    <>
      <Button color="secondary" onClick={handleOpen}><LoginTwoToneIcon/>LOGIN</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <FormGroup type="submit">
            <FormControl sx={{my: 2}}>
              <InputLabel htmlFor="username-input">User Name</InputLabel>
              <Input id="username-input" aria-describedby="my-helper-text" onChange={(e) => {
                setUsername(e.target.value);
              }}/>
            </FormControl>
            <FormControl sx={{my: 2}}>
              <InputLabel htmlFor="password-input">Password</InputLabel>
              <Input id="password-input" aria-describedby="my-helper-text" type="password" onChange={(e) => {
                setPassword(e.target.value);
              }}/>
            </FormControl>
            <Button sx={{my: 2}} variant="contained" onClick={handleLogin}>Login</Button>
            {/* <p>Don't have an account? Register!</p> */}
          </FormGroup>
        </Box>
      </Modal>
    </>
  );
};

export default connect(
  () => ({
    //
  }),
  {
    loginClick: login,
  },
)(Login);
