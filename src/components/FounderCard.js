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

const FounderCard = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:430px)");
  const isSmallMobile = useMediaQuery("(max-width:375px)");

  return (
    <React.Fragment>
      <Box
        sx={{
          width: "20vw",
          height: "64vh",
          cursor: "pointer",
          margin: "auto",
          border: "0.5px solid #dddddd",
          justifyContent: "space-around"
        }}
      >
        <img
          style={{ width: "20vw", height: "35vh", margin: "auto" }}
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
              style={{
                color: theme.colors.blue,
                fontWeight: 900,
                textTransform: "uppercase",
              }}
            >
              interview
            </p>
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
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default FounderCard;
