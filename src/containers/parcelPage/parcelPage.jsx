import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {
  Box,
  Container,
  Typography,
  styled,
  Stack,
  Button,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { FormLoader } from "../../components/loader";
import { Formik, Form } from "formik";
import { Input, Select } from "../../commons";
import { colors } from "../../styles/globals";
import { PagesHero } from "../../commons";
import validate from "../../schema/formSchema";
import { IoArrowForwardSharp } from "react-icons/io5";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const StyledForm = styled(Box)({
  marginTop: "1rem",
  marginBottom: "1rem",
});

const StyledButton = styled(Button)({
  backgroundColor: colors.PRIMARY,
  width: "200px",
  marginTop: "1rem",
  boxShadow: "none",
  "&:hover": { backgroundColor: colors.PRIMARY, boxShadow: "none" },
});

const ParcelPage = () => {
  const params = useParams();
  const [leftPart, rightPart] = params.route.split("-");
  const [isSuccess, setIsSuccess] = useState(false);
  const [sender, setSender] = useState(true);
  const [reciever, setReciever] = useState(false);
  const [item, setItem] = useState(false);
  const [parcelSizes, setParcelSizes] = useState([]);
  const [parceltypes, setParcelTypes] = useState([]);
  const [parcelLocations, setParcelLocations] = useState([]);

  const fetchData = async (endpoints) => {
    const requests = endpoints.map((endpoint) => {
      return axios({
        method: "GET",
        url: endpoint.url,
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer pk_$2y$10$UgpdQ4RQ.z3FVsVTuaTaP.L0n/k3cKnNcgTbKb3CrItxJwKTsxeRi",
        },
      });
    });

    try {
      const responses = await axios.all(requests);
      return responses.map((response) => response.data.data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    const endpoints = [
      {
        url: "https://sandbox.myt40.com/api/v1/retailer/parcels/sizes",
      },
      {
        url: "https://sandbox.myt40.com/api/v1/retailer/parcels/types",
      },
      {
        url: "https://sandbox.myt40.com/api/v2/retailer/locations",
      },
    ];

    const fetchDataFromEndpoints = async () => {
      try {
        const [Sizes, Types, Locations] = await fetchData(endpoints);
        setParcelSizes(
          Sizes.map((item) => ({
            title: item.name,
            value: item.id,
          }))
        );
        setParcelTypes(
          Types.map((item) => ({
            title: item.name,
            value: item.id,
          }))
        );
        setParcelLocations(
          Locations.map((item) => ({
            title: item.name,
            value: item.id,
          }))
        );

        setIsSuccess(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromEndpoints();

    return () => {
      axios.CancelToken.source().cancel();
    };
  }, []);
  return (
    <>
      <ToastContainer />
      <PagesHero
        image={
          "https://images.pexels.com/photos/4246118/pexels-photo-4246118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        title="logistics"
        des="logistics/parcel"
      />
      <Container maxWidth="lg">
        <Box px={["0", "15rem"]} my={5} minHeight={"50vh"}>
          <Stack
            direction={"column"}
            width={"80%"}
            //   marginX={["3rem", "13rem"]}
            marginY={"3rem"}
            justifyContent="center"
            alignItems="center"
            paddingX={["1rem", "2rem"]}
            paddingY={["1rem", "2rem"]}
            sx={{
              border: `10px solid ${colors.PRIMARY}`,
              textAlign: "center",
              borderRadius: "30px",
            }}
          >
            <Stack direction={"row"} alignItems={"center"}>
              <Typography
                fontWeight={900}
                fontSize={"1.2rem"}
                textTransform={"capitalize"}
              >
                {leftPart}
              </Typography>
              <Typography mx={1} mt={1}>
                {" "}
                <IoArrowForwardSharp />{" "}
              </Typography>
              <Typography
                fontWeight={900}
                fontSize={"1.2rem"}
                textTransform={"capitalize"}
              >
                {rightPart}
              </Typography>
            </Stack>

            <Typography fontStyle={"italic"} fontWeight={"500"} m>
              Kindly select dropoff and pickup locations that matches your
              parcel route to avoid errors.
            </Typography>
          </Stack>

          <Formik
            validationSchema={validate}
            initialValues={{
              sender_first_name: "",
              sender_last_name: "",
              sender_address: "",
              sender_email: "",
              sender_phone_number: "",
              dropoff_location_id: "",
              reciever_first_name: "",
              reciever_last_name: "",
              reciever_phone_number: "",
              reciever_email: "",
              reciever_address: "",
              size_id: "",
              type_id: "",
              value: "",
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(async () => {
                const payload = {
                  sender: {
                    first_name: values.sender_first_name,
                    last_name: values.sender_last_name,
                    phone_number: values.sender_phone_number,
                    email: values.sender_email,
                    address: values.sender_address,
                    dropoff_location_id: values.dropoff_location_id,
                  },
                  recipient: {
                    first_name: values.reciever_first_name,
                    last_name: values.reciever_last_name,
                    phone_number: values.reciever_phone_number,
                    email: values.reciever_email,
                    address: values.reciever_address,
                    pickup_location_id: values.pickup_location_id,
                  },
                  item: {
                    value_currency: "NGN",
                    size_id: values.size_id,
                    type_id: values.type_id,
                    value: values.value,
                  },
                  route_id: params.id,
                };
                try {
                  const options = {
                    method: "POST",
                    url: "https://sandbox.myt40.com/api/v2/retailer/parcels",
                    headers: {
                      accept: "application/json",
                      "content-type": "application/json",
                      Authorization:
                        "Bearer pk_$2y$10$UgpdQ4RQ.z3FVsVTuaTaP.L0n/k3cKnNcgTbKb3CrItxJwKTsxeRi",
                    },
                    data: payload,
                  };
                  const response = await axios(options);
                  toast.success("parcel created successfully", {
                    position: "top-right",
                  });
                  // console.log(response);
                  resetForm();
                  setSubmitting(false);
                } catch (err) {
                  setSubmitting(false);

                  toast.error(err.response.data.message, {
                    position: "top-right",
                  });
                }
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  onClick={() => {
                    setSender(!sender);
                    reciever && setReciever(!reciever);
                    item && setItem(!item);
                  }}
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  <Typography textTransform={"uppercase"} fontWeight={700}>
                    {" "}
                    sender details
                  </Typography>
                  <Typography mx={2}>
                    {" "}
                    {sender ? <IoIosArrowDown /> : <IoIosArrowUp />}
                  </Typography>
                </Stack>
                {sender && (
                  <Box mb={10}>
                    <StyledForm>
                      <Input
                        label={"sender first name"}
                        name="sender_first_name"
                        type="text"
                        placeholder={`first name `}
                      />
                    </StyledForm>
                    <StyledForm>
                      <Input
                        label={"sender last name"}
                        name="sender_last_name"
                        type="text"
                        placeholder={` last name`}
                      />
                    </StyledForm>
                    <StyledForm>
                      <Input
                        label={"sender phone number"}
                        name="sender_phone_number"
                        type="text"
                        placeholder={` phone number`}
                      />
                    </StyledForm>

                    <StyledForm>
                      <Input
                        label={"sender email"}
                        name="sender_email"
                        type="text"
                        placeholder={` email address`}
                      />
                    </StyledForm>
                    <StyledForm>
                      <Input
                        label={"sender address"}
                        name="sender_address"
                        type="text"
                        placeholder={` address`}
                      />
                    </StyledForm>
                    <StyledForm>
                      <Select
                        name="dropoff_location_id"
                        option={parcelLocations}
                        label={"dropoff location"}
                      />
                    </StyledForm>
                  </Box>
                )}

                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  onClick={() => {
                    setReciever(!reciever);
                    sender && setSender(!sender);
                    item && setItem(!item);
                  }}
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  <Typography textTransform={"uppercase"} fontWeight={700}>
                    reciever details
                  </Typography>
                  <Typography mx={2}>
                    {" "}
                    {reciever ? <IoIosArrowDown /> : <IoIosArrowUp />}
                  </Typography>
                </Stack>
                {reciever && (
                  <Box mb={10}>
                    <StyledForm>
                      <Input
                        label={"reciever first name"}
                        name="reciever_first_name"
                        type="text"
                        placeholder={`first name `}
                      />
                    </StyledForm>
                    <StyledForm>
                      <Input
                        label={"reciever last name"}
                        name="reciever_last_name"
                        type="text"
                        placeholder={` last name`}
                      />
                    </StyledForm>
                    <StyledForm>
                      <Input
                        label={"reciever phone number"}
                        name="reciever_phone_number"
                        type="text"
                        placeholder={` phone number`}
                      />
                    </StyledForm>

                    <StyledForm>
                      <Input
                        label={"reciever email"}
                        name="reciever_email"
                        type="text"
                        placeholder={` email address`}
                      />
                    </StyledForm>
                    <StyledForm>
                      <Input
                        label={"reciever address"}
                        name="reciever_address"
                        type="text"
                        placeholder={` address`}
                      />
                    </StyledForm>
                    <StyledForm>
                      <Select
                        name="pickup_location_id"
                        option={parcelLocations}
                        label={"dropoff location"}
                      />
                    </StyledForm>
                  </Box>
                )}
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  onClick={() => {
                    setItem(!item);
                    reciever && setReciever(!reciever);
                    sender && setSender(!sender);
                  }}
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  <Typography textTransform={"uppercase"} fontWeight={700}>
                    parcel details
                  </Typography>
                  <Typography mx={2}>
                    {" "}
                    {item ? <IoIosArrowDown /> : <IoIosArrowUp />}
                  </Typography>
                </Stack>
                {item && (
                  <Box>
                    <StyledForm>
                      <Select
                        name="size_id"
                        option={parcelSizes}
                        label={"parcel size"}
                      />
                    </StyledForm>
                    <StyledForm>
                      <Select
                        name="type_id"
                        option={parceltypes}
                        label={"parcel type"}
                      />
                    </StyledForm>
                    <StyledForm>
                      <Input
                        label={"parcel value"}
                        name="value"
                        type="text"
                        placeholder={` value`}
                      />
                    </StyledForm>
                  </Box>
                )}
                <Stack alignItems={"center"}>
                  <StyledButton
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? <FormLoader /> : "create parcel"}
                  </StyledButton>
                </Stack>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </>
  );
};

export default ParcelPage;
