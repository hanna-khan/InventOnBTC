/* eslint-disable jsx-a11y/img-redundant-alt */
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

import HeroImg from "../assets/images/hero_img.png";
import Coin1 from "../assets/images/Footer_logo.png";
import Coin2 from "../assets/images/coin_2.png";

const HeroSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:430px)");
  const isSmallMobile = useMediaQuery("(max-width:375px)");
  const Laptop2 = useMediaQuery("(max-width:1400px)");
  const Laptop3 = useMediaQuery("(max-width:1366px)");
  const Laptop1 = useMediaQuery(theme.breakpoints.between(1281, 1680));
  const Laptop4 = useMediaQuery("(max-width:1280px)");

  const imageWidth = Laptop4 ? "358px" : Laptop1 ? "600px" : "auto";

  return (
    <React.Fragment>
      <Box
        className="h-auto sm:h-[50vh] lg:pt-[30px] pt-4 justify-center text-center items-center md:text-left"
        sx={{
          position: "relative",
          ...theme.container,
          background: theme.background.primary,
          justifyContent: "space-between",
        }}
      >
        <Box className="lg:pl-[80px] pl-8">
          <h1
            className="font-extrabold leading-[3.5rem] md:text-[2.5rem] text-[2rem]"
            style={{
              color: theme.colors.white,
              marginBottom: theme.gaps[2],
            }}
          >
            Crowdfunding for Bitcoin <br /> start-ups
          </h1>
          <p
          className="lg:max-w-[100%] max-w-[80%]"
            style={{
              fontSize: theme.fontSize.content,
              color: theme.colors.grey,
              marginBottom: theme.gaps[5],
            }}
          >
            Join the revolution and support groundbreaking Bitcoin based
            projects
          </p>
          <Box
            sx={{
              ...theme.container,
              justifyContent: "flex-start",
              gap: theme.gaps[2],
            }}
          >
            <Button
              className="navbar-item"
              variant="contained"
              sx={{
                ...theme.buttons.secondary,
                textTransform: "none",
              }}
              onClick={() => navigate("/backer")}
            >
              <span
                className="font-extrabold"
                style={{
                  display: isMobile ? "none" : "inline",
                }}
              >
                For Backers
              </span>
            </Button>
            <Button
              className="navbar-item"
              variant="outlined"
              sx={{
                ...theme.buttons.secondary,
                textTransform: "none",
              }}
              onClick={() => navigate("/startup")}
            >
              <span
                className="font-extrabold"
                style={{
                  display: isMobile ? "none" : "inline",
                }}
              >
                For Startups
              </span>
            </Button>
          </Box>
        </Box>
        <img
          className="md:block hidden h-[47vh]"
          src={HeroImg}
          alt="Hero Image"
          style={{
            width: imageWidth,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            left: "121px",
            bottom: Laptop4 ? "8px" : "1rem",
          }}
        >
          <p style={{ color: theme.colors.white, marginBottom: theme.gaps[1] }}>
            Fund with
          </p>
          <Box sx={{ ...theme.container, gap: theme.gaps[2] }}>
            <img style={{ width: "50px" }} src={Coin1} alt="Icon" />
            <img src={Coin2} alt="Coin Icon" />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default HeroSection;
