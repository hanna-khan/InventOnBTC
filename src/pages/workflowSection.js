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

const WorkflowSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:430px)");
  const isSmallMobile = useMediaQuery("(max-width:375px)");
  return (
    <React.Fragment>
      <Box className="px-6 max-w-[95%] m-auto flex flex-col justify-center">
        <h1
          className="mt-[6rem] font-extrabold"
          style={{
            fontSize: theme.fontSize.subTitle,
            textAlign: "left",
            color: "#e16a15",
            marginBottom: theme.gaps[1],
            textTransform: "uppercase",
          }}
        >
          How it works?
        </h1>
        <p
          style={{
            // width: "50%",
            fontSize: theme.fontSize.smcontent,
            opacity: 0.5,
            marginBottom: theme.gaps[5],
          }}
        >
          Welcome to InventOnBTC, where you can support and fund projects
          created on Bitcoin. Here's how it works:
        </p>
        <Box
          className="lg:flex hidden items-center justify-center flex-wrap"
          sx={{ marginBottom: theme.gaps[2] }}
        >
          <Box sx={{ width: "25%", ...theme.container }}>
            <Box
              className="flex justify-center items-center"
              sx={{
                width: "3rem",
                height: "3rem",
                borderRadius: "50%",
                background: "#e16a15",
                lineHeight: "32px",
                color: theme.colors.white,
                textAlign: "center",
              }}
            >
              1
            </Box>
            <Box
              sx={{
                width: "calc(100% - 32px)",
                height: "2px",
                background: theme.colors.primary,
              }}
            />
          </Box>
          <Box sx={{ width: "25%", ...theme.container }}>
            <Box
              className="flex justify-center items-center"
              sx={{
                width: "3rem",
                height: "3rem",
                borderRadius: "50%",
                background: theme.colors.primary,
                lineHeight: "32px",
                color: theme.colors.white,
                textAlign: "center",
              }}
            >
              2
            </Box>
            <Box
              sx={{
                width: "calc(100% - 32px)",
                height: "2px",
                background: theme.colors.primary,
              }}
            />
          </Box>
          <Box sx={{ width: "25%", ...theme.container }}>
            <Box
              className="flex justify-center items-center"
              sx={{
                width: "3rem",
                height: "3rem",
                borderRadius: "50%",
                background: theme.colors.primary,
                lineHeight: "32px",
                color: theme.colors.white,
                textAlign: "center",
              }}
            >
              3
            </Box>
            <Box
              sx={{
                width: "calc(100% - 32px)",
                height: "2px",
                background: theme.colors.primary,
              }}
            />
          </Box>
          <Box sx={{ width: "25%", ...theme.container }}>
            <Box
              className="flex justify-center items-center"
              sx={{
                width: "3rem",
                height: "3rem",
                borderRadius: "50%",
                background: theme.colors.primary,
                lineHeight: "32px",
                color: theme.colors.white,
                textAlign: "center",
              }}
            >
              4
            </Box>
            <Box
              sx={{
                width: "calc(100% - 32px)",
                height: "2px",
                background: theme.colors.primary,
              }}
            />
          </Box>
        </Box>
        <Box
          className="flex items-center justify-center gap-4 flex-wrap lg:flex-nowrap"
          sx={{
            alignItems: "stretch",
          }}
        >
          <Box
            className="xl:w-[25%] xs:w-[100%] sm:mr-2 mr-0 sm:p-6 p-2"
            sx={{
              height: "auto",
              background: theme.background.secondary,
              borderRadius: "10px",
            }}
          >
            <p
              className="text-[1.2rem]"
              style={{
                fontWeight: "bold",
                marginBottom: theme.gaps[1],
              }}
            >
              Discover Projects
            </p>
            <p className="text-sm" style={{ opacity: 0.5 }}>
              Browse through a wide range of innovative projects that are
              seeking funding. From technology to art, there's something for
              everyone.
            </p>
          </Box>
          <Box
            className="xl:w-[25%] xs:w-[100%] sm:mr-2 mr-0 sm:p-6 p-2"
            sx={{
              height: "auto",
              background: theme.background.secondary,
              borderRadius: "10px",
            }}
          >
            <p
              className="text-[1.2rem]"
              style={{
                fontWeight: "bold",
                marginBottom: theme.gaps[1],
              }}
            >
              Fund with Bitcoin
            </p>
            <p className="text-sm" style={{ opacity: 0.5 }}>
              Once you find a project you're interested in, contribute to its
              funding using Bitcoin. Our secure payment system ensures your
              transactions are safe and transparent.
            </p>
          </Box>
          <Box
            className="xl:w-[25%] xs:w-[100%] sm:mr-2 mr-0 sm:p-6 p-2"
            sx={{
              height: "auto",
              background: theme.background.secondary,
              borderRadius: "10px",
            }}
          >
            <p
              className="sm:text-[1.2rem] text-[1rem]"
              style={{
                fontWeight: "bold",
                marginBottom: theme.gaps[1],
              }}
            >
              Track Progress
            </p>
            <p className="sm:text-sm text-[12px]" style={{ opacity: 0.5 }}>
              Stay updated on the progress of the projects you've supported. Get
              insights into how the funds are being utilized and the milestones
              achieved.
            </p>
          </Box>
          <Box
            className="xl:w-[25%] xs:w-[100%] sm:mr-2 mr-0 sm:p-6 p-2"
            sx={{
              height: "auto",
              background: theme.background.secondary,
              borderRadius: "10px",
            }}
          >
            <p
              className="text-[1.2rem]"
              style={{
                fontWeight: "bold",
                marginBottom: theme.gaps[1],
              }}
            >
              Engage with the Community
            </p>
            <p className="text-sm" style={{ opacity: 0.5 }}>
              Connect with other supporters and project creators in our vibrant
              community. Share ideas, provide feedback, and collaborate to make
              a difference.
            </p>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default WorkflowSection;
