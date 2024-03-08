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
  { name: "Curated Projects", link: "/", menuItems: [] },
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
              <span style={{ color: theme.colors.primary }}>BTC</span>
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
              {pages.map((page, index) => (
                <Link key={page.name} to={page.link}>
                  <MenuItem
                    key={page.name}
                    onClick={() => handleExpandedMenu(page.name)}
                  >
                    <Typography
                      key={page.name}
                      className="navbar-itemm"
                      sx={{
                        color: theme.colors.black,
                        position: "relative",
                      }}
                      textAlign="center"
                    >
                      {page.name}
                      {page.menuItems.length > 0 && (
                        <span className="mobile_parent_navbar">
                          <ArrowForwardIosIcon
                            className={`${page.name}arrow_icon`}
                          />
                        </span>
                      )}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
            {pages.map((page, index) => (
              <Box key={page.name}>
                {expandedSubMenu === page.name && page.menuItems.length > 0 && (
                  <Box
                    className="submenu"
                    sx={{
                      position: "absolute",
                      textAlign: "left",
                      height: "auto",
                      width: "163px",
                      background: theme.colors.white,
                      zIndex: 3,
                      left: "204px",
                      top: page.name === "ABOUT" ? "200px" : "247px",
                      padding: "12px 1px",
                      transition: "all 2s",
                      borderRadius: "7px",
                    }}
                  >
                    {page.menuItems.map((item, index) => (
                      <Link key={item.name} to={item.link}>
                        <p
                          className="navbar-item"
                          onClick={handleCloseNavMenu}
                          style={{
                            padding: "7px 13px",
                            background: theme.colors.white,
                            color: theme.colors.black,
                            marginBottom: "7px",
                          }}
                          key={index}
                        >
                          {item.name}
                        </p>
                      </Link>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: theme.gaps[3],
              marginLeft: "142px",
            }}
          >
            {pages.map((page, index) => {
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
            })}
          </Box>
          <Box sx={{ ...theme.container }}>
          <Button
                className="navbar-item md:w-[8rem] md:h-[3.2rem] h-[40px] w-[6rem] mr-2"
                variant="contained"
                sx={{
                  ...theme.buttons.primary,
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
