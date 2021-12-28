import * as React from "react";
import {
  FormGroup,
  FormControl,
  FormHelperText,
  InputLabel,
  Input,
  Button,
  Modal,
  Box
} from "@mui/material";
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import HttpService from "../../services/httpService";

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

export default function Login(props) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  return (
    <>
    <Button color="secondary" onClick={handleOpen}><LoginTwoToneIcon />LOGIN</Button>
    <Modal
    open={open}
    onClose={handleClose}
    >
    <Box sx={style}>
    <FormGroup>
      <FormControl>
        <InputLabel htmlFor="my-input">User Name</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => {setUsername(e.target.value)}}/>
        <FormHelperText id="my-helper-text">eg. your email</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Password</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => {setPassword(e.target.value)}}/>
        <FormHelperText id="my-helper-text">
          We'll never share your password.
        </FormHelperText>
      </FormControl>
      <Button onClick={() => HttpService.login(username, password)}>Login</Button>
      <p>Don't have an account? Register!</p>
    </FormGroup>
    </Box>
    </Modal>
    </>
  );
}
