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
  // todo: need any state dependency?
});

const mapDispatchToProps = (dispatch) => ({
  register: async (name, username, password, email, handleClose) => {
    /*
    const result = await HttpService.register(username, name, password, email);
    const token = result.data.token;
    const id = result.data.user.id;

    const userGroupsResult = await HttpService.getUsersGroups(id, token);
    // get an array of association objects

    console.log(result.data);

    if (result.status === 201) {
      handleClose();

      dispatch({
        type: 'USER_REGISTERED',
        payload: {
          isLoggedIn: true,
          username,
          token,
          id,
          userGroups: userGroupsResult.data,
        },
      });
    }
     */

    // todo: get id from backend
    // todo: get token from backend
    dispatch({
      type: 'USER_REGISTERED',
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

export default connect(mapStateToProps, mapDispatchToProps)(function Register({register}) {

  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleRegister = () => {
    register(name, username, password, email, handleClose);
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
            <FormControl sx={{my: 2}}>
              <InputLabel htmlFor="name-input">your name</InputLabel>
              <Input id="name-input" aria-describedby="my-helper-text" onChange={(e) => {
                setName(e.target.value);
              }}/>
            </FormControl>
            <FormControl sx={{my: 2}}>
              <InputLabel htmlFor="email-input">email</InputLabel>
              <Input id="email-input" aria-describedby="my-helper-text" onChange={(e) => {
                setEmail(e.target.value);
              }}/>
            </FormControl>
            <FormControl sx={{my: 2}}>
              <InputLabel htmlFor="username-input">username</InputLabel>
              <Input id="username-input" aria-describedby="my-helper-text" onChange={(e) => {
                setUsername(e.target.value);
              }}/>
            </FormControl>
            <FormControl sx={{my: 2}}>
              <InputLabel htmlFor="password-input">password</InputLabel>
              <Input id="password-input" aria-describedby="my-helper-text" type="password" onChange={(e) => {
                setPassword(e.target.value);
              }}/>
            </FormControl>
            <Button variant="contained" onClick={handleRegister}>Register</Button>
          </FormGroup>
        </Box>
      </Modal>
    </>
  );
});
