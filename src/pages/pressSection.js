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

import PressCard from "../components/PressCard";
import ProjectCard from "../components/ProjectCard";

import { sliderSettings, PressData } from "../constant";

const PressSection = () => {
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
        className="m-auto flex flex-col justify-center max-w-[95%]"
        sx={{
          background: theme.background.white,
        }}
      >
        <h1
          className="mt-[6rem] font-extrabold"
          style={{
            fontSize: theme.fontSize.subTitle,
            textAlign: "left",
            color: "#191919",
            marginBottom: theme.gaps[3],
            textTransform: "uppercase",
          }}
        >
          CURATED PROJECTS
        </h1>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {PressData.map((item, index) => {
            if (index === 0) {
              return (
                <ProjectCard
                  key={index}
                  image={item.image}
                  title={item.title}
                  content={item.content}
                  type={item.type}
                  amount={item.amout}
                  percent={item.percent}
                  leftDays={item.leftDays}
                  curated={item.curated}
                  treasury={item.treasury}
                />
              );
            } else {
              return (
                <PressCard
                  key={index}
                  image={item.image}
                  title={item.title}
                  content={item.content}
                  type={item.type}
                  explain={item.explain}
                  curated={item.curated}
                  treasury={item.treasury}
                />
              );
            }
          })}
        </Box>
        {/* <Box
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12"
          sx={
            {
              // gridTemplateColumns: gridTemplateColumnsValue,
            }
          }
        >
          {PressData.map((item, index) => {
            if (index === 0) {
              return (
                <ProjectCard
                  key={index}
                  image={item.image}
                  title={item.title}
                  content={item.content}
                  type={item.type}
                  amount={item.amout}
                  percent={item.percent}
                  leftDays={item.leftDays}
                />
              );
            } else {
              return (
                <PressCard
                  key={index}
                  image={item.image}
                  title={item.title}
                  content={item.content}
                  type={item.type}
                  explain={item.explain}
                />
              );
            }
          })}
        </Box> */}
        {/* <Slider {...sliderSettings}>
          {PressData.map((item, index) => (
            <PressCard
              key={index}
              image={item.image}
              title={item.title}
              content={item.content}
            />
          ))}
        </Slider> */}
      </Box>
    </React.Fragment>
  );
};

export default PressSection;
