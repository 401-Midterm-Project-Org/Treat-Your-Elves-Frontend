import * as React from "react";
import { Button, Typography } from "@mui/material";
import Notification from "../forms/Notification";
import AddMember from "../forms/AddMember";

export default function Admin() {
  return (
    <>
      <Typography variant="h4" component="div">
        Admin Interface
      </Typography>
      <Notification />
      <AddMember />
      <Button variant="contained">Remove Member</Button>
      <Button variant="contained">Match</Button>
    </>
  );
}
