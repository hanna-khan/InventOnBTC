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

const BlogCard = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:430px)");
  const isSmallMobile = useMediaQuery("(max-width:375px)");

  return (
    <React.Fragment>
      <Box
        className="md:w-[400px] w-[200px]"
        sx={{
          cursor: "pointer",
          margin: "auto",
        }}
      >
        <img
          className="h-[150px] md:h-[200px]"
          style={{
            width: "100%",
            margin: "auto",
            objectFit: "cover",
            marginBottom: "10px",
          }}
          src={props.img}
          alt="Img"
        />
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
        <p
          className="text-[0.8rem]"
          style={{
            marginBottom: theme.gaps[1],
            color: theme.colors.grey,
          }}
        >
          {props.content}
        </p>
        <p
          style={{
            fontSize: "0.65rem",
            fontWeight: 700,
            lineHeight: "18px",
            textAlign: "left",
            textTransform: "uppercase",
          }}
        >
          {"Learn more"}
        </p>
      </Box>
    </React.Fragment>
  );
};

export default BlogCard;
