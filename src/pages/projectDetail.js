import * as React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";
import { Box, Button, Slider, Checkbox } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackerCard from "../components/BackerCard";
import Coin1 from "../assets/images/Footer_logo.png";
import Coin2 from "../assets/images/coin_2.png";
import LinkIcon from "../assets/images/link_icon.png";
import { BackerData } from "../constant";
import detailImage from "../assets/images/detail.png";

const ProjectDetail = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width:430px)");
  const isSmallMobile = useMediaQuery("(max-width:375px)");
  const [image, setImage] = React.useState("");
  const [title, setTitle] = React.useState("");

  React.useEffect(() => {
    setImage(localStorage.getItem("selectedProjectImage"));
    setTitle(localStorage.getItem("selectedProjectTitle"));
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            padding: "100px 0",
          }}
        >
          <img
            className="h-[450px]"
            style={{ width: { xs: "100%", lg: "40%" } }}
            src={image}
            alt="Project Detail"
          />
          <Box
            className="px-[30px] lg:pt-0 pt-5"
            sx={{ width: { xs: "100%", lg: "40%" } }}
          >
            <p className="md:text-[1rem] text-[0.8rem] md:leading-[24px] leading-[20px] mb-2 text-[#088366]">
              FUNDING LIVE
            </p>
            <h1
              className="md:text-[2rem] text-[1.2rem] md:leading-[4rem] leading-[40px] mb-2 font-bold text-black"
              style={{
                fontSize: theme.fontSize.subTitle,
                textTransform: "uppercase",
              }}
            >
              {title}
            </h1>
            <p className="md:text-[1rem] text-[0.8rem] md:leading-[24px] leading-[20px] text-[#000] font-medium">
              Bringing an easy to use Bitcoin Wallet with ordinals , BRC20 and
              Stamps integration
            </p>
            <Box
              sx={{
                ...theme.container,
                justifyContent: "flex-start",
                mb: theme.gaps[3],
              }}
            >
              <img className="mr-4" src={detailImage} alt="detail_img" />
              <Box>
                <p className="md:text-[1rem] text-[0.8rem] md:leading-[24px] leading-[20px] text-[#000] font-bold">
                  Ava InnLead
                </p>
                <p className="md:text-[1rem] text-[0.8rem] md:leading-[24px] leading-[20px] text-[#000] font-medium">
                  3 Campaigns | Hongkong, Hong Kong
                </p>
                <p className="md:text-[1rem] text-[0.8rem] md:leading-[24px] leading-[20px] text-[#000] font-bold mt-2">
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
                  <span style={{ color: theme.colors.blue }}>
                    CURATED Projects
                  </span>{" "}
                </p>
              </Box>
            </Box>
            <Box className="flex justify-between">
              <p className="md:text-[1rem] text-[0.8rem] text-[#6A6A6A] font-medium">
                <span
                  style={{
                    fontWeight: "bold",
                    marginRight: "11px",
                    color: "#000",
                  }}
                >
                  1.22
                </span>
                ₿TC raised
              </p>
              <p className="md:text-[1rem] text-[0.8rem] text-[#6A6A6A] font-medium">
                <span>4 ₿TC goal</span>
              </p>
            </Box>
            <Slider
              className="lg:w-[100%] w-[25%]"
              sx={{
                height: "10px",
                "& .MuiSlider-thumb": {
                  display: "none",
                },
              }}
              defaultValue={4}
              valueLabelDisplay="auto"
            />
            <Box
              sx={{
                ...theme.container,
                justifyContent: "space-between",
                marginBottom: theme.gaps[3],
              }}
            >
              <p>
                <span style={{ fontWeight: "bold" }}>1.22 BTC </span>
                by 239 backers
                <br />
                1.22 BTC funded of 4 BTC goal
              </p>
            </Box>
            <Box sx={{ ...theme.container, justifyContent: "space-between" }}>
              <Box
                sx={{
                  ...theme.container,
                  justifyContent: "flex-start",
                  gap: theme.gaps[2],
                }}
              >
                <Box>
                  <p className="md:text-[1rem] text-[0.8rem]">Fund With</p>
                  <Box
                    className="md:gap-[1rem] gap-[4px]"
                    sx={{ ...theme.container }}
                  >
                    <img
                      className="w-[30px] md:w-[40px]"
                      src={Coin1}
                      alt="Icon"
                    />
                    <img
                      className="w-[30px] md:w-[40px]"
                      src={Coin2}
                      alt="Icon"
                    />
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    ...theme.buttons.primary,
                  }}
                  className="navbar-item md:w-[140px] w-[100px] h-[2.8rem] md:h-[3.3rem]"
                >
                  FUND NOW
                </Button>
              </Box>
              <Box
                sx={{
                  ...theme.container,
                  justifyContent: "flex-start",
                  gap: theme.gaps[2],
                }}
              >
                <FacebookIcon sx={{ opacity: 0.6 }} />
                <TwitterIcon sx={{ opacity: 0.6 }} />
                <img src={LinkIcon} alt="Icon" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          className="flex md:justify-start justify-center md:items-baseline items-center md:p-[38px] p-[10px]"
          sx={{
            background: theme.background.sectionColor,
            flexDirection: "column",
            gap: theme.gaps[3],
          }}
        >
          <div className="block m-auto">
            <Box className="flex items-center md:text-left text-center">
              <h3 className="md:text-[2rem] text-[1.2rem] md:leading-[4rem] leading-[40px]">
                This is a{" "}
                <span style={{ color: theme.colors.blue }}>
                  CURATED Project
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
              </h3>
            </Box>

            <p className="md:text-[0.8rem] text-[0.7rem] md:leading-[24px] leading-[20px]  md:text-left text-center mb-[2rem]">
              This means the project has gone through the process of satisfying
              the requirements set forth by the platform designed <br /> to get
              specific information* regarding development and teams.
            </p>
            <div className="flex flex-row flex-wrap gap-2">
              <Button
                className="navbar-item w-[13vw] h-[2rem]"
                variant="contained"
                sx={{
                  ...theme.buttons.secondary,
                }}
              >
                <span className="md:text-[0.7rem] text-[8px] text-dark">
                  Bitcoin software
                </span>
              </Button>
              <Button
                className="navbar-item w-[13vw] h-[2rem]"
                variant="contained"
                sx={{
                  ...theme.buttons.secondary,
                }}
              >
                <span className="md:text-[0.7rem] text-[8px] text-dark">
                  Productivity
                </span>
              </Button>
              <Button
                className="navbar-item w-[13vw] h-[2rem]"
                variant="contained"
                sx={{
                  ...theme.buttons.secondary,
                }}
              >
                <span className="md:text-[0.7rem] text-[8px] text-dark">
                  Wallet
                </span>
              </Button>
            </div>
          </div>
        </Box>
        <div className="flex flex-col  my-[4rem] justify-center items-center p-5">
          <h1 className="md:text-[1.5rem] text-[1rem] md:mb-[20px] mb-4 font-bold text-center">
            GET MORE INFORMATION TO HELP YOU IN YOUR FUNDING DECISION
          </h1>
          <h1 className="md:text-[0.8rem] text-[0.6rem] md:leading-[24px] leading-[20px] md:mb-[30px] mb-5 text-[#6a6a6a]">
            Only available for CURATED projects
          </h1>
          <div className="flex flex-row flex-wrap gap-2">
            <Button
              className="navbar-item w-[10vw] h-[3rem]"
              variant="contained"
              sx={{
                ...theme.buttons.secondary,
                backgroundColor: "#1597E1",
                color: "#fff",
              }}
            >
              <span className="md:text-[0.7rem] text-[8px] text-dark">
                Project Analytics
              </span>
            </Button>
            <Button
              className="navbar-item w-[10vw] h-[3rem]"
              variant="contained"
              sx={{
                ...theme.buttons.secondary,
                backgroundColor: "#1597E1",
                color: "#fff",
              }}
            >
              <span className="md:text-[0.7rem] text-[8px] text-dark">
                Founder interview
              </span>
            </Button>
          </div>
        </div>
        {/* <Box sx={{ px: theme.gaps[2], mb: theme.gaps[6] }}>
          <h1
            style={{
              fontSize: theme.fontSize.mainTitle,
              color: theme.colors.primary,
            }}
          >
            Backer Rewards
          </h1>
          <p style={{ opacity: 0.5, marginBottom: theme.gaps[3] }}>
            You can fund this project by choosing from the packages and deals on
            offer.
          </p>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {BackerData.map((item, index) => (
              <BackerCard
                key={index}
                title={item.title}
                content={item.content}
              />
            ))}
          </Box>
        </Box>
        <Box sx={{ px: theme.gaps[2], mb: theme.gaps[6] }}>
          <h1
            style={{
              fontSize: theme.fontSize.mainTitle,
              color: theme.colors.primary,
            }}
          >
            Project Details{" "}
          </h1>
          <p style={{ opacity: 0.5, marginBottom: theme.gaps[3] }}>
            Learn more about the project, its goals, timeline, and team members.
          </p>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              mb: theme.gaps[3],
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "25%" },
                borderRadius: "10px",
                px: theme.gaps[2],
                py: theme.gaps[3],
                background: "#F8F8F8",
              }}
            >
              <h2
                style={{
                  fontWeight: "bold",
                  marginBottom: theme.gaps[1],
                }}
              >
                Project Goals
              </h2>
              <p>Discover the objectives and vision of the project.</p>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", md: "25%" },
                borderRadius: "10px",
                px: theme.gaps[2],
                py: theme.gaps[3],
                background: "#F8F8F8",
              }}
            >
              <h2
                style={{
                  fontWeight: "bold",
                  marginBottom: theme.gaps[1],
                }}
              >
                FAQ
              </h2>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", md: "25%" },
                borderRadius: "10px",
                px: theme.gaps[2],
                py: theme.gaps[3],
                background: "#F8F8F8",
              }}
            >
              <h2
                style={{
                  fontWeight: "bold",
                  marginBottom: theme.gaps[1],
                }}
              >
                Updates(2)
              </h2>
              <p>The latest updates on the project.</p>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", md: "25%" },
                borderRadius: "10px",
                px: theme.gaps[2],
                py: theme.gaps[3],
                background: "#F8F8F8",
              }}
            >
              <h2
                style={{
                  fontWeight: "bold",
                  marginBottom: theme.gaps[1],
                }}
              >
                Discussion (21)
              </h2>
              <p>Lets discuss</p>
            </Box>
          </Box>
          <Box
            sx={{ background: "#D9D9D9", height: "500px", mb: theme.gaps[6] }}
          />
        </Box>
        <Box sx={{ px: theme.gaps[2], mb: theme.gaps[6] }}>
          <h1
            style={{
              fontSize: theme.fontSize.mainTitle,
              color: theme.colors.primary,
            }}
          >
            Backer Rewards{" "}
          </h1>
          <p style={{ opacity: 0.5, marginBottom: theme.gaps[3] }}>
            Check out the exciting rewards you can get by backing this project
            at different funding levels.
          </p>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              mb: theme.gaps[3],
              gap: "5px",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "25%" },
                borderRadius: "10px",
                px: theme.gaps[2],
                py: theme.gaps[3],
                background: "#F8F8F8",
              }}
            >
              <h2
                style={{
                  fontWeight: "bold",
                  marginBottom: theme.gaps[1],
                }}
              >
                Bronze Backer
              </h2>
              <p>
                Get exclusive project updates and a shoutout on our social media
                platforms.
              </p>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", md: "25%" },
                borderRadius: "10px",
                px: theme.gaps[2],
                py: theme.gaps[3],
                background: "#F8F8F8",
              }}
            >
              <h2
                style={{
                  fontWeight: "bold",
                  marginBottom: theme.gaps[1],
                }}
              >
                Silver Backer
              </h2>
              <p>
                Receive a limited edition project t-shirt and a personalized
                thank you note from the project team.
              </p>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", md: "25%" },
                borderRadius: "10px",
                px: theme.gaps[2],
                py: theme.gaps[3],
                background: "#F8F8F8",
              }}
            >
              <h2
                style={{
                  fontWeight: "bold",
                  marginBottom: theme.gaps[1],
                }}
              >
                Gold Backer
              </h2>
              <p>
                Get early access to the project's beta version and have your
                name featured in the project credits.
              </p>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", md: "25%" },
                borderRadius: "10px",
                px: theme.gaps[2],
                py: theme.gaps[3],
                background: "#F8F8F8",
              }}
            >
              <h2
                style={{
                  fontWeight: "bold",
                  marginBottom: theme.gaps[1],
                }}
              >
                Platinum Backer
              </h2>
              <p>
                Join the project team for a virtual meet and greet session and
                receive a signed copy of the project's official merchandise.
              </p>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", md: "25%" },
                borderRadius: "10px",
                px: theme.gaps[2],
                py: theme.gaps[3],
                background: "#F8F8F8",
              }}
            >
              <h2
                style={{
                  fontWeight: "bold",
                  marginBottom: theme.gaps[1],
                }}
              >
                Diamond Backer
              </h2>
              <p>
                Become an official sponsor of the project and have your logo
                prominently displayed on the project's website and marketing
                materials.
              </p>
            </Box>
          </Box>
        </Box> */}
      </Box>
      <Footer />
    </React.Fragment>
  );
};

export default ProjectDetail;
