import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme, useMediaQuery, Grid } from "@mui/material";
import {
  Box,
  AppBar,
  Toolbar,
  Container,
  Button,
  IconButton,
  Menu,
  Typography,
  MenuItem,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FounderCard from "../components/FounderCard";

import { FounderData } from "../constant";

const Spotlight = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:430px)");
  const isSmallMobile = useMediaQuery("(max-width:375px)");
  const Laptop1 = useMediaQuery(theme.breakpoints.between(1281, 1680));
  const Laptop4 = useMediaQuery(theme.breakpoints.down(1280));

  let gridTemplateColumnsValue;
  if (Laptop4) {
    gridTemplateColumnsValue = "repeat(2, minmax(0, 1fr))";
  } else if (Laptop1) {
    gridTemplateColumnsValue = "repeat(3, minmax(0, 1fr))";
  } else {
    gridTemplateColumnsValue = "repeat(4, minmax(0, 1fr))";
  }

  return (
    <React.Fragment>
      <Box
        className="max-w-[95%] m-auto flex flex-col justify-center mt-[10rem]"
        sx={{
          padding: "10px",
          background: theme.background.white,
        }}
      >
        <h1 className="uppercase font-extrabold lg:text-5xl text-3xl">
          Spotlight
        </h1>
        <h2
          className="uppercase font-extrabold tracking-[1px] lg:text-3xl text-xl"
          style={{
            marginBottom: theme.gaps[1],
          }}
        >
          Founder interviews
        </h2>
        <p
          style={{
            fontSize: "11.6px",
            lineHeight: "18px",
            marginBottom: theme.gaps[4],
            color: "#808080",
          }}
        >
          Get insights on the founders behind the projects on InventOnBTC. Dive
          deep into their vision behind <br /> their ideas and innovations
        </p>
        <Grid container columnGap={2} rowGap={5} justifyContent={"center"}>
          {FounderData.map((item, index) => {
            return (
              <Grid item>
                <FounderCard
                  key={index}
                  image={item.image}
                  title={item.title}
                  content={item.content}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Spotlight;
