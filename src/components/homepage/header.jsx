import React, { useState } from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Stack, Typography, Box, MenuItem, TextField } from "@mui/material";
import { PrimaryButton } from "../../commons";
import { colors } from "../../styles/globals";

const data = [
  { text: "profile", btext: "book seat" },
  { text: "with", btext: "hire a bus" },
  { text: "change", btext: "Track parcel" },
];

const currencies = [
  {
    label: "nbh",
    value: "coming soon",
  },
  {
    label: "bvg",
    value: "coming soon",
  },
  {
    label: "hgv",
    value: "coming soon",
  },
  {
    label: "JPY",
    value: "coming soon",
  },
];
const Header = () => {
  const [froCity, setFrocity] = useState("");
  const [show, setShow] = useState("profile");
  const [toCity, setTocity] = useState("");
  const [departureDate, setDepartureDate] = useState(dayjs("2022-04-17"));

  const handleDepartureDateChange = (newDate) => {
    const month = newDate.$M + 1;
    const formattedDate = newDate.$y + "-" + month + "-" + newDate.$D;
    setDepartureDate(dayjs(formattedDate));
  };

  return (
    <>
      <Stack
        direction={["column", "row"]}
        alignItems={"center"}
        justifyContent={"center"}
        minHeight={["60vh", "75vh"]}
        py={[2, 0]}
      >
        <Stack
          alignItems={"flex-start"}
          justifyContent={"center"}
          width={["90%", "50%"]}
        >
          <Box p={[1, 3]}>
            <Typography
              fontSize={["2rem", "2.8rem"]}
              color={colors.NT}
              fontWeight={700}
              textTransform={"capitalise"}
            >
              The modern way to commute across cities
            </Typography>
          </Box>
        </Stack>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          width={["100%", "50%"]}
        >
          <Box
            color={"white"}
            height={"500px"}
            backgroundColor={`white`}
            borderRadius={"15px"}
            width={["100%", "500px"]}
          >
            <Box
              display="flex"
              flexDirection="row"
              //my={2}
              justifyContent={"space-between"}
              flexWrap={"wrap"}
              p={1}
              bgcolor={"white"}
              sx={{
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
              }}
            >
              {data?.map((ele, i) => (
                <Box key={i}>
                  <PrimaryButton
                    text={ele.btext}
                    pad={["0.2rem", "0.8rem"]}
                    BGColor={show === ele.text ? colors.NT : colors.OFF_GREY}
                    width={["100px", "150px"]}
                    textColor={show === ele.text ? colors.WHITE : colors.BLACK}
                    onButClick={() => {
                      setShow(ele.text);
                    }}
                  />
                </Box>
              ))}
            </Box>
            <Box p={2}>
              <Box>
                <PrimaryButton text={"coming soon"} />
              </Box>
              <Stack
                justifyContent={"center"}
                alignContent={"center"}
                //Direction={"column"}
                sx={{ marginX: "10px" }}
              >
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": {
                      my: 2,
                      width: ["95%", "420px"],
                    },
                  }}
                  noValidate
                  autoComplete="off"
                  my={2}
                >
                  <TextField
                    width={"300px"}
                    id="outlined-select-"
                    select
                    label="Departure Terminal"
                    // defaultValue="EUR"
                    value={froCity}
                    onChange={(event) => {
                      setFrocity(event.target.value);
                    }}
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.value}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    width={"300px"}
                    id="outlined-select"
                    select
                    label="Arrival Terminal"
                    value={toCity}
                    onChange={(event) => {
                      setTocity(event.target.value);
                    }}
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.value}
                      </MenuItem>
                    ))}
                  </TextField>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="Departure Date"
                        format="YYYY-MM-DD"
                        value={departureDate}
                        onChange={handleDepartureDateChange}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Box>
                <Box>
                  <PrimaryButton
                    text={"book seat"}
                    pad={"0.8rem"}
                    BGColor={colors.PRIMARY}
                    width={"95%"}
                    textColor={colors.WHITE}
                    onButClick={() => {}}
                  />
                </Box>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default Header;
