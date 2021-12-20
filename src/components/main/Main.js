import * as React from 'react';
import Box from '@mui/material/Box';

export default function Main() {
  return(
<Box
      sx={{
        width: 2400,
        height: 1095,
        backgroundColor: 'secondary.dark',
        '&:hover': {
          backgroundColor: 'secondary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      To contain Group Members/Recipient/Wishlist/Admin/Group Number(Name)
    </Box>
  )
}