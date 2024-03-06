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

import CategoryLogo from "../assets/images/Footer_logo.png";

import { CategoryData } from "../constant";

const CategorySection = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:430px)");
  const isSmallMobile = useMediaQuery("(max-width:375px)");
  return (
    <React.Fragment>
      <Box
        sx={{
          ...theme.container,
          flexDirection: "column",
          p: theme.gaps[3],
          background: "#e6e7e9",
          marginTop: "6rem",
        }}
      >
        {/* <img
          style={{ marginBottom: theme.gaps[2] }}
          src={CategoryLogo}
          alt="Logo"
        /> */}
        <h1
          style={{
            marginTop: "6rem",
            fontWeight: "bold",
            fontSize: "2rem",
            textTransform: "uppercase",
            marginBottom: theme.gaps[2],
          }}
        >
          WHAT CATEGORIES ARE YOU INTERESTED IN?
        </h1>
        <p
          style={{
            fontSize: theme.fontSize.title,
            fontWeight: "500",
            textTransform: "uppercase",
            marginBottom: theme.gaps[3],
          }}
        >
          Discover projects that align with your interests
        </p>
        <p
          style={{
            fontSize: theme.fontSize.title,
            fontWeight: "500",
            textTransform: "uppercase",
            marginBottom: theme.gaps[3],
          }}
        >
          Explore the top categories
        </p>
        <Box
          sx={{
            ...theme.container,
            justifyContent: "space-around",
            width: "80%",
          }}
        >
          {CategoryData.map((item, index) => (
            <Box key={index} sx={{ textAlign: "center" }}>
              <img
                className="w-[5vw] mb-6"
                src={item.image}
                alt="Category"
              />
              <p
                style={{
                  fontSize: "0.8rem",
                  fontWeight: "500",
                  textTransform: "capitalize",
                }}
              >
                {" "}
                {item.title}{" "}
              </p>
            </Box>
          ))}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default CategorySection;
