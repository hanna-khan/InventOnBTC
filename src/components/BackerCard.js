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
        sx={{
          p: theme.gaps[2],
          background: "#F8F8F8",
          width: "400px",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "300px",
            margin: "auto",
            objectFit: "cover",
            marginBottom: theme.gaps[2],
          }}
        />
        <Box>
          <h4
            style={{
              fontWeight: "bold",
              marginBottom: theme.gaps[1],
              textAlign: "left",
            }}
          >
            {props.title}
          </h4>
          <p style={{ opacity: 0.5 }}>{props.content}</p>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default BackerCard;
