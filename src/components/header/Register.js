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
  // todo: need any state dependency?
});

const mapDispatchToProps = (dispatch) => ({
  register: async (name, username, password, handleClose) => {
    const result = await HttpService.register(username, name, password);
    console.log(result);

    if (result.status === 201) {
      handleClose();

      dispatch({
        type: 'USER_REGISTERED',
        payload: {
          isLoggedIn: true,
          username: username,
          token: result.data.token,
          id: result.data.user.id,
        },
      });
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(function Register({register}) {

  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleRegister = () => {
    register(name, username, password, handleClose);
  };

  return (
    <>
      <Button color="secondary" onClick={handleOpen}><LoginTwoToneIcon/>REGISTER</Button>
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
              <FormHelperText id="my-helper-text">eg. email</FormHelperText>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="my-input">Name</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => {
                setName(e.target.value);
              }}/>
              <FormHelperText id="my-helper-text">eg. John Smith</FormHelperText>
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
            <Button onClick={handleRegister}>Register</Button>
          </FormGroup>
        </Box>
      </Modal>
    </>
  );
});
