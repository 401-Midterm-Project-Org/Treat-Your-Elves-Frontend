import * as React from "react";
import { Button, Typography } from "@mui/material";

export default function Admin() {
  return (
    <>
      <Typography variant="h4" component="div">
        Admin Interface
      </Typography>
      <Button variant="contained">Notifications</Button>
      <Button variant="contained">Add Member</Button>
      <Button variant="contained">Remove Member</Button>
      <Button variant="contained">Match</Button>
    </>
  );
}
