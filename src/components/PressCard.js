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
  Slider,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import LaunchIcon from "../assets/images/launch_icon.png";

const PressCard = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:430px)");
  const isSmallMobile = useMediaQuery("(max-width:375px)");

  return (
    <React.Fragment>
      <Box
        className="md:w-[400px] w-[300px]"
        sx={{
          cursor: "pointer",
          margin: "auto",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "300px",
            margin: "auto",
            objectFit: "cover",
          }}
          src={props.image}
          alt="Project Image"
        />
        <Box sx={{ p: theme.gaps[2], height: "293px" }}>
          <Box
            sx={{
              ...theme.container,
              justifyContent: "space-between",
              mb: theme.gaps[2],
            }}
          >
            <p
              className="text-[0.8rem]"
              style={{ color: theme.colors.green, fontWeight: "900" }}
            >
              FUNDING
            </p>
            <FavoriteBorderIcon sx={{ opacity: 0.4 }} />
          </Box>
          <p
            className="text-[0.9rem]"
            style={{
              fontWeight: "bold",
              marginBottom: theme.gaps[1],
            }}
          >
            {props.title}
          </p>
          <p
            className="text-[0.7rem]"
            style={{
              marginBottom: theme.gaps[2],
              color: theme.colors.grey,
            }}
          >
            {props.content}
          </p>
          <p
            className="text-[0.8rem] color-[#6A6A6A]"
            style={{ textTransform: "uppercase" }}
          >
            {props.type}
          </p>
          {/* <p
            style={{
              fontSize: theme.fontSize.xsmall,
              opacity: 0.6,
              marginBottom: "17px",
            }}
          >
            {props.explain}
          </p> */}
          <Box sx={{ ...theme.container, justifyContent: "flex-start" }}>
            <img className="relative top-10" src={LaunchIcon} alt="Icon" />
            <p className="text-[0.6rem] opacity-[0.6] relative top-10 ml-3">
              Launching Soon
            </p>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default PressCard;
