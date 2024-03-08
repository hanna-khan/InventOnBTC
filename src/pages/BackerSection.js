/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";
import { Box, Checkbox, Button, TextField } from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ForeImage from "../assets/images/backer_fore_img.png";
import MainImage1 from "../assets/images/backer_main_image_1.png";
import MainImage2 from "../assets/images/backer_main_image_2.png";
import StepIcon1 from "../assets/images/backer_step_icon_1.png";
import StepIcon2 from "../assets/images/backer_step_icon_2.png";
import StepIcon3 from "../assets/images/backer_step_icon_3.png";
import StepIcon4 from "../assets/images/backer_step_icon_4.png";
import Coin1 from "../assets/images/Footer_logo.png";
import Coin2 from "../assets/images/coin_2.png";
import XverseIcon from "../assets/images/xverse_icon.png";
import LeatherIcon from "../assets/images/leather_icon.png";

const BackerSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width:430px)");
  const isSmallMobile = useMediaQuery("(max-width:375px)");
  const Laptop3 = useMediaQuery("(max-width:1366px)");

  return (
    <React.Fragment>
      <Navbar />
      <Box
        className="relative top-[4rem] h-[60vh] w-full bg-center"
        sx={{
          backgroundImage: `url(${ForeImage})`,
          backgroundSize: "cover",
        }}
      />
      <Box
        sx={{
          ...theme.container,
          flexDirection: "column",
          gap: theme.gaps.sectionGap,
        }}
      >
        <Box
          className="md:gap-[97px] gap-[1rem]"
          sx={{
            ...theme.container,
            padding: "108px",
            flexDirection: Laptop3 ? "column" : "row",
          }}
        >
          <img className="md:w-auto w-[50vw]" src={MainImage1} alt="Image" />
          <div style={{ textAlign: "center", flex: 1 }}>
            <h1 className="md:text-[2rem] text-[1.2rem] md:leading-[44.8px] leading-[40px] md:mb-[40px] mb-2">
              Fund the next big thing on
              <span style={{ color: theme.colors.primary }}>Bitcoin</span>
            </h1>
            <p className="md:text-[0.8rem] text-[0.7rem] md:leading-[24px] leading-[15px] mb-5">
              Invent on BTC gives you access and opportunity to support
              groundbreaking Bitcoin innovations among <br /> many different
              categories. This is your chance to get on the ground floor and
              support these gems who are <br /> sometimes offering amazing perks
              to their early supporters. Every day you will find exciting new
              ideas <br />
              taking flight on the platform. <br /> With our amazing and feature
              rich platform we’ll make crowdfunding exciting and give you access
              that has <br /> never been seen before in the Blockchain space.
            </p>
          </div>
        </Box>
      </Box>
      <Box
        sx={{
          padding: "68px",
          background: theme.background.sectionColor,
          ...theme.container,
          flexDirection: "column",
          gap: theme.gaps[3],
        }}
      >
        <Box sx={{ ...theme.container }}>
          <h3 className="md:text-[2rem] text-[1.2rem] md:leading-[44.8px] leading-[40px]">
            Bringing you{" "}
            <span style={{ color: theme.colors.blue }}>
              CURATED{" "}
              <Checkbox
                defaultChecked
                sx={{
                  color: theme.colors.blue,
                  padding: "0px",
                  mr: "12px",
                  "&.Mui-checked": {
                    color: theme.colors.blue,
                  },
                }}
              />
            </span>{" "}
            projects
          </h3>
        </Box>
        <p className="md:text-[0.8rem] text-[0.7rem] md:leading-[24px] leading-[20px]  text-center">
          Curated Projects on the Invent On BTC Platform are marked with the
          blue tick. <br /> It is only given to those who have satisfied the
          requirements set by the Invent On BTC platform
        </p>
        <p
          className="md:text-[0.9rem] text-[0.7rem] md:leading-[24px] leading-[20px] text-center font-medium"
          style={{
            color: theme.colors.blue,
          }}
        >
          With curated projects you can get even more in-depth information about
          projects like analytics, founder
          <br /> interviews and a chance to know more about the vision and
          interact with the team through twitter spaces.
        </p>
      </Box>
      <Box
        className="md:gap-[1.2rem] gap-[0.8rem] md:p-[90px] p-4"
        sx={{
          ...theme.container,
          flexDirection: "column",
        }}
      >
        <h2 className="md:text-[2rem] text-[1.2rem] md:leading-[44.8px] leading-[40px] md:mb-[40px] mb-5">
          Innovations from ideas to launched projects
        </h2>
        <Box sx={{ ...theme.container, gap: "20px" }}>
          <img className="md:w-auto w-[10vw]" src={StepIcon1} alt="Icon" />
          <Box
            className="md:w-[119px] w-[50px]"
            sx={{ border: "1px solid black" }}
          />
          <img className="md:w-auto w-[10vw]" src={StepIcon2} alt="Icon" />
          <Box
            className="md:w-[119px] w-[50px]"
            sx={{ border: "1px solid black" }}
          />
          <img className="md:w-auto w-[10vw]" src={StepIcon3} alt="Icon" />
          <Box
            className="md:w-[119px] w-[50px]"
            sx={{ border: "1px solid black" }}
          />
          <img className="md:w-auto w-[10vw]" src={StepIcon4} alt="Icon" />
        </Box>
        <p className="md:text-[0.8rem] text-[0.7rem] md:leading-[24px] leading-[20px] text-center">
          Invent On BTC gives you access to projects on all stages in their
          journey. They could be as early as just an idea or could be an <br />
          already launched project looking to go to the next level. We support
          any and all Bitcoin <br />
          startups regardless on what stage of development they are on. <br />
          Read about the projects, go through data and analytics, look into
          founder’s interviews and get your questions <br />
          answered by the project team on twitter spaces. We give the backers an
          unprecedented level of control and <br />
          access to the projects they want to back.
        </p>
        <Button
          className="navbar-item md:w-[180px] md:h-[2.6rem] h-[50px] w-[120px]"
          variant="contained"
          sx={{
            ...theme.buttons.primary,
          }}
        >
          <span className="md:text-[0.8rem] text-[0.6rem] text-white">
            EXPLORE Projects
          </span>
        </Button>
      </Box>
      <Box
        className="p-4 md:p-[30px]"
        sx={{
          background: theme.background.sectionColor,
          ...theme.container,
          gap: theme.gaps[3],
          flexDirection: "column",
          marginBottom: theme.gaps[6],
        }}
      >
        <Box 
        className="gap-[2rem] sm:gap-[144px]"
        sx={{ ...theme.container, alignItems: "stretch" }}>
          <Box>
            <p className="md:text-[2rem] text-[1rem] md:leading-[44.8px] leading-[40px] md:mb-[30px] mb-4 font-bold">
              Fund With
            </p>
            <Box
              className="md:gap-[49px] gap-[10px]"
              sx={{ ...theme.container }}
            >
              <img className="w-[50px] md:w-[78px]" src={Coin1} alt="Icon" />
              <img className="w-[50px] md:w-[78px]" src={Coin2} alt="Icon" />
            </Box>
          </Box>
          <Box>
            <p className="md:text-[2rem] text-[1rem] md:leading-[44.8px] leading-[40px] md:mb-[30px] mb-4 font-bold">
              Wallet integration
            </p>
            <Box
              className="md:gap-[49px] gap-[10px]"
              sx={{ ...theme.container }}
            >
              <img
                src={XverseIcon}
                alt="Icon"
                className="w-[50px] md:w-[78px]"
              />
              <img
                src={LeatherIcon}
                alt="Icon"
                className="w-[50px] md:w-[78px]"
              />
            </Box>
          </Box>
        </Box>
        <p className="md:text-[1rem] text-[0.8rem] md:leading-[24px] leading-[20px] md:mb-[40px] mb-5 text-center font-medium">
          You can fund projects using BTC and STX. <br /> With integration of
          popular Bitcoin and Stacks wallets, just download XVERSE or Leather
          wallet and
          <br />
          start funding.
        </p>
      </Box>
      <Box
        className="pb-[1rem] md:pb-[56px] p-4"
        sx={{
          ...theme.container,
          flexDirection: "column",
        }}
      >
        <Box
          className="md:max-w-[100%] max-w-[95%]:"
          sx={{
            ...theme.container,
            gap: "49px",
            alignItems: Laptop3 ? "center" : "flex-start",
            flexDirection: Laptop3 ? "column" : "row",
          }}
        >
          <img className="md:w-auto w-[50vw]" src={MainImage2} alt="Image" />
          <Box sx={{ textAlign: Laptop3 ? "center" : "left" }}>
            <p className="md:text-[2rem] text-[1.2rem] md:leading-[44.8px] leading-[40px] mb-4 font-bold md:mt-[4rem] mt-0">
              Perks and Rewards
            </p>
            <p className="md:text-[1rem] text-[0.8rem] md:leading-[24px] leading-[20px] md:mb-[40px] mb-5">
              Each project decides what they want to offer in terms of perks or
              rewards to <br />
              backers. They could range from digital assets to physical goods
              and everything
              <br /> in between.
              <br /> Perks and Rewards are listed on the project fund page.
            </p>
            <Box
              className="md:mt-[10rem] mt-4 ml-0 md:ml-[76px]"
              sx={{
                ...theme.container,
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <p style={{ fontSize: "12px", lineHeight: "21px" }}>
                Newsletter:
              </p>
              <p style={{ fontSize: "12px", lineHeight: "21px" }}>
                Get updates on the latest projects campaigns and the Bitcoin
                ecosystem
              </p>
              <Box
                className="gap-4 md:gap-0"
                sx={{
                  ...theme.container,
                  justifyContent: "flex-start",
                  marginTop: theme.gaps[1],
                  marginBottom: theme.gaps[2],
                }}
              >
                <TextField
                  className="md:w-[265px] w-[150px] md:text-[1rem] text-[0.7rem]"
                  id="outlined"
                  label="Your email address"
                  variant="outlined"
                  name="first_name"
                  InputLabelProps={{
                    style: { color: "grey" },
                  }}
                  InputProps={{
                    style: {
                      backgroundColor: theme.background.white,
                    },
                  }}
                  sx={{
                    display: "block",
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    ...theme.buttons.primary,
                  }}
                  className="navbar-item md:w-[160px w-[100px]"
                >
                  SUBSCRIBE
                </Button>
              </Box>
              <Box
                sx={{
                  ...theme.container,
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  marginBottom: "25px",
                }}
              >
                <Checkbox
                  defaultChecked
                  sx={{
                    color: theme.colors.primary,
                    padding: "0px",
                    mr: "12px",
                    "&.Mui-checked": {
                      color: theme.colors.primary,
                    },
                  }}
                />
                <p className="md:text-[1rem] text-[0.8rem]">
                  I agree to the{" "}
                  <a
                    style={{
                      color: theme.colors.primary,
                      textDecoration: "underline",
                      fontWeight: 900,
                    }}
                  >
                    Terms of Use
                  </a>{" "}
                  and have read and understand the{" "}
                  <a
                    style={{
                      color: theme.colors.primary,
                      textDecoration: "underline",
                      fontWeight: 900,
                    }}
                  >
                    Privacy Policy
                  </a>
                </p>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </React.Fragment>
  );
};

export default BackerSection;
