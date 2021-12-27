import {useAuth0} from '@auth0/auth0-react';
import React, { useState } from 'react';
import Admin from '../main/Admin';
import GroupInterface from './GroupInterface';
import Members from './Members';

import HttpService from '../../services/httpService';
import { Typography, Box } from "@mui/material";

export default function Main(props) {
  let dbUserModel = {id: 10, email: 'test@helloworld.com'};
  let groupIds = [1234, 56];
  let members = ['member1','member2'];
  const setGroupIds = (...ids) => [...groupIds, ...ids];
  const setMembers = (...m)  => [...members, ...m];

  const {user, isAuthenticated} = useAuth0();

  // if(user){
  //   props.current.getGroups(user.email);
  // }

  // const [dbUserModel, setDbUserModel] = useState(async () =>
  // isAuthenticated
  // ? await HttpService.login(user.email, user.given_name, user.family_name)
  // : {});
  // const [groupIds, setGroupIds] = useState(async () =>
  // isAuthenticated
  // ? await HttpService.getUsersGroups(dbUserModel.id)
  // : [1234, 56]);
  // const [members, setMembers] = useState(async () =>
  // isAuthenticated
  // ? await HttpService.getGroupMembers([1234, 456])
  // : ['default1', 'default2']);
 
  /*
 setDbUserModel(async () => isAuthenticated && await HttpService.login(user.email, user.given_name, user.family_name));
 setGroupIds(async () => isAuthenticated && await HttpService.getUsersGroups(dbUserModel.id));// groups on associations table
 setMembers(async () => isAuthenticated && await HttpService.getGroupMembers([1234, 456])); // todo: need a group id for this to work
 */

// --> id, email, firtName, lastName, createdAt, updatedAt
// todo: pass dbUserModel data through to the child components


return (
  <main>
      {
        isAuthenticated ?
          <Box id="maincontent"
               sx={{
                 justifycontent: "center",
                 width: 1,
                 height: 1,
                 backgroundColor: "light.main",
                 color: "secondary.main",
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
                  backgroundColor: "primary.main",
                  fontSize: 12,
                }}
              >
                <Admin />
              </Box>
              <Box
                sx={{
                  m: 1,
                  padding: 1,
                  width: 250,
                  height: 1,
                  backgroundColor: "primary.main",
                }}
              >
                <GroupInterface myGroups={groupIds} groupsSetter={setGroupIds} />
              </Box>
            </div>
            <Box
              sx={{
                backgroundColor: "third.main",
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
                  backgroundColor: "light.main",
                  color: "primary.main"
                }}
              >
                <Members myMembers={members} myMembersSetter={setMembers} />
              </Box>

            </Box>
          </Box>
          :
          <Box
            sx={{
              justifycontent: "center",
              alignItems: 'center',
              width: 1,
              height: 800,
              backgroundColor: "light.main",
              color: "third.main"
            }}
          >
            <Typography>Not Logged In</Typography>
          </Box>
      }
    </main>
  );
}
