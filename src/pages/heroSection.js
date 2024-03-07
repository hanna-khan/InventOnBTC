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
        className="md:h-auto h-[84vh]"
        sx={{
          position: "relative",
          ...theme.container,
          background: theme.background.primary,
          justifyContent: "space-between",
        }}
      >
        <Box className="lg:pl-[4rem] pl-[2rem] relative md:top-[6rem] top-[4rem]">
          <h1
            className="font-extrabold md:leading-[3.5rem] leading-[2.5rem] lg:text-[35px] text-[2rem]"
            style={{
              color: theme.colors.white,
              marginBottom: theme.gaps[2],
            }}
          >
            Crowdfunding for Bitcoin <br /> start-ups
          </h1>
          <p
            className="lg:text-[1.2rem] text-[1rem] md:mb-[50px] mb-[10px]"
            style={{
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
          <Box
            className="flex flex-col lg:mt-[2rem] mt-6 mb-4"
            sx={{
              bottom: Laptop4 ? "8px" : "1rem",
            }}
          >
            <p
              style={{ color: theme.colors.white, marginBottom: theme.gaps[1] }}
            >
              Fund with
            </p>
            <Box className="flex flex-row">
              <img className="lg:w-[50px] w-[30px]" src={Coin1} alt="Icon" />
              <img
                className="lg:w-[50px] w-[30px]"
                src={Coin2}
                alt="Coin Icon"
              />
            </Box>
          </Box>
        </Box>
        <img
          className="md:block hidden h-[100vh]"
          src={HeroImg}
          alt="Hero Image"
          style={{
            width: imageWidth,
          }}
        />
      </Box>
    </React.Fragment>
  );
};

export default HeroSection;
