import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Container } from "@mui/material";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 3,
  },
};

const Partners = () => {
  const [brands, setBrands] = useState([]);
  const [isroutes, setIsRoutes] = useState(false);

  const fetchData = async () => {
    const options = {
      method: "GET",
      url: "https://sandbox.myt40.com/api/v1/retailer/brands",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer pk_$2y$10$UgpdQ4RQ.z3FVsVTuaTaP.L0n/k3cKnNcgTbKb3CrItxJwKTsxeRi",
      },
    };

    try {
      const { data } = await axios(options);
      setBrands(data.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
    return () => {
      axios.CancelToken.source().cancel();
    };
  }, []);
  return (
    <>
      <Container>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={500}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          //deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {brands?.map((item, i) => (
            <Box
              key={i}
              component={"img"}
              src={item.logo_url}
              alt={"logo"}
              marginTop={[0, 2]}
              mx={10}
              height={[50, 50]}
              width={[150, 200]}
            />
          ))}

          {/* <Box height={"50px"} bgcolor={"red"}>
            {" "}
            Item 1
          </Box> */}
        </Carousel>
      </Container>
    </>
  );
};

export default Partners;
