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

import FeedbackCard from "../components/FeedbackCard";

import { FeedbackData } from "../constant";

const Feedback = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:430px)");
  const isSmallMobile = useMediaQuery("(max-width:375px)");
  const Laptop4 = useMediaQuery("(max-width:1280px)");

  return (
    <React.Fragment>
      <Box
        sx={{
          p: theme.gaps[3],
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
          What People Are Saying
        </h1>

        <p
          style={{
            color: "#808080",
            fontSize: "0.9rem",
            lineHeight: "18px",
            marginBottom: theme.gaps[4],
          }}
        >
          Don't just take our word for it. Here's what our satisfied startup
          founders and <br /> backers have to say about their experience with
          our crowdfunding platform.
        </p>
        <Box
          className="grid grid-cols-2 relative left-[-4rem] gap-[1rem]"
          // sx={{
          //   display: "grid",
          //   gridTemplateColumns: Laptop4
          //     ? "minmax(0, 1fr)"
          //     : "minmax(0, 1fr) minmax(0, 1fr)",
          //   gap: "97px",
          //   marginTop: "65px",
          // }}
        >
          {FeedbackData.map((item, index) => {
            return (
              <FeedbackCard
                key={index}
                index={index}
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

export default Feedback;
