import * as React from "react";
import {
  FormGroup,
  FormControl,
  FormHelperText,
  InputLabel,
  Input,
  Button,
} from "@mui/material";

export default function Login(props) {
  return (
    <FormGroup>
      <FormControl>
        <InputLabel htmlFor="my-input">User Name</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">eg. John Smith</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Password</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          We'll never share your password.
        </FormHelperText>
      </FormControl>
      <Button>Login</Button>
      <p>Don't have an account? Please sign up!</p>
    </FormGroup>
  );
}
