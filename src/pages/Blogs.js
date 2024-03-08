import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme, useMediaQuery, Grid } from "@mui/material";
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
          className="mt-[6rem] sm:text-2xl text-xl font-extrabold"
          style={{
            textAlign: "left",
            color: "#191919",
            marginBottom: theme.gaps[1],
            textTransform: "uppercase",
          }}
        >
          Blog
        </h1>

        <p
          className="sm:text-[24px] text-sm"
          style={{
            lineHeight: "24px",
            marginBottom: theme.gaps[5],
          }}
        >
          Keep up-to date on the Bitcoin Economy
        </p>
        <Grid container columnGap={2} rowGap={5} justifyContent={"center"}>
          {BlogData.map((item, index) => {
            return (
              <Grid item>
                <BlogCard
                  key={index}
                  img={item.image}
                  title={item.title}
                  content={item.content}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Blogs;
