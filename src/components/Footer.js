/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Logo from "../assets/images/Footer_logo.png";
import MailCon from "../assets/images/mail_icon.png";
import FaceBookIcon from "../assets/images/facebook.png";
import DiscordIcon from "../assets/images/discord.png";
import TwitterIcon from "../assets/images/twitter.png";
import UtubuIcon from "../assets/images/utubu.png";

const pages = [
  { name: "EXPLORE", link: "/", menuItems: [] },
  { name: "FEATURED PROJECTS", link: "/", menuItems: [] },
  { name: "START A PROJECT", link: "/", menuItems: [] },
  { name: "TREASURY", menuItems: [], link: `/` },
];

function Footer(props) {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:430px)");
  const isSmallMobile = useMediaQuery("(max-width:375px)");
  const Laptop1 = useMediaQuery("(max-width:1680px)");
  const Laptop2 = useMediaQuery("(max-width:1450px)");
  const Laptop3 = useMediaQuery("(max-width:1366px)");
  const Laptop4 = useMediaQuery("(max-width:1280px)");
  const Laptop5 = useMediaQuery("(max-width:1024px)");

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: theme.background.footer,
        padding: "60px",
      }}
    >
      <Box className="m-auto justify-around max-w-[100%] flex gap-8">
        <Box>
          <img src={Logo} alt="logo Images" style={{ width: "72px" }} />
        </Box>
        <Box
          sx={{
            ...theme.container,
            alignItems: "flex-start",
            flexDirection: "column",
            paddingBottom: "24px",
            borderBottom: "0.5px solid #dddddd",
          }}
        >
          <Box
            sx={{
              ...theme.container,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexDirection: Laptop5 && "column",
              gap: Laptop2 ? "40px" : "235px",
            }}
          >
            <Box
              className="flex flex-row items-center justify-center md:gap-[8rem] gap-[2rem]"
              sx={{
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <Box>
                <h6
                  className="text-[0.8rem] md:text-[1rem]"
                  style={{
                    lineHeight: "24px",
                    opacity: "0.7",
                    marginBottom: "13px",
                    textTransform: "uppercase",
                  }}
                >
                  Explore
                </h6>
                <Box
                  className="text-[0.6rem] md:text-[0.8rem]"
                  sx={{
                    ...theme.container,
                    flexDirection: "column",
                    gap: "5px",
                    alignItems: "flex-start",
                  }}
                >
                  <a href="#">What We Do</a>
                  <a href="#">Funding</a>
                </Box>
              </Box>
              <Box>
                <h6
                  className="text-[0.8rem] md:text-[1rem]"
                  style={{
                    lineHeight: "24px",
                    opacity: "0.7",
                    marginBottom: "13px",
                    textTransform: "uppercase",
                  }}
                >
                  About
                </h6>
                <Box
                  className="text-[0.6rem] md:text-[0.8rem]"
                  sx={{
                    ...theme.container,
                    flexDirection: "column",
                    gap: "5px",
                    alignItems: "flex-start",
                  }}
                >
                  <a href="#">About Us</a>
                  <a href="#">Blog</a>
                  <a href="#">Trust & Safety</a>
                  <a href="#">Help & Support</a>
                  <a href="#">Press</a>
                  <a href="#">Careers</a>
                  <a href="#">Contact</a>
                </Box>
              </Box>
              <Box>
                <h6
                  className="text-[0.8rem] md:text-[1rem]"
                  style={{
                    lineHeight: "24px",
                    opacity: "0.7",
                    marginBottom: "13px",
                    textTransform: "uppercase",
                  }}
                >
                  Entrepreneurs
                </h6>
                <Box
                  className="text-[0.6rem] md:text-[0.8rem]"
                  sx={{
                    ...theme.container,
                    flexDirection: "column",
                    gap: "5px",
                    alignItems: "flex-start",
                  }}
                >
                  <a href="#">How It Works</a>
                  <a href="#">Creators Corner</a>
                  <a href="#">Fees</a>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                ...theme.container,
                flexDirection: "column",
                width: Laptop5 ? "100%" : "auto",
                marginBottom: Laptop5 && "30px",
              }}
            >
              <img
                className="w-[5vw] md:w-[40px]"
                src={MailCon}
                alt="Icon"
                style={{
                  marginBottom: "20px",
                  width: "40px",
                }}
              />
              <h6
                className="text-[0.7rem] md:text-[0.8rem]"
                style={{
                  lineHeight: "24px",
                  fontWeight: 700,
                }}
              >
                Get it first
              </h6>
              <p
                className="text-[0.7rem] md:text-[0.8rem]"
                style={{
                  textAlign: "center",
                  lineHeight: "24px",
                  marginBottom: "41px",
                }}
              >
                Discover new innovations in the <br /> InventOnBTC newsletter
              </p>
              <Box
                className="md:w-[282px] w-[180px] md:text-[0.8rem] text-[0.6rem]"
                sx={{ marginBottom: "10px" }}
              >
                <TextField
                  className="md:w-[265px] w-[150px] md:text-[1rem] text-[0.7rem]"
                  id="outlined-basic"
                  label="Your email address"
                  variant="filled"
                  name="first_name"
                  InputLabelProps={{
                    style: { color: "grey" },
                  }}
                  InputProps={{
                    style: {
                      backgroundColor: theme.background.white,
                      border: "none",
                      width: "100%",
                    },
                  }}
                  sx={{
                    display: "block",
                    width: "100%",
                  }}
                />
              </Box>
              <Box
                sx={{
                  ...theme.container,
                  alignItems: "flex-start",
                  width: "282px",
                  marginBottom: "25px",
                }}
              >
                <Checkbox
                  {...label}
                  defaultChecked
                  sx={{
                    color: theme.colors.primary,
                    padding: "0px",
                    mr: "12px",
                    "&.Mui-checked": {
                      color: theme.colors.primary,
                    },
                  }}
                />
                <p className="text-[0.8rem] mt-2">
                  I agree to the{" "}
                  <a
                    style={{
                      color: theme.colors.primary,
                      textDecoration: "underline",
                      fontWeight: 900,
                    }}
                  >
                    Terms of Use
                  </a>{" "}
                  and have read and understand the{" "}
                  <a
                    style={{
                      color: theme.colors.primary,
                      textDecoration: "underline",
                      fontWeight: 900,
                    }}
                  >
                    Privacy Policy
                  </a>
                </p>
              </Box>
              <Button
                className="navbar-item md:w-[300px] md:h-[2.6rem] h-[50px] w-[120px]"
                variant="contained"
                sx={{
                  ...theme.buttons.primary,
                }}
              >
                <span className="md:text-[0.8rem] text-[0.6rem] text-white">
                  Sign me up
                </span>
              </Button>
            </Box>
          </Box>
          <Box
            className="md:gap-[24px] gap-[12px]"
            sx={{
              ...theme.container,
              justifyContent: "flex-start",
            }}
          >
            <Button
                className="navbar-item md:w-[300px] md:h-[2.6rem] h-[50px] w-[120px]"
                variant="contained"
                sx={{
                  ...theme.buttons.secondary,
                }}
              >
                <span className="md:text-[0.8rem] text-[0.6rem] text-dark">
                  BTC & STX
                </span>
              </Button>
            <img
              className="w-[10px] md:w-[15px]"
              src={FaceBookIcon}
              alt="Icon"
            />
            <img
              className="w-[10px] md:w-[15px]"
              src={TwitterIcon}
              alt="Icon"
            />
            <img className="w-[10px] md:w-[15px]" src={UtubuIcon} alt="Icon" />
            <img
              className="w-[10px] md:w-[15px]"
              src={DiscordIcon}
              alt="Icon"
            />
          </Box>
        </Box>
      </Box>
      <Box className="md:gap-[10px] gap-0 md:p-[15px] p-4 flex justify-center items-center md:flex-row flex-col">
        <a className="text-[8px] md:text-[11px]" style={{ padding: "12px" }}>
          Terms of Use
        </a>
        <a className="text-[8px] md:text-[11px]" style={{ padding: "12px" }}>
          Privacy Policy
        </a>
        <a className="text-[8px] md:text-[11px]" style={{ padding: "12px" }}>
          Cookie Policy
        </a>
        <a className="text-[8px] md:text-[11px]" style={{ padding: "12px" }}>
          Do Not Sell My Personal Information
        </a>
        <a className="text-[8px] md:text-[11px]" style={{ padding: "12px" }}>
          Accessibility
        </a>
        <a className="text-[8px] md:text-[11px]" style={{ padding: "12px" }}>
          © 2024 InventOnBTC, Inc. All Rights Reserved
        </a>
      </Box>
    </Box>
  );
}
export default Footer;
