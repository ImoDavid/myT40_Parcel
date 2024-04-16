import React from 'react'
import { CiGlobe } from "react-icons/ci";
import { FaUserLock, FaAward } from "react-icons/fa";
import { Stack, Typography, Box, } from "@mui/material";
import { colors } from '../../styles/globals';



const Trust = [
    {
      title: "global",
      icon: <CiGlobe color={colors.PRIMARY} size={"5rem"} />,
      footer:
        "lorem ipsum dolor sit amet, consectetur adip",
    },
    {
      title: "secured",
      icon: <FaUserLock color={colors.PRIMARY} size={"5rem"} />,
      footer: `lorem ipsum dolor sit amet, consectetur adip`,
    },
    {
      title: "awarded",
      icon: <FaAward color={colors.PRIMARY} size={"5rem"} />,
      footer: "lorem ipsum dolor sit amet, consectetur adip",
    },
  ];
  

const Recognition = () => {
    return (<>
        <Stack
            direction={["column", "row"]}
            paddingY={"1rem"}
            alignItems={"center"}
            justifyContent="center"
          >
            {Trust.map((ele, i) => (
              <Stack
                key={i}
                alignItems={"center"}
                justifyContent="center"
                border={"1px solid black"}
                m={2} 
                p={2}
                borderRadius={"15px"}
                textAlign={"center"}
                bgcolor={colors.WHITE}
                width={"300px"}
              >
                <Box my={2}>
                  <Typography
                    textTransform={"uppercase"}
                    fontWeight={600}
                    fontSize={"1.5rem"}
                  >
                    {ele.title}
                  </Typography>
                </Box>
                <Box my={2}>{ele.icon}</Box>
                <Box my={2}>
                  <Typography fontWeight={500} color={colors.GREY}>
                    {ele.footer}
                  </Typography>
                </Box>
              </Stack>
            ))}
          </Stack>
    
    </>);
}
 
export default Recognition;