import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";
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
        className="m-auto flex flex-col justify-center max-w-[90%] mt-[10rem]"
        sx={{
          p: theme.gaps[3],
          background: theme.background.white,
        }}
      >
        <h1
          className="uppercase font-extrabold"
          style={{
            fontSize: theme.fontSize.mainTitle,
          }}
        >
          Spotlight
        </h1>
        <h2
          className="uppercase font-extrabold tracking-[1px]"
          style={{
            fontSize: theme.fontSize.subTitle,
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
          Get insights on the founders behind the projects on <br />{" "}
          InventOnBTC. Dive deep into their vision behind <br /> their ideas and
          innovations
        </p>
        <Box
          className="grid grid-cols-3 gap-10"
          // sx={{
          //   display: "grid",
          //   gridTemplateColumns: gridTemplateColumnsValue,
          //   gap: "97px",
          //   marginTop: "65px",
          // }}
        >
          {FounderData.map((item, index) => {
            return (
              <FounderCard
                key={index}
                image={item.image}
                title={item.title}
                content={item.content}
              />
            );
          })}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Spotlight;
