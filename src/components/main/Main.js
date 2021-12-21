import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";

import Admin from "../main/Admin";
import Group from './Group';
import Members from'./Members';

export default function Main() {
  const [groups, setGroups] = useState(['default1', 'default2']);

  return (
    <div>
      <Box
        sx={{
          width: 600,
          height: 100,
          backgroundColor: "secondary.main",
        }}
      >
        <Admin />
      </Box>
      <Box
        sx={{
          width: 500,
          height: 500,
          backgroundColor: "primary.dark",
        }}
      >
        <Group myGroups={groups} myGroupsSetter={setGroups}/>
      </Box>
      <Box
        sx={{
          width: 800,
          height: 300,
          backgroundColor: "secondary.main",
        }}
      >
        <Members />
      </Box>
    </div>
  );
}
