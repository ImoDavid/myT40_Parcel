import React from "react";
import { Typography, Box } from "@mui/material";

const Headline = ({ title, text }) => {
  return (
    <Box mt={[5, 8]} paddingX={[2, 18]} py={3} textAlign={"center"}>
      <Typography
        fontSize={["1.5rem", "2.4rem"]}
        fontWeight={700}
        textTransform={"capitalize"}
      >
        {title}
      </Typography>
      <Box mt={2}>
        <Typography variant="p" fontSize={["1rem", "1rem"]}>
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default Headline;
