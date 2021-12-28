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

export default function Register(props) {

  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  // console.log(username)
  return (
    <>
    <Button color="secondary" onClick={handleOpen}><LoginTwoToneIcon />REGISTER</Button>
    <Modal
    open={open}
    onClose={handleClose}
    >
    <Box sx={style}>
    <FormGroup>
      <FormControl>
        <InputLabel htmlFor="my-input">User Name</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => {setUsername(e.target.value)}}/>
        <FormHelperText id="my-helper-text">eg. JohnSmith</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => {setName(e.target.value)}}/>
        <FormHelperText id="my-helper-text">eg. John Smith</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Password</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => {setPassword(e.target.value)}}/>
        <FormHelperText id="my-helper-text">
          We'll never share your password.
        </FormHelperText>
      </FormControl>
      <Button onClick={() => HttpService.register(username, name, password)} >Register</Button>
    </FormGroup>
    </Box>
    </Modal>
    </>
  );
}
