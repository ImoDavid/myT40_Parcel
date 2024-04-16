import React, { useState, useRef } from "react";
import {
  Container,
  Typography,
  Stack,
  IconButton,
  styled,
  Card,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import { Link as RRLink } from "react-router-dom";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { IoArrowForwardSharp } from "react-icons/io5";
import { colors } from "../../styles/globals";
import { FormLoader } from "../loader";

const StyledLink = styled(RRLink)({
  textDecoration: "none",
  color: colors.BLACK,
  "&:hover": {
    color: colors.PRIMARY,
  },
});
const cardsData = [1, 2, 3, 4, 5];
const Slider = ({ title, data, isroutes }) => {
  const scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);

  const slide = (shift) => {
    scrl.current.scrollBy({
      left: shift,
      behavior: "smooth",
    });

    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  return (
    <Container
      maxWidth={"xl"}
      sx={{ my: 3, py: 3 }}
      className="item-slider-container"
    >
      <Typography
        variant="h4"
        sx={{ px: 3, mb: 3 }}
        fontSize={["0.9rem", "1.5rem"]}
        fontWeight={700}
        color={colors.NT}
      >
        {title}
      </Typography>
      <div className="item-slider">
        <IconButton
          className={`left-arrow-left ${scrollX < 1 ? "is-disabled-hide" : ""}`}
          onClick={() => slide(-100)}
        >
          <MdArrowBackIos sx={{ fontSize: "70px" }} />
        </IconButton>
        <div ref={scrl} onScroll={scrollCheck} className="item-container">
          {!isroutes && (
            <>
              {cardsData.map((item, i) => (
                <Card
                  key={i}
                  m={2}
                  sx={{
                    width: "18rem",
                    cursor: "pointer",
                    borderRadius: "15px",
                    ":hover": {
                      border: `3px solid ${colors.NT}`,
                    },
                  }}
                >
                  <CardContent>
                    <Box p={10}>
                      <FormLoader />
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </>
          )}

          {data?.map((item, index) => (
            <span key={index}>
              <StyledLink
                to={`/sendparcel/${item.id}/${
                  item.from_city.name + "-" + item.to_city.name
                }`}
              >
                <Card
                  m={2}
                  sx={{
                    width: "18rem",
                    cursor: "pointer",
                    borderRadius: "15px",
                    ":hover": {
                      border: `3px solid ${colors.NT}`,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={
                      "https://intercity.ng/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ft40-nigeria%2Fimage%2Fupload%2Fv1694587502%2Fv2%2Fimage%2Fnboh7uvhm4hj9qihz2wv.jpg&w=384&q=75"
                    }
                    alt={item.title}
                  />
                  <CardContent>
                    <Stack direction={"row"} alignItems={"center"}>
                      <Typography
                        fontWeight={900}
                        fontSize={"1.2rem"}
                        textTransform={"capitalize"}
                      >
                        {item.from_city.name}
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
                        {item.to_city.name}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </StyledLink>
            </span>
          ))}
        </div>
        <IconButton
          className={`right-arrow-right ${
            !scrollEnd ? "" : "is-disabled-hide"
          }`}
          onClick={() => slide(100)}
        >
          <MdArrowForwardIos sx={{ fontSize: "70px" }} />
        </IconButton>
      </div>
    </Container>
  );
};

export default Slider;
