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

const FeedbackCard = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:430px)");
  const isSmallMobile = useMediaQuery("(max-width:375px)");

  return (
    <React.Fragment>
      <Box
        className="sm:w-[30vw] w-[50vw]"
        sx={{
          ...theme.container,
          alignItems: "flex-start",
          ml: props.index % 2 === 0 && "auto !important",
          background: "#f8f8f8",
          borderRadius: "10px",
          padding: "14px",
        }}
      >
        <Box
          className="md:w-[55px] w-[35px] md:h-[55px] h-[35px]"
          sx={{
            borderRadius: "50%",
            background: theme.background.black,
            mr: theme.gaps[2],
            marginBottom: theme.gaps[4],
          }}
        />
        <Box sx={{ flex: 1 }}>
          <h6
            className="md:text-[1.2rem] text-[1rem]"
            style={{
              fontWeight: "bold",
            }}
          >
            {props.title}
          </h6>
          <p
            className="md:text-[0.8rem] text-[0.7rem]"
            style={{
              fontWeight: 500,
            }}
          >
            {props.content}
          </p>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default FeedbackCard;
