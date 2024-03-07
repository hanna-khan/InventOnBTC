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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BlogCard from "../components/BlogCard";

import { BlogData } from "../constant";

const Blogs = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:430px)");
  const isSmallMobile = useMediaQuery("(max-width:375px)");
  const Laptop1 = useMediaQuery("(max-width:1680px)");
  const Laptop2 = useMediaQuery("(max-width:1400px)");
  const Laptop3 = useMediaQuery("(max-width:1366px)");
  const Laptop4 = useMediaQuery("(max-width:1280px)");

  return (
    <React.Fragment>
      <Box
        className="m-auto flex flex-col justify-center max-w-[90%]"
        sx={{
          background: theme.background.white,
        }}
      >
        <h1
          className="mt-[6rem] font-extrabold"
          style={{
            fontSize: theme.fontSize.subTitle,
            textAlign: "left",
            color: "#191919",
            marginBottom: theme.gaps[1],
            textTransform: "uppercase",
          }}
        >
          Blog
        </h1>

        <p
          style={{
            fontSize: "24px",
            lineHeight: "24px",
            marginBottom: theme.gaps[5],
          }}
        >
          Keep up-to date on the Bitcoin Economy
        </p>
        <Box
          className="grid grid-cols-3"
          // sx={{
          //   display: "grid",
          //   gridTemplateColumns: Laptop2
          //     ? "minmax(0, 1fr) minmax(0, 1fr)"
          //     : "minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)",
          //   gap: "97px",
          // }}
        >
          {BlogData.map((item, index) => {
            return (
              <BlogCard
                key={index}
                img={item.image}
                title={item.title}
                content={item.content}
              />
            );
          })}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Blogs;
