import { Box, Typography } from "@mui/material";
import React from "react";
import Admin from "../main/Admin";
import GroupInterface from "./GroupInterface";
import Members from "./Members";
import Recipient from "./Recipient"

export default function Main() {
  return (
    <main>
      {
        <>
          <Box
            id="maincontent"
            sx={{
              justifycontent: "center",
              width: 1,
              height: 1,
              backgroundColor: "light.main",
              color: "secondary.main",
              m: 1,
              p: 2,
            }}
          >
            <div id="toolbar">
              <Box
                sx={{
                  m: 1,
                  padding: 1,
                  width: 250,
                  height: 1,
                  backgroundColor: "primary.main",
                }}
              >
                <GroupInterface />
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
              <Typography sx={{ fontSize: 30 }}>GROUP</Typography>
              <Box
                sx={{
                  m: 3,
                  padding: 1,
                  width: 250,
                  height: 717,
                  backgroundColor: "light.main",
                  color: "primary.main",
                }}
              >
                <Members />
                <Box
                  sx={{
                    ml:130,
                    padding: 1,
                    width: 450,
                    height: 100,
                    backgroundColor: "light.main",
                    fontSize: 12,
                    color: "black",

                  }}
                >
                  <Admin />
                </Box>
                  <Box
                  sx={{
                    ml:130,
                    padding: 1,
                    width: 450,
                    height: 160,
                    backgroundColor: "primary.main",
                    fontSize: 12,
                    color: "white",
                  }}
                >
                  <Recipient />
                </Box>
              </Box>
            </Box>
          </Box>
          {/* <Box
            sx={{
              justifycontent: "center",
              alignItems: "center",
              width: 1,
              height: 800,
              backgroundColor: "light.main",
              color: "third.main",
            }}
          >
            <Typography>Not Logged In</Typography>
          </Box> */}
        </>
      }
    </main>
  );
}
