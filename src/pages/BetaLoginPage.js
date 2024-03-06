import * as React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Box,
  AppBar,
  Toolbar,
  Container,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import EastIcon from "@mui/icons-material/East";
import BetaIcon from "../assets/images/beta_icon.png";

import { useAuth } from "../context/AuthContext";

import Logo from "../assets/images/logo.png";

const CheckPassword = "InventOnBTC123";

const BetaLoginPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:430px)");
  const [open, setOpen] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const { login } = useAuth();
  const Laptop3 = useMediaQuery("(max-width:1530px)");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    if (password === CheckPassword) {
      login({ isAuthenticated: true });
      navigate("/");
    } else {
      login({ isAuthenticated: false });
      navigate("/betaLogin");
    }
  };

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: theme.background.black,
          position: "fixed",
          top: 0,
          zIndex: 99,
          boxShadow: "none",
          borderBottom: "1px solid white",
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
              <img src={Logo} alt="logo Images" style={{ width: "72px" }} />
              <Box
                style={{ textAlign: "center", fontSize: theme.fontSize.logo }}
              >
                InventOn <br />
                <span style={{ color: theme.colors.primary }}>BTC</span>
              </Box>
            </Box>

            <Button
              className="navbar-item"
              variant="contained"
              sx={{
                ...theme.buttons.primary,
              }}
            >
              <span
                style={{
                  display: isMobile ? "none" : "inline",
                }}
              >
                Doc
              </span>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ height: "calc(100vh - 86px)" }}>
        <Box
          sx={{
            position: "relative",
            ...theme.container,
            background: theme.background.black,
            justifyContent: "space-between",
            py: theme.gaps[3],
            paddingTop: "119px",
          }}
        >
          <Box
            sx={{
              paddingLeft: "120px",
              ...theme.container,
              flexDirection: Laptop3 ? "column" : "row",
            }}
          >
            <h1
              style={{
                fontSize: Laptop3 ? "50px" : theme.fontSize.mainTitle,
                color: theme.colors.white,
                marginBottom: theme.gaps[2],
                textTransform: "uppercase",
              }}
            >
              DEFI <br /> Crowdfunding <br />
              for <span style={{ color: theme.colors.primary }}>
                Bitcoin
              </span>{" "}
              <br />
              startups
              <br />
              <br />
              <span style={{ fontSize: theme.fontSize.mainTitle }}>
                Coming soon
              </span>
            </h1>
            <EastIcon
              sx={{
                display: Laptop3 && "none",
                color: "white",
                fontSize: "100px",
                marginRight: "30px",
              }}
            />
            <p
              style={{
                textTransform: "uppercase",
                color: "white",
                textAlign: "right",
                fontSize: theme.fontSize.subTitle,
                borderBottom: "1px solid red",
                cursor: "pointer",
              }}
              onClick={handleClickOpen}
            >
              Access Invite Only <br /> Beta
            </p>
          </Box>
          <img
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "374px",
            }}
            src={BetaIcon}
            alt="Hero Image"
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#d77b27",
            padding: "27px",
          }}
        >
          <Box
            sx={{
              width: "50%",
              ...theme.container,
              flexDirection: "column",
              gap: theme.gaps[4],
              margin: "auto",
            }}
          >
            <Box
              sx={{
                ...theme.container,
                justifyContent: "space-between",
                gap: theme.gaps[3],
              }}
            >
              <Box
                sx={{
                  ...theme.container,
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <p style={{ fontWeight: "bold", color: theme.colors.white }}>
                  Sign up for early BETA access
                </p>
              </Box>
              <Box
                sx={{
                  ...theme.container,
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Your email address"
                  variant="filled"
                  name="mail_address"
                  InputLabelProps={{
                    style: { color: "grey" },
                  }}
                  InputProps={{
                    style: {
                      backgroundColor: theme.background.white,
                      border: "none",
                      width: "100%",
                      marginBottom: theme.gaps[2],
                    },
                  }}
                  sx={{
                    display: "block",
                    width: "100%",
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Your twitter handle"
                  variant="filled"
                  name="twitter_address"
                  InputLabelProps={{
                    style: { color: "grey" },
                  }}
                  InputProps={{
                    style: {
                      backgroundColor: theme.background.white,
                      border: "none",
                      width: "100%",
                    },
                  }}
                  sx={{
                    display: "block",
                    width: "100%",
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                ...theme.container,
                justifyContent: "space-between",
                gap: theme.gaps[3],
              }}
            >
              <Box
                sx={{
                  ...theme.container,
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <p style={{ fontWeight: "bold" }}>For Startups:</p>
                <p style={{ fontWeight: "bold" }}>
                  Submit a project for crowdfunding
                </p>
              </Box>
              <Button
                className="navbar-item"
                variant="contained"
                sx={{
                  ...theme.buttons.primary,
                  textTransform: "none",
                  background: theme.background.black,
                  ml: theme.gaps[3],
                }}
              >
                <span
                  style={{
                    textDecoration: "underline",
                    display: isMobile ? "none" : "inline",
                  }}
                >
                  START A PROJECT
                </span>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {},
        }}
      >
        <DialogTitle>Login </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Enter Password to Login Website
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            onChange={handlePasswordInput}
            value={password}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Login</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default BetaLoginPage;
