import * as React from "react";
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

import MenuIcon from "@mui/icons-material/Menu";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Logo from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";

const pages = [
  { name: "Explore", link: "/category", menuItems: [] },
  { name: "Curated Projects", link: "/category", menuItems: [] },
  { name: "Start a project", menuItems: [] },
];

function Navbar(props) {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:430px)");
  const isSmallMobile = useMediaQuery("(max-width:375px)");

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [expandedSubMenu, setExpandedSubMenu] = React.useState("");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setExpandedSubMenu("");
    setAnchorElNav(null);
  };

  const handleExpandedMenu = (pageName) => {
    if (
      pageName === "ABOUT" ||
      pageName === "HOW IT WORKS" ||
      pageName === "SHOP"
    ) {
      setExpandedSubMenu(pageName);
    } else {
      handleCloseNavMenu();
    }
  };

  const handleRedirectUrl = (url) => {
    handleCloseNavMenu();
    if (url) {
      navigate(url);
      return;
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: theme.background.black,
        position: "absolute",
        top: 0,
        zIndex: 99,
        boxShadow: "none",
      }}
    >
      <Container sx={{ minWidth: "100%" }}>
        <Toolbar
          disableGutters
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            "@media only screen and (max-width: 430px)": {
              alignItems: "center",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            <img
              className="w-[60px] md:w-[72px]"
              src={Logo}
              alt="logo Images"
            />
            <Box
              className="md:text-[20px] text-[0.8rem]"
              style={{ textAlign: "center" }}
            >
              InventOn <br />
              <span style={{ color: "#f19c1d" }}>BTC</span>
            </Box>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                left: "-76px",
                width: "167px",
                maxWidth: "unset",
              }}
            >
              <MenuItem as={Link} to="/category">
                <Typography
                  className="navbar-itemm"
                  sx={{
                    color: theme.colors.black,
                    position: "relative",
                  }}
                  textAlign="center"
                >
                  Explore
                </Typography>
              </MenuItem>
              <MenuItem as={Link} to="/category">
                <Typography
                  className="navbar-itemm"
                  sx={{
                    color: theme.colors.black,
                    position: "relative",
                  }}
                  textAlign="center"
                >
                  Curated Projects
                </Typography>
              </MenuItem>
              <MenuItem
                as="a"
                href="https://blocksurvey.io/ion-inventonbtc-start-a-project-qa6auObvQaCkVgIyILXj.g?v=o"
              >
                <Typography
                  className="navbar-itemm"
                  sx={{
                    color: theme.colors.black,
                    position: "relative",
                  }}
                  textAlign="center"
                >
                  start a project
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: theme.gaps[3],
              marginLeft: "142px",
            }}
          >
            <Button
              className="menu-item lg:text-[10px] text-[14px]"
              as={Link}
              to="/category"
              sx={{
                position: "relative",
                display: "inline-block",
                color: theme.colors.white,
              }}
            >
              Explore
            </Button>
            <Button
              className="menu-item lg:text-[10px] text-[14px]"
              as={Link}
              to="/category"
              sx={{
                position: "relative",
                display: "inline-block",
                color: theme.colors.white,
              }}
            >
              curated projects
            </Button>
            <Button
              className="menu-item lg:text-[10px] text-[14px]"
              as="a"
              href="https://blocksurvey.io/ion-inventonbtc-start-a-project-qa6auObvQaCkVgIyILXj.g?v=o"
              sx={{
                position: "relative",
                display: "inline-block",
                color: theme.colors.white,
              }}
            >
              start a project
            </Button>
            {/* {pages.map((page, index) => {
              return (
                <Box key={page.name}>
                  <Button
                    className="menu-item lg:text-[10px] text-[14px]"
                    key={page.name}
                    onClick={() => handleRedirectUrl(page.link)}
                    onMouseEnter={() => handleExpandedMenu(page.name)}
                    onMouseLeave={() => handleExpandedMenu("")}
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      color: theme.colors.white,
                    }}
                  >
                    {page.name}
                    {page.menuItems.length > 0 && (
                      <span>
                        {expandedSubMenu === page.name ? (
                          <ExpandLess
                            sx={{ position: "absolute", top: "7px" }}
                          />
                        ) : (
                          <ExpandMore
                            sx={{ position: "absolute", top: "7px" }}
                          />
                        )}
                      </span>
                    )}
                    {expandedSubMenu === page.name &&
                      page.menuItems.length > 0 && (
                        <Box
                          key={page.name}
                          className="submenu"
                          sx={{
                            position: "absolute",
                            textAlign: "left",
                            height: 0,
                            overflow: "hidden",
                            width: "144px",
                          }}
                        >
                          {page.menuItems.map((item, index) => (
                            <p
                              key={item.name}
                              className="navbar-item"
                              style={{ padding: "7px 13px" }}
                              onClick={() => handleRedirectUrl(item.link)}
                            >
                              {item.name}
                            </p>
                          ))}
                        </Box>
                      )}
                  </Button>
                </Box>
              );
            })} */}
          </Box>
          <Box sx={{ ...theme.container }}>
            <Button
              className="navbar-item md:h-[3.2rem] h-[40px]"
              variant="contained"
              sx={{
                ...theme.buttons.primary,
                marginRight: 2,
              }}
            >
              <span className="md:text-[0.8rem] text-[0.6rem] text-white uppercase">
                Connect Wallet
              </span>
            </Button>
            <LogoutIcon
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/betaLogin")}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
