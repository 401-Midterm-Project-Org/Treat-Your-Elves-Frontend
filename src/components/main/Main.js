import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";

import Admin from "../main/Admin";
import GroupInterface from './GroupInterface';
import Members from './Members';
import User from '../../models/User';

import { useAuth0 } from "@auth0/auth0-react";
import HttpService from '../../services/httpService';

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
    <div>
      {
        isAuthenticated ?
          <><Box
            sx={{
              width: 600,
              height: 100,
              backgroundColor: "secondary.main",
            }}
          >
            <Admin />
          </Box><Box
            sx={{
              width: 500,
              height: 500,
              backgroundColor: "primary.dark",
            }}
          >
              <GroupInterface myGroups={groupIds} groupsSetter={setGroups} groupAdminId={dbUserModel.id}/>
            </Box><Box
              sx={{
                width: 800,
                height: 300,
                backgroundColor: "secondary.main",
              }}
            >
              <Members myMembers={members} myMembersSetter={setMembers} />
            </Box></>
        :
        <>
          <p>Not Logged In</p>
        </>
      }
    </div>
  );
}
