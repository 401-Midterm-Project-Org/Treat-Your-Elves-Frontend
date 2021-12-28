import { Box, Typography, Paper } from "@mui/material";
import Image from "../../theme/pixel-xmas.gif"
import React from "react";
import Admin from "../main/Admin";
import GroupInterface from "./GroupInterface";
import Members from "./Members";
import Recipient from "./Recipient"


export default function Main() {
  const styles = {
    paperContainer: {
      backgroundImage: `url(${Image})`,
      width:1585,
      height:757,
    }
  }
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
              <Paper style={styles.paperContainer}>
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
                    mt:30,
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
          </Paper>
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
          </Box> */}
        </>
      }
    </main>
  );
}
