/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme, useMediaQuery, Checkbox } from "@mui/material";
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

import LaunchIcon from "../assets/images/launch_icon.png";

const PressCard = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:430px)");
  const isSmallMobile = useMediaQuery("(max-width:375px)");

  return (
    <React.Fragment>
      <Box
        sx={{
          width: { md: "300px", xl: "400px" },
          cursor: "pointer",
          height: "570px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
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
            {props.curated || props.treasury ? (
              <Box>
                <p className="md:text-[1rem] text-[0.8rem] md:leading-[24px] leading-[20px] text-[#000] font-bold flex items-center gap-2">
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: theme.colors.blue,
                      padding: "0px",
                      "&.Mui-checked": {
                        color: theme.colors.blue,
                      },
                    }}
                  />
                  <span style={{ color: theme.colors.blue }}>CURATED</span>
                  <div
                    style={{
                      backgroundColor: theme.colors.blue,
                      color: "#fff",
                      borderRadius: "50%",
                      width: "20px",
                      height: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "16px",
                      opacity: 0.6,
                    }}
                  >
                    ?
                  </div>
                </p>
                {props.treasury ? (
                  <p className="md:text-[1rem] text-[0.8rem] md:leading-[24px] leading-[20px] text-[#000] font-bold flex items-center gap-2">
                    <Checkbox
                      defaultChecked
                      sx={{
                        color: theme.colors.secondary,
                        padding: "0px",
                        "&.Mui-checked": {
                          color: theme.colors.secondary,
                        },
                      }}
                    />
                    <span style={{ color: theme.colors.secondary }}>
                      Treasury Funded
                    </span>
                    <div
                      style={{
                        backgroundColor: theme.colors.secondary,
                        color: "#fff",
                        borderRadius: "50%",
                        width: "20px",
                        height: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "16px",
                        opacity: 0.6,
                      }}
                    >
                      ?
                    </div>
                  </p>
                ) : null}
              </Box>
            ) : null}
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
          <p
            className="text-[0.8rem] color-[#6A6A6A]"
            style={{ textTransform: "uppercase" }}
          >
            {props.type}
          </p>
          {/* <p
            style={{
              fontSize: theme.fontSize.xsmall,
              opacity: 0.6,
              marginBottom: "17px",
            }}
          >
            {props.explain}
          </p> */}
          <Box
            sx={{
              ...theme.container,
              justifyContent: "flex-start",
              marginTop: "40px",
            }}
          >
            <img src={LaunchIcon} alt="Icon" />
            <p className="text-[0.6rem] opacity-[0.6] ml-3">Launching Soon</p>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default PressCard;
