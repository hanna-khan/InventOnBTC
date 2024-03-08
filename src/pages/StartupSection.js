import * as React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";
import { Box, Checkbox, Button, TextField } from "@mui/material";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ForeImage from "../assets/images/startup_fore_image.png";
import Coin1 from "../assets/images/Footer_logo.png";
import Coin2 from "../assets/images/coin_2.png";
import RocketIcon from "../assets/images/rocket.png";
import Planet from "../assets/images/planet.png";
import CuratedIcon1 from "../assets/images/curated_icon_1.png";
import CuratedIcon2 from "../assets/images/curated_icon_2.png";
import CuratedIcon3 from "../assets/images/curated_icon_3.png";
import CuratedIcon4 from "../assets/images/curated_icon_3.png";

import ProjectCard from "../components/ProjectCard";
import BlogCard from "../components/BlogCard";

import { ProjectsFundData, ResourceData } from "../constant";

const StartupSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width:430px)");
  const isSmallMobile = useMediaQuery("(max-width:375px)");
  const Laptop3 = useMediaQuery("(max-width:1500px)");

  return (
    <React.Fragment>
      <Navbar />
      <Box
        className="relative top-[4rem]"
        sx={{
          width: "100%",
          height: Laptop3 ? "40vh" : "389px",
          backgroundImage: `url(${ForeImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Box
        className="md:mt-[8rem] mt-[2rem]"
        sx={{
          ...theme.container,
          flexDirection: "column",
          gap: theme.gaps.sectionGap,
          width: "100%",
        }}
      >
        <Box
          className="m-auto block max-w-[80%]"
          sx={{
            ...theme.container,
            flexDirection: "column",
            gap: theme.gaps[2],
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ ...theme.container }}>
            <h1 className="md:text-[3rem] text-[1.5rem] md:leading-[48.8px] leading-[40px] md:mb-[30px] mb-4 font-extrabold mr-8">
              Become a <br /> Bitcoin
              <br /> Entrepreneur
            </h1>
            <Button
              className="navbar-item"
              variant="contained"
              sx={{
                ...theme.buttons.primary,
                width: "320px",
                height: "89px",
                fontSize: "24px",
                ml: theme.gaps[2],
              }}
            >
              <span
                style={{
                  display: isMobile ? "none" : "inline",
                }}
              >
                start a project
              </span>
            </Button>
          </Box>
          <Box>
            <p style={{ marginBottom: "12px" }}>Get Funded With</p>
            <Box
              sx={{
                ...theme.container,
                justifyContent: "flex-start",
                gap: theme.gaps[2],
              }}
            >
              <img style={{ width: "50px" }} src={Coin1} alt="Icon" />
              <img src={Coin2} alt="Icon" />
            </Box>
          </Box>
          <Box
            className="md:mt-[4rem] mt-6"
            sx={{ ...theme.container, gap: "4rem" }}
          >
            <Box sx={{ textAlign: "center" }}>
              <img className="m-auto mb-6" src={RocketIcon} alt="Icon" />
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  marginBottom: "50px",
                }}
              >
                fund your ideas
              </p>
              <p
                style={{
                  fontWeight: 700,
                  textAlign: "left",
                  lineHeight: "27px",
                }}
              >
                Entrepreneurship through crowdfunding
              </p>
              <p
                style={{
                  textAlign: "left",
                  lineHeight: "27px",
                }}
              >
                Get access to crowdfunding for your innovate <br /> ideas in the
                Bitcoin economy. Extend your <br /> reach to the crypto
                ecosystem.
              </p>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <img className="m-auto mb-6" src={Planet} alt="Icon" />
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  marginBottom: "50px",
                }}
              >
                PLATFORM
              </p>
              <p
                style={{
                  fontWeight: 700,
                  textAlign: "left",
                  lineHeight: "27px",
                }}
              >
                Platform for all in the Bitcoin Enonomy
              </p>
              <p
                style={{
                  textAlign: "left",
                  lineHeight: "27px",
                }}
              >
                This is a platform for all. From artists to <br /> technologists
                and everything in between in the <br /> Bitcoin ecosystem.
                Anyone is welcome to <br /> create and innovate
              </p>
            </Box>
          </Box>
        </Box>
        <Box
          className="m-auto block p-5 pt-[4rem]"
          sx={{
            background: theme.background.sectionColor,
            width: "100%",
            textAlign: "center",
          }}
        >
          <h1 className="md:text-[2rem] text-[1.2rem] md:leading-[44.8px] leading-[40px] mb-6 font-bold">
            GET CURATED
          </h1>
          <p className="md:text-[1rem] text-[0.8rem] md:leading-[24px] leading-[20px] mb-5 text-[#2a2a2a]">
            {" "}
            Curated Projects on the Invent On BTC Platform are marked with the
            blue tick. <br /> This is a badge that makes the project stand-out
            from the rest and is only given to those who have <br />
            satisfied the requirements set by the Invent On BTC platform
          </p>
          <h2 className="md:text-[1.5rem] text-[1rem] md:leading-[44.8px] leading-[40px] md:mb-[30px] mb-6 font-bold">
            Advantages to get curated
          </h2>
          <Box
            sx={{ ...theme.container, gap: "80px", alignItems: "flex-start" }}
          >
            <Box>
              <img
                src={CuratedIcon1}
                alt="Icon"
                style={{ marginBottom: "20px" }}
                className="md:w-auto w-[5vw] m-auto"
              />
              <p className="md:text-[1rem] text-[0.8rem] md:leading-[24px] leading-[20px] mb-5 text-[#6a6a6a]">
                Get Featured on the <br /> CURATED PROJECTS <br />
                section and get a blue <br /> tick.
              </p>
            </Box>
            <Box>
              <img
                src={CuratedIcon2}
                alt="Icon"
                style={{ marginBottom: "20px" }}
                className="md:w-auto w-[5vw] m-auto"
              />
              <p className="md:text-[1rem] text-[0.8rem] md:leading-[24px] leading-[20px] mb-5 text-[#6a6a6a]">
                Your project gets
                <br /> analytics blogs and
                <br /> Founder interviews to
                <br />
                increase community
                <br /> engagement and
                <br /> credibility.
              </p>
            </Box>
            <Box>
              <img
                src={CuratedIcon3}
                alt="Icon"
                style={{ marginBottom: "20px" }}
                className="md:w-auto w-[5vw] m-auto"
              />
              <p className="md:text-[1rem] text-[0.8rem] md:leading-[24px] leading-[20px] mb-5 text-[#6a6a6a]">
                We will host Twitter
                <br /> spaces for you and your
                <br /> team to introduce you to
                <br /> the Bitcoin and crypto
                <br /> community.
              </p>
            </Box>
            <Box>
              <img
                src={CuratedIcon4}
                alt="Icon"
                style={{ marginBottom: "20px" }}
                className="md:w-auto w-[5vw] m-auto"
              />
              <p className="md:text-[1rem] text-[0.8rem] md:leading-[24px] leading-[20px] mb-5 text-[#6a6a6a]">
                Get included in the
                <br /> Treasury pool for a<br /> chance to get funded by <br />
                Invent On BTC
              </p>
            </Box>
          </Box>
        </Box>
        <Box>
          <p className="md:text-[2rem] text-[1.2rem] md:leading-[44.8px] font-extrabold leading-[40px] md:mb-10 mb-4">
            PROJECTS FUNDED THROUGH{" "}
            <span style={{ color: theme.colors.primary }}>INVENT ON BTC</span>{" "}
          </p>
          <Box className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
            {ProjectsFundData.map((item, index) => (
              <ProjectCard
                key={index}
                image={item.image}
                title={item.title}
                content={item.content}
                type={item.type}
                amount={item.amout}
                percent={item.percent}
                leftDays={item.leftDays}
              />
            ))}
          </Box>
        </Box>
        <Box style={{ marginBottom: theme.gaps[5] }}>
          <p
            style={{
              marginBottom: theme.gaps[2],
              fontSize: "36px",
              fontWeight: "900",
              textAlign: "center",
            }}
          >
            CREATOR RESOURCES
          </p>
          <p style={{ textAlign: "center", marginBottom: theme.gaps[5] }}>
            Some tools and resources to help you <br /> on you Bitcoin
            Entrepreneurial journey
          </p>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "minmax(0, 1fr)"
                : "minmax(0, 1fr) minmax(0, 1fr)",
              gap: "80px",
            }}
          >
            {ResourceData.map((item, index) => {
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
      </Box>
      <Footer />
    </React.Fragment>
  );
};

export default StartupSection;
