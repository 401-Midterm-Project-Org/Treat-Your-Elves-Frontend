import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import {Box, Button, FormControl, FormGroup, Input, InputLabel, Modal} from '@mui/material';
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
  register: async (name, username, password, email, handleClose) => {
    const result = await HttpService.register(username, name, password, email);
    const token = result.data.token;
    const id = result.data.user.id;

    const userGroupsResult = await HttpService.getUsersGroups(id, token);
    // get an array of association objects

    // todo: get isAdministrator from backend, for now it's hardcoded all admins
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
          <FormGroup >
            <FormControl sx={{my: 2}} >
              <InputLabel htmlFor="my-input">your name</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => {
                setName(e.target.value);
              }}/>
            </FormControl>
            <FormControl sx={{my: 2}} >
              <InputLabel htmlFor="my-input">username</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => {
                setUsername(e.target.value);
              }}/>
            </FormControl>
            <FormControl sx={{my: 2}} >
              <InputLabel htmlFor="my-input">password</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" type="password" onChange={(e) => {
                setPassword(e.target.value);
              }}/>
            </FormControl>
            <FormControl sx={{my: 2}} >
              <InputLabel htmlFor="my-input">email</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => {
                setEmail(e.target.value);
              }}/>
            </FormControl>
            <Button variant="contained" onClick={handleRegister}>Register</Button>
          </FormGroup>
        </Box>
      </Modal>
    </>
  );
});
