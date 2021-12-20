import * as React from 'react';
import Box from '@mui/material/Box';

export default function Main() {
  return(
    <div>
<Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'secondary.dark',
        '&:hover': {
          backgroundColor: 'secondary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
      >
      To contain Group Members/Recipient/Wishlist/Admin/Group Number(Name)
    </Box>
    <Box
    sx={{
      width: 500,
      height: 500,
      backgroundColor: 'primary.dark',
      '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
      },
    }}
  >
    To contain Group Members/Recipient/Wishlist/Admin/Group Number(Name)
  </Box>
  <Box
    sx={{
      width: 800,
      height: 300,
      backgroundColor: 'secondary.dark',
      '&:hover': {
        backgroundColor: 'secondary.main',
        opacity: [0.9, 0.8, 0.7],
      },
    }}
  >
    To contain Group Members/Recipient/Wishlist/Admin/Group Number(Name)
  </Box>
    </div>
  )
}