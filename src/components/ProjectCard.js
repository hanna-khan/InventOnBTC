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

import HeartIcon from "../assets/images/hero_img.png";

const ProjectCard = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:430px)");
  const isSmallMobile = useMediaQuery("(max-width:375px)");

  const handleRedirectProjectDetail = () => {
    localStorage.setItem("selectedProjectImage", props.image);
    localStorage.setItem("selectedProjectTitle", props.title);
    navigate(`/project_detail/`);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          width: "400px",
          // height: "75vh",
          cursor: "pointer",
          margin: "auto",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
        onClick={handleRedirectProjectDetail}
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
        <Box sx={{ p: theme.gaps[2] }}>
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
          <p className="text-[0.8rem]" style={{ textTransform: "uppercase" }}>
            {props.type}
          </p>
          <Box sx={{ ...theme.container, justifyContent: "space-between" }}>
            <div style={{ fontSize: theme.fontSize.xsmall }}>
              <span
                style={{ fontSize: theme.fontSize.small, fontWeight: "bold" }}
              >
                <div dangerouslySetInnerHTML={{ __html: props.amount }}></div>
              </span>
            </div>
            <p>
              <span
                style={{
                  fontSize: theme.fontSize.xsmall,
                  fontWeight: "bold",
                  opacity: 0.6,
                }}
              >
                {props.percent}%
              </span>
            </p>
          </Box>
          <Slider
            size="big"
            aria-label="Big"
            sx={{
              height: "10px",
              paddingTop: theme.gaps[1],
              "& .MuiSlider-thumb": {
                display: "none",
              },
            }}
            defaultValue={props.percent}
            valueLabelDisplay="auto"
          />
          <Box
            sx={{
              ...theme.container,
              justifyContent: "flex-start",
              fontSize: "0.7rem",
              color: theme.colors.grey,
            }}
          >
            <AccessTimeIcon
              sx={{
                marginRight: "7px",
                fontSize: "1rem",
                color: theme.colors.grey,
              }}
            />
            <p>{props.leftDays}days left</p>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ProjectCard;
