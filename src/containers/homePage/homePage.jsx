import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Box, styled } from "@mui/material";
import { SubHeader, Headline } from "../../commons";
import { colors } from "../../styles/globals";
import {
  CompanyNumbers,
  Header,
  ParcelTable,
  Partners,
  Recognition,
  Slider,
} from "../../components/homepage";

const StyledBox = styled(Box)({
  background: `url(https://images.pexels.com/photos/380330/pexels-photo-380330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
  //backgroundColor: "white",
  backgroundSize: "cover",
  backgroundPosition: "Top Center",
  backgroundRepeat: "no-repeat",
  "@media screen and (max-width: 1200px)": {
    backgroundSize: "cover",
    backgroundPosition: "Bottom Right",
  },
});

const HomePage = () => {
  const [routes, setRoutes] = useState([]);
  const [parcels, setParcels] = useState([]);
  const [isroutes, setIsRoutes] = useState(false);
  

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
        url: "https://sandbox.myt40.com/api/v2/retailer/parcel-routes",
      },
      {
        url: "https://sandbox.myt40.com/api/v1/retailer/parcels",
      },
    ];

    const fetchDataFromEndpoints = async () => {
      try {
        const [Routes, Parcels] = await fetchData(endpoints);
        setRoutes(Routes);
        setParcels(Parcels);
        setIsRoutes(true);
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
      <StyledBox minHeight={["60vh", "75vh"]}>
        <Container maxWidth={"xl"}>
          <Header />
        </Container>
      </StyledBox>
      <Slider
        title="Click on a route to create parcel"
        data={routes}
        isroutes={isroutes}
      />

      <SubHeader
        title="view all your parcels in one place."
        des="lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit"
        image="https://images.pexels.com/photos/6347560/pexels-photo-6347560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        orderBox={"2"}
        orderPic={"1"}
        Size={"contain"}
        btext="view sent parcels"
      />
      <CompanyNumbers />
      <ParcelTable data={parcels.length > 0 ? parcels : null} />
      <Box bgcolor={colors.OFF_WHITE} marginBottom={[6, 8]}>
        <Headline title={"TRUSTED & GLOBALLY AWARDED "} />
        <Container maxWidth={"lg"}>
          <Partners />
          <Recognition />
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
