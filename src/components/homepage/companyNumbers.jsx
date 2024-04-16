import React, { useState } from "react";
import { Heading } from "../../commons";
import { Container, Stack, Typography, Box, styled } from "@mui/material";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { colors } from "../../styles/globals";

const StyledBorder = styled(Box)({
  borderRight: `2px solid ${colors.PRIMARY}`,
  "@media screen and (max-width: 1200px)": {
    borderRight: "none",
    borderBottom: `1px solid ${colors.PRIMARY}`,
    paddingBottom: "2rem",
    margin: "1rem",
    width: "100%",
  },
});

const CompanyNumbers = () => {
  const [counterState, setCounterState] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterState(true)}
        onExit={() => setCounterState(false)}
      >
        <Box bgcolor={colors.BLACK} marginBottom={[6, 8]}>
          <Container maxWidth={"md"}>
            <Stack
              direction={["column", "row"]}
              paddingY={"6rem"}
              alignItems={"center"}
              justifyContent="center"
            >
              <StyledBorder>
                <Heading
                  title={
                    counterState && (
                      <>
                        <CountUp start={0} end={5000} duration={3.75} />
                        {"+"}
                      </>
                    )
                  }
                  des="happy customers"
                  x="0"
                  fontS="2.5rem"
                />
              </StyledBorder>
              <StyledBorder>
                <Heading
                  title={
                    counterState && (
                      <>
                        <CountUp start={0} end={300} duration={3.75} />
                      </>
                    )
                  }
                  des="locations"
                  x="0"
                  fontS="2.5rem"
                />
              </StyledBorder>
              <StyledBorder>
                <Heading
                  title={
                    counterState && (
                      <CountUp start={0} end={41000} duration={3.75} />
                    )
                  }
                  des="Partners"
                  x="0"
                  fontS="2.5rem"
                />
              </StyledBorder>
              <Heading
                title={
                  counterState && (
                    <>
                      <CountUp start={0} end={500} duration={3.75} />
                      {"+"}
                    </>
                  )
                }
                des="Abido shaker"
                x="0"
                fontS="2.5rem"
              />
            </Stack>
          </Container>
        </Box>
      </ScrollTrigger>
    </>
  );
};

export default CompanyNumbers;
