import {useAuth0} from '@auth0/auth0-react';
import {Box, Typography} from '@mui/material';
import React, {useEffect, useState} from 'react';

import HttpService from '../../services/httpService';
import Admin from '../main/Admin';
import GroupInterface from './GroupInterface';
import Members from './Members';


export default function Main(props) {
  /*
  let dbUserModel = {id: 10, email: 'test@helloworld.com'};
  let groupIds = [1234, 56];
  let members = ['member1','member2'];
  const setGroupIds = (...ids) => [...groupIds, ...ids];
  const setMembers = (...m)  => [...members, ...m];
  */

  const {user, isAuthenticated} = useAuth0();
  let members;
  let setMembers;
  // const [dbUserModel, setDbUserModel] = useState({});
  // const [groupIds, setGroupIds] = useState([]);
  // const [members, setMembers] = useState([]);

  // useEffect(() => {
  //     if (isAuthenticated) {
  //       // HttpService
  //       //   .login(user.email, user.given_name, user.family_name)
  //       //   .error(_ => {
  //       //     console.error(_);
  //       //   })
  //       //   .then(_ => {
  //       //     // setDbUserModel(_);
  //       //     // console.log(_);
  //       //   });
  //       /*
  //       HttpService
  //         // todo: need db group ids for this to work
  //         .getGroupMembers([1234, 456])
  //         .error(_ => {
  //           console.error(_);
  //         })
  //         .then(_ => {
  //           // setMembers(_);
  //           // console.log(_);
  //         });
  //         */
  //    HttpService
  //      .getUsersGroups(user.email)
  //      .error(_ => {
  //        console.error(_);
  //      })
  //      .then(_ => {
  //        // setGroupIds(_);
  //        // console.log(_);
  //      });
  //     }
  //   },
  //   [isAuthenticated]);


  return (
    <main>
      {
        isAuthenticated ?
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
                <GroupInterface current={props} />
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
                <Members myMembers={members} myMembersSetter={setMembers}/>
              </Box>

            </Box>
          </Box>
          :
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
      }
    </main>
  );
}
