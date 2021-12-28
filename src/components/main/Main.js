import {Box, Typography} from '@mui/material';
import React from 'react';
import Admin from '../main/Admin';
import GroupInterface from './GroupInterface';
import Members from './Members';


export default function Main() {
  return (
    <main>
      {
        <>
          <Box id="maincontent"
               sx={{
                 justifycontent: 'center',
                 width: 1,
                 height: 1,
                 backgroundColor: 'light.main',
                 color: 'secondary.main',
                 m: 1,
               }}
          >
            <div id="toolbar">
              <Box
                sx={{
                  m: 1,
                  padding: 1,
                  width: 250,
                  height: 150,
                  backgroundColor: 'primary.main',
                  fontSize: 12,
                }}
              >
                <Admin/>
              </Box>
              <Box
                sx={{
                  m: 1,
                  padding: 1,
                  width: 250,
                  height: 1,
                  backgroundColor: 'primary.main',
                }}
              >
                <GroupInterface/>
              </Box>
            </div>
            <Box
              sx={{
                backgroundColor: 'third.main',
                height: 1,
                width: 1,
              }}
              id="groupinterface"
            >
              <Typography sx={{fontSize: 30}}>GROUP</Typography>
              <Box
                sx={{
                  m: 3,
                  padding: 1,
                  width: 250,
                  height: 600,
                  backgroundColor: 'light.main',
                  color: 'primary.main'
                }}
              >
                <Members/>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              justifycontent: 'center',
              alignItems: 'center',
              width: 1,
              height: 800,
              backgroundColor: 'light.main',
              color: 'third.main'
            }}
          >
            <Typography>Not Logged In</Typography>
          </Box>
        </>
      }
    </main>
  );
}
