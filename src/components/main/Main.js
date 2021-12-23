import * as React from "react";


import Admin from "../main/Admin";
import GroupInterface from './GroupInterface';
import Members from './Members';
import User from '../../models/User';

import { useAuth0 } from "@auth0/auth0-react";
import HttpService from '../../services/httpService';
import { Typography, Box } from "@mui/material";

export default function Main() {
  const { user, isAuthenticated } = useAuth0();

  // let dbUserModel = {id: 10, email: 'test@helloworld.com'};
  // let groupIds = [1234, 56];
  // let members = ['member1','member2'];
  let dbUserModel;
  let groupIds;
  let members;

  if (isAuthenticated) {
    // todo: how to block an async call without using await
    dbUserModel = HttpService.login(user.email, user.given_name, user.family_name);
    // console.log('MAIN -->', dbUserModel);

    // groups on associations table
    groupIds = HttpService.getUsersGroups(dbUserModel.id);
    members = HttpService.getGroupMembers([1234, 456]); // todo: need a group id for this to work
  }

  function setMembers(members){
    // todo: update the members variable
    // return [...members] new members
  }

  function setGroups(groupId){
    // change the object "groups" to be a new object
    // add previous groups, plus the new group
    groupIds = [...groupIds, groupId];
  }



  // --> id, email, firtName, lastName, createdAt, updatedAt
  // const dbUserModel = isAuthenticated ? HttpService.login(user.email, user.given_name, user.family_name) : null;
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
                <GroupInterface myGroups={groupIds} groupsSetter={setGroups} groupAdminId={dbUserModel.id}/>
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
