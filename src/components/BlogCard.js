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
      className="sm:w-[22vw] w-[50vw]"
        sx={{
          height: "55vh",
          cursor: "pointer",
          margin: "auto",
        }}
      >
        <img
          src={props.img}
          alt="Img"
          style={{ width: "394px", marginBottom: "10px" }}
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
            textTransform: "uppercase"
          }}
        >
          {"Learn more"}
        </p>
      </Box>
    </React.Fragment>
  );
};

export default BlogCard;
