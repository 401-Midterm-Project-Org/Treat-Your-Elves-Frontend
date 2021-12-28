import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import {Box, Button, FormControl, FormGroup, FormHelperText, Input, InputLabel, Modal} from '@mui/material';
import {useState} from 'react';
import {connect} from 'react-redux';
import HttpService from '../../services/httpService';


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

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  login: async (username, password, handleClose) => {
    const result = await HttpService.login(username, password);

    if (result.status === 200) {
      handleClose();

      dispatch({
        type: 'LOGIN',
        payload: {
          isLoggedIn: true,
          userName: username,
          token: result.data.token,
        },
      });
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(function Login({login}) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login(username, password, handleClose);
  };

  return (
    <>
      <Button color="secondary" onClick={handleOpen}><LoginTwoToneIcon/>LOGIN</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <FormGroup>
            <FormControl>
              <InputLabel htmlFor="my-input">User Name</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => {
                setUsername(e.target.value);
              }}/>
              <FormHelperText id="my-helper-text">eg. your email</FormHelperText>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="my-input">Password</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => {
                setPassword(e.target.value);
              }}/>
              <FormHelperText id="my-helper-text">
                We'll never share your password.
              </FormHelperText>
            </FormControl>
            <Button onClick={handleLogin}>Login</Button>
            <p>Don't have an account? Register!</p>
          </FormGroup>
        </Box>
      </Modal>
    </>
  );
});
