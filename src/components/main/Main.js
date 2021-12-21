import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";

import Admin from "../main/Admin";
import Group from './Group';

export default function Main() {
  const [groups, setGroups] = useState(['default1', 'default2']);

  return (
    <div>
      <Box
        sx={{
          width: 600,
          height: 100,
          backgroundColor: "secondary.dark",
          "&:hover": {
            backgroundColor: "secondary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Admin />
      </Box>
      <Box
        sx={{
          width: 500,
          height: 500,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        {/* To contain Group Members/Recipient/Wishlist/Admin/Group Number(Name) */}
        <Group myGroups={groups} myGroupsSetter={setGroups}/>
      </Box>
      <Box
        sx={{
          width: 800,
          height: 300,
          backgroundColor: "secondary.dark",
          "&:hover": {
            backgroundColor: "secondary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        To contain Group Members/Recipient/Wishlist/Admin/Group Number(Name)
      </Box>
    </div>
  );
}
