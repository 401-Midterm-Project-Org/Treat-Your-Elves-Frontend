import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import {Box, Button, FormControl, FormGroup, Input, InputLabel, Modal} from '@mui/material';
import {useState} from 'react';
import {connect} from 'react-redux';


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

const mapStateToProps = ({store}) => ({
  //
});

const mapDispatchToProps = (dispatch) => ({
  login: async (username, password, handleClose) => {
    /*
    const result = await HttpService.login(username, password);

    // todo: get isAdministrator from backend, for now it's hardcoded all admins
    console.log(result.data);

    if (result.status === 200) {
      handleClose();

      dispatch({
        type: 'USER_LOGGED_IN',
        payload: {
          isLoggedIn: true,
          isAdministrator: true,
          username: username,
          token: result.data.token,
          id: result.data.user.id,
        },
      });
    }
     */
    handleClose();

    // todo: get name from backend
    // todo: get email from backend
    // todo: get id from backend
    // todo: get token from backend

    const name = 'santa';
    const email = 'saintnick@northpole.org';

    dispatch({
      type: 'USER_LOGGED_IN',
      payload: {
        user: {
          id: crypto.randomUUID(),
          token: crypto.randomUUID(),
          isLoggedIn: true,
          name,
          username,
          email,
        },
        loadStatus: {
          isLoading: false,
        },
      },
    });
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
});
