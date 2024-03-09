/* eslint-disable jsx-a11y/alt-text */
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

import HeartIcon from "../assets/images/hero_img.png";

const BackerCard = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:430px)");
  const isSmallMobile = useMediaQuery("(max-width:375px)");

  return (
    <React.Fragment>
     
      <Box
        className="w-[300px] md:w-[400px]"
        sx={{
          p: theme.gaps[2],
        }}
      >
        <img
        className="w-[80%] md:w-[100%]"
          src={props.img}
          style={{
            height: "300px",
            margin: "auto",
            objectFit: "cover",
          }}
        />
        <Box className="flex flex-col justify-center items-center">
          <h6
            style={{
              fontSize: "15.25px",
              fontWeight: 500,
              lineHeight: "24px",
              marginBottom: "0.6rem",
              textAlign: "center",
            }}
          >
            {props.title}
          </h6>
          <h6
            style={{
              fontSize: "15.25px",
              fontWeight: 600,
              lineHeight: "24px",
              marginBottom: "0.6rem",
              textAlign: "center",
            }}
          >
            {props.subTitle}
          </h6>
          <p
            className="text-[0.8rem] text-[#E21941] line-through	uppercase"
            style={{
              marginBottom: theme.gaps[1],
            }}
          >
            {props.content}
          </p>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default BackerCard;
