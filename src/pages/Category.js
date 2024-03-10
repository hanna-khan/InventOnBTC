import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import {
  useTheme,
  useMediaQuery,
  Box,
  Radio,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
  Drawer,
} from "@mui/material";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HeroImg from "../assets/images/category_fore_img.png";
import Coin1 from "../assets/images/Footer_logo.png";
import Coin2 from "../assets/images/coin_2.png";

import ProjectCard from "../components/ProjectCard";
import { sliderSettings, ProjectsData } from "../constant";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Categories = [
  { name: "Ordinals", link: "" },
  { name: "BRC-20", link: "" },
  { name: "Layer 2", link: "" },
  { name: "Mining", link: "" },
  { name: "Media", link: "" },
  { name: "Stamps", link: "" },
  { name: "DEFI", link: "" },
  { name: "Bitcoin Art", link: "" },
  { name: "Wallets", link: "" },
  { name: "Bitcoin Education", link: "" },
  { name: "Bitcoin Metaverse", link: "" },
  { name: "Bitcoin Games", link: "" },
];

const Home = () => {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);

  const [selectedTimingValue, setSelectedTimingValue] = React.useState("all");
  const [selectedStateValue, setSelectedStateValue] = React.useState("all");
  const [sortItme, setSortItem] = React.useState("");
  const Laptop1 = useMediaQuery("(max-width:1680px)");
  const Laptop2 = useMediaQuery("(max-width:1400px)");
  const Laptop3 = useMediaQuery("(max-width:1366px)");
  const Laptop4 = useMediaQuery("(max-width:1280px)");

  const handleTimingChanging = (event) => {
    setSelectedTimingValue(event.target.value);
  };

  const handleStateChange = (event) => {
    setSelectedStateValue(event.target.value);
  };

  const controlTimingProps = (item) => ({
    checked: selectedTimingValue === item,
    onChange: handleTimingChanging,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  const controlStateProps = (item) => ({
    checked: selectedStateValue === item,
    onChange: handleStateChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  const handleSortItemChange = (event) => {
    setSortItem(event.target.value);
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          height: "40vh",
          backgroundImage: `url(${HeroImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "100px 10px",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            width: "20%",
            display: { xs: "none", lg: "block" },
          }}
        >
          <p
            style={{
              lineHeight: "24px",
              fontWeight: "bold",
              marginBottom: "15px",
            }}
          >
            Filter results
          </p>
          <Box sx={{ py: "15px" }}>
            <p
              style={{
                fontSize: "18px",
                textTransform: "uppercase",
                lineHeight: "18px",
                color: "#949494",
                fontWeight: 500,
                marginBottom: "15px",
              }}
            >
              Category
            </p>
            <Box>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "33px",
                  fontWeight: "500",
                  color: theme.colors.primary,
                  marginBottom: "10px",
                }}
              >
                All Categories
              </p>
              <Box
                sx={{
                  ...theme.container,
                  alignItems: "flex-start",
                  flexDirection: "column",
                  gap: "15px",
                  paddingLeft: "11px",
                }}
              >
                {Categories.map((item, index) => (
                  <span style={{ cursor: "pointer" }} key={index}>
                    {item.name}
                  </span>
                ))}
              </Box>
            </Box>
          </Box>
          <hr />
          <Box sx={{ py: "15px" }}>
            <p
              style={{
                fontSize: "18px",
                textTransform: "uppercase",
                lineHeight: "18px",
                color: "#949494",
                fontWeight: 500,
                marginBottom: "15px",
              }}
            >
              Project timing
            </p>
            <Box>
              <Box
                sx={{
                  ...theme.container,
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ ...theme.container, justifyContent: "flex-start" }}>
                  <Radio
                    id="all_timing"
                    {...controlTimingProps("all")}
                    sx={{
                      "&.Mui-checked": {
                        color: theme.colors.primary,
                      },
                    }}
                  />
                  <label htmlFor="all_timing">All</label>
                </Box>
                <Box sx={{ ...theme.container, justifyContent: "flex-start" }}>
                  <Radio
                    id="launching"
                    {...controlTimingProps("launching")}
                    sx={{
                      "&.Mui-checked": {
                        color: theme.colors.primary,
                      },
                    }}
                  />
                  <label htmlFor="launching">Launching soon</label>
                </Box>
                <Box sx={{ ...theme.container, justifyContent: "flex-start" }}>
                  <Radio
                    id="ending"
                    {...controlTimingProps("ending")}
                    sx={{
                      "&.Mui-checked": {
                        color: theme.colors.primary,
                      },
                    }}
                  />
                  <label htmlFor="ending">Ending soon</label>
                </Box>
                <Box sx={{ ...theme.container, justifyContent: "flex-start" }}>
                  <Radio
                    id="launched"
                    {...controlTimingProps("launched")}
                    sx={{
                      "&.Mui-checked": {
                        color: theme.colors.primary,
                      },
                    }}
                  />
                  <label htmlFor="launched">Just launched</label>
                </Box>
              </Box>
            </Box>
          </Box>
          <hr />
          <Box sx={{ py: "15px" }}>
            <p
              style={{
                fontSize: "18px",
                textTransform: "uppercase",
                lineHeight: "18px",
                color: "#949494",
                fontWeight: 500,
                marginBottom: "15px",
              }}
            >
              Project timing
            </p>
            <Box>
              <Box
                sx={{
                  ...theme.container,
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ ...theme.container, justifyContent: "flex-start" }}>
                  <Radio
                    id="all_state"
                    {...controlStateProps("all")}
                    sx={{
                      "&.Mui-checked": {
                        color: theme.colors.primary,
                      },
                    }}
                  />
                  <label htmlFor="all_state">All</label>
                </Box>
                <Box sx={{ ...theme.container, justifyContent: "flex-start" }}>
                  <Radio
                    id="concept"
                    {...controlStateProps("concept")}
                    sx={{
                      "&.Mui-checked": {
                        color: theme.colors.primary,
                      },
                    }}
                  />
                  <label htmlFor="concept">Concept</label>
                </Box>
                <Box sx={{ ...theme.container, justifyContent: "flex-start" }}>
                  <Radio
                    id="prototype"
                    {...controlStateProps("prototype")}
                    sx={{
                      "&.Mui-checked": {
                        color: theme.colors.primary,
                      },
                    }}
                  />
                  <label htmlFor="prototype">Prototype</label>
                </Box>
                <Box sx={{ ...theme.container, justifyContent: "flex-start" }}>
                  <Radio
                    id="live"
                    {...controlStateProps("live")}
                    sx={{
                      "&.Mui-checked": {
                        color: theme.colors.primary,
                      },
                    }}
                  />
                  <label htmlFor="live">Live</label>
                </Box>
              </Box>
            </Box>
          </Box>
          <hr />
        </Box>
        <Drawer
          open={openDrawer}
          sx={{ "& .MuiDrawer-paper": { width: "320px", padding: "10px" } }}
          onClose={() => setOpenDrawer(false)}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              as={IoMdCloseCircleOutline}
              sx={{ alignSelf: "flex-end" }}
              size={40}
              onClick={() => setOpenDrawer(false)}
            />
            <p
              style={{
                lineHeight: "24px",
                fontWeight: "bold",
                marginBottom: "15px",
              }}
            >
              Filter results
            </p>
            <Box sx={{ py: "15px" }}>
              <p
                style={{
                  fontSize: "18px",
                  textTransform: "uppercase",
                  lineHeight: "18px",
                  color: "#949494",
                  fontWeight: 500,
                  marginBottom: "15px",
                }}
              >
                Category
              </p>
              <Box>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "33px",
                    fontWeight: "500",
                    color: theme.colors.primary,
                    marginBottom: "10px",
                  }}
                >
                  All Categories
                </p>
                <Box
                  sx={{
                    ...theme.container,
                    alignItems: "flex-start",
                    flexDirection: "column",
                    gap: "15px",
                    paddingLeft: "11px",
                  }}
                >
                  {Categories.map((item, index) => (
                    <span style={{ cursor: "pointer" }} key={index}>
                      {item.name}
                    </span>
                  ))}
                </Box>
              </Box>
            </Box>
            <hr />
            <Box sx={{ py: "15px" }}>
              <p
                style={{
                  fontSize: "18px",
                  textTransform: "uppercase",
                  lineHeight: "18px",
                  color: "#949494",
                  fontWeight: 500,
                  marginBottom: "15px",
                }}
              >
                Project timing
              </p>
              <Box>
                <Box
                  sx={{
                    ...theme.container,
                    alignItems: "flex-start",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{ ...theme.container, justifyContent: "flex-start" }}
                  >
                    <Radio
                      id="all_timing"
                      {...controlTimingProps("all")}
                      sx={{
                        "&.Mui-checked": {
                          color: theme.colors.primary,
                        },
                      }}
                    />
                    <label htmlFor="all_timing">All</label>
                  </Box>
                  <Box
                    sx={{ ...theme.container, justifyContent: "flex-start" }}
                  >
                    <Radio
                      id="launching"
                      {...controlTimingProps("launching")}
                      sx={{
                        "&.Mui-checked": {
                          color: theme.colors.primary,
                        },
                      }}
                    />
                    <label htmlFor="launching">Launching soon</label>
                  </Box>
                  <Box
                    sx={{ ...theme.container, justifyContent: "flex-start" }}
                  >
                    <Radio
                      id="ending"
                      {...controlTimingProps("ending")}
                      sx={{
                        "&.Mui-checked": {
                          color: theme.colors.primary,
                        },
                      }}
                    />
                    <label htmlFor="ending">Ending soon</label>
                  </Box>
                  <Box
                    sx={{ ...theme.container, justifyContent: "flex-start" }}
                  >
                    <Radio
                      id="launched"
                      {...controlTimingProps("launched")}
                      sx={{
                        "&.Mui-checked": {
                          color: theme.colors.primary,
                        },
                      }}
                    />
                    <label htmlFor="launched">Just launched</label>
                  </Box>
                </Box>
              </Box>
            </Box>
            <hr />
            <Box sx={{ py: "15px" }}>
              <p
                style={{
                  fontSize: "18px",
                  textTransform: "uppercase",
                  lineHeight: "18px",
                  color: "#949494",
                  fontWeight: 500,
                  marginBottom: "15px",
                }}
              >
                Project timing
              </p>
              <Box>
                <Box
                  sx={{
                    ...theme.container,
                    alignItems: "flex-start",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{ ...theme.container, justifyContent: "flex-start" }}
                  >
                    <Radio
                      id="all_state"
                      {...controlStateProps("all")}
                      sx={{
                        "&.Mui-checked": {
                          color: theme.colors.primary,
                        },
                      }}
                    />
                    <label htmlFor="all_state">All</label>
                  </Box>
                  <Box
                    sx={{ ...theme.container, justifyContent: "flex-start" }}
                  >
                    <Radio
                      id="concept"
                      {...controlStateProps("concept")}
                      sx={{
                        "&.Mui-checked": {
                          color: theme.colors.primary,
                        },
                      }}
                    />
                    <label htmlFor="concept">Concept</label>
                  </Box>
                  <Box
                    sx={{ ...theme.container, justifyContent: "flex-start" }}
                  >
                    <Radio
                      id="prototype"
                      {...controlStateProps("prototype")}
                      sx={{
                        "&.Mui-checked": {
                          color: theme.colors.primary,
                        },
                      }}
                    />
                    <label htmlFor="prototype">Prototype</label>
                  </Box>
                  <Box
                    sx={{ ...theme.container, justifyContent: "flex-start" }}
                  >
                    <Radio
                      id="live"
                      {...controlStateProps("live")}
                      sx={{
                        "&.Mui-checked": {
                          color: theme.colors.primary,
                        },
                      }}
                    />
                    <label htmlFor="live">Live</label>
                  </Box>
                </Box>
              </Box>
            </Box>
            <hr />
          </Box>
        </Drawer>
        <Box sx={{ width: { xs: "100%", lg: "70%" } }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "26px",
              gap: "10px",
            }}
          >
            <Box
              as={GiHamburgerMenu}
              size={30}
              sx={{ display: { xs: "block", lg: "none" } }}
              onClick={() => setOpenDrawer(true)}
            />
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Google Maps"
                inputProps={{ "aria-label": "search google maps" }}
              />
            </Paper>
          </Box>
          <Box
            sx={{
              ...theme.container,
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "25px",
            }}
          >
            <Box>
              <p style={{ fontWeight: "bold", marginBottom: "12px" }}>
                Fund With
              </p>
              <Box
                sx={{
                  ...theme.container,
                  gap: "31px",
                  justifyContent: "space-between",
                }}
              >
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={Coin1}
                  alt="Icon"
                />
                <img src={Coin2} alt="Coin" />
              </Box>
            </Box>
            <Box sx={{ ...theme.container, justifyContent: "space-between" }}>
              <p style={{ marginRight: "15px" }}>Sort by</p>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Trending
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sortItme}
                    label="Age"
                    onChange={handleSortItemChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
          <Grid container columnGap={2} rowGap={5}>
            {ProjectsData.map((item, index) => (
              <Grid item>
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
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
