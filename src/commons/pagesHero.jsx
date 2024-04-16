import React from "react";
import { Stack, Box, styled, Typography } from "@mui/material";

const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "end",
  justifyContent: "center",
  
});

const PagesHero = ({ image, title, des }) => {
  return (
    <>
      <StyledBox
        height={["40vh", "30vh"]}
        sx={{
          background: `url(${image})`,
          backgroundSize: ["cover","cover"],
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

        }}
      >
        <Stack
          direction={"column"}
          alignItems="center"
          justifyContent={"center"}
          bgcolor="white"
          textTransform="capitalize"
          p={2}
          borderRadius="15px 15px 0 0"
        >
          <Typography
            variant="h6"
            fontWeight={700}
            letterSpacing={".3rem"}
            textAlign={"center"}
          >
            {title}
          </Typography>
          <Typography fontSize={"0.8rem"}>{des}</Typography>
        </Stack>
      </StyledBox>
    </>
  );
};

export default PagesHero;
