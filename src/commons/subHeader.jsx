/* eslint-disable react/prop-types */
import React from "react";
import {
  Box,
  Stack,
  styled,
  Typography,
  Avatar,
  Container,
} from "@mui/material";
import { PrimaryButton } from "../commons";
import { colors } from "../styles/globals";
import { useNavigate } from "react-router-dom";

const StyledAboutBox = styled(Box)({
  width: "100%",
  height: "400px",
});

const StyledTextBox = styled(Box)({
  lineHeight: "1rem",
  "@media screen and (max-width: 1200px)": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

const SubHeader = ({
  btext = "see our packages",
  image,
  title,
  des,
  Size="cover",
  orderBox = "1",
  orderPic = "2",
  fontSize = ["1.8rem", "2.5rem"],
  onButClick,
  orderPicPC = "2",
  orderBoxPC="1",
}) => {
  const navigate = useNavigate();
  return (
    <>
      <Container maxWidth={"xl"}>
        <Stack direction={["column", "row"]} paddingY={2} marginBottom={"2rem"} paddingX={[0,9]}>
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            width={["100%", "80%"]}
            marginY={"3rem"}
            marginRight={["3rem"]}
            sx={{ order: [orderBox, orderBoxPC] }}
          >
            <StyledTextBox textAlign={["center", "left"]}>
              <Typography
                variant="h1"
                fontSize={fontSize}
                fontWeight={600}
                textTransform={"capitalize"}
              >
                {title}
              </Typography>
              <Typography my={3} fontSize={"1rem"} color={colors.GREY}>
                {des}
              </Typography>

              <PrimaryButton text={btext} width={"300px"} pad={["0.6rem"]} variant={"outlined"} onButClick={() => navigate(`/`)}/>
            </StyledTextBox>
            <Box></Box>
          </Stack>
          <StyledAboutBox
            sx={{
              background: `url(${image})`,
              backgroundSize:Size,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              order: [orderPic, orderPicPC],
            }}
          />
        </Stack>
      </Container>
    </>
  );
};

export default SubHeader;
