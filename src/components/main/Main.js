import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";

import Admin from "../main/Admin";
import Group from './Group';
import Members from './Members';
import User from '../../models/User';

import { useAuth0 } from "@auth0/auth0-react";
import HttpService from '../../services/httpService';


export default function Main() {
  const { user, isAuthenticated } = useAuth0();
  const [groups, setGroups] = useState(['default1', 'default2']);
  const [members, setMembers] = useState(['default1']);

  // this gives us the "data" property, which is the backend user model
  const dbUserModel = isAuthenticated ? HttpService.login(user.email, user.given_name, user.family_name) : null;

  // todo: pass dbUserModel data through to the child components
  // --> id, email, firtName, lastName, createdAt, updatedAt


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
              <Group myGroups={groups} myGroupsSetter={setGroups} />
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
