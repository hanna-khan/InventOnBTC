/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from "react";
import { useTheme, useMediaQuery, Typography } from "@mui/material";
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
import { FaArrowRightLong } from "react-icons/fa6";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

import { useAuth } from "../context/AuthContext";

import Logo from "../assets/images/logo.png";

const CheckPassword = "InventOnBTC123";

const BetaLoginPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:430px)");
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState({
    email: "",
    twitter: "",
  });
  const [message, setMessage] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { login } = useAuth();
  const Laptop3 = useMediaQuery("(max-width:1530px)");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addEmailAndTwitterHandle = async () => {
    try {
      await addDoc(collection(db, "betaLogin"), form);
      setForm({
        email: "",
        twitter: "",
      });
      setMessage("Submitted successfully");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
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

            <Button
              className="navbar-item mr-2"
              variant="contained"
              sx={{
                ...theme.buttons.primary,
                backgroundColor: "#f19c1d",
              }}
              as="a"
              href="https://invent-on-btc.gitbook.io/invent-on-btc/"
            >
              <span className="md:text-[0.8rem] text-[0.6rem] text-white uppercase">
                Doc
              </span>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ height: "calc(100vh - 86px)" }}>
        <Box
          className="justify-center md:justify-between flex items-center"
          sx={{
            position: "relative",
            background: theme.background.black,
            py: theme.gaps[3],
            paddingTop: "119px",
          }}
        >
          <Box className="md:pl-[2rem] px-0 flex flex-col">
            <div className="flex md:flex-row flex-col gap-4">
              <h1
                className="max-w-[30vw] md:text-[3rem] text-[1.5rem]"
                style={{
                  color: theme.colors.white,
                  textTransform: "uppercase",
                }}
              >
                DEFI Crowdfunding
                <br />
                for <span style={{ color: "#f19c1d" }}>Bitcoin</span> <br />
                startups
                <br />
                <br />
              </h1>
              <div className="m-auto flex gap-4">
                <FaArrowRightLong className="md:text-[4rem] text-[2.5rem] mr-4 text-white" />
                <p
                  className="mb-4 md:text-[1.5rem] text-[0.8rem]"
                  style={{
                    textTransform: "uppercase",
                    color: "white",
                    textAlign: "right",
                    borderBottom: "1px solid red",
                    cursor: "pointer",
                  }}
                  onClick={handleClickOpen}
                >
                  Access Invite Only <br /> Beta
                </p>
              </div>
            </div>
            <span
              className="md:text-[3rem] text-[1.5rem]"
              style={{
                color: theme.colors.white,
                marginBottom: theme.gaps[2],
                textTransform: "uppercase",
              }}
            >
              Coming soon
            </span>
          </Box>
          <img
            className="w-[25vw] md:block hidden"
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
            src={BetaIcon}
            alt="Hero Image"
          />
        </Box>
        <Box
          className="nd:p-[27px] p-[10px]"
          sx={{
            width: "100%",
            backgroundColor: "#d77b27",
          }}
        >
          <Box
            className="md:w-[50%] w-[100%]"
            sx={{
              ...theme.container,
              flexDirection: "column",
              gap: theme.gaps[4],
              margin: "auto",
            }}
          >
            <Box>
              <Box>
                <p
                  style={{
                    fontWeight: "bold",
                    color: theme.colors.white,
                    marginBottom: "20px",
                  }}
                >
                  Sign up for early BETA access
                </p>
                <Box>
                  {message && (
                    <Typography
                      sx={{
                        backgroundColor: "green",
                        color: "#fff",
                        textAlign: "center",
                        width: "100%",
                        padding: "10px 0",
                      }}
                    >
                      {message}
                    </Typography>
                  )}
                  <TextField
                    className="md:text-[1rem] text-[0.7rem]"
                    id="outlined-basic"
                    label="Your email address"
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                    variant="filled"
                    name="mail_address"
                    InputLabelProps={{
                      style: { color: "grey" },
                    }}
                    InputProps={{
                      style: {
                        backgroundColor: theme.background.white,
                        border: "none",
                        marginBottom: theme.gaps[2],
                        width: "100%",
                      },
                    }}
                    sx={{
                      display: "block",
                      width: "100%",
                    }}
                  />
                  <TextField
                    className="md:text-[1rem] text-[0.7rem]"
                    id="outlined-basic"
                    label="Your twitter handle"
                    value={form.twitter}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        twitter: e.target.value,
                      })
                    }
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
                  <Button
                    className="md:w-[8vw] md:h-[2rem] h-[1.5rem] w-[6vw]"
                    style={{
                      margin: "auto",
                      marginTop: "10px",
                      alignSelf: "flex-end",
                    }}
                    variant="contained"
                    onClick={addEmailAndTwitterHandle}
                    sx={{
                      ...theme.buttons.secondary,
                    }}
                  >
                    <span className="md:text-[0.8rem] text-[0.6rem] text-dark font-bold">
                      SUBMIT
                    </span>
                  </Button>
                </Box>
              </Box>
              <Box
                className="md:gap-[30px] gap-[10px]"
                sx={{
                  ...theme.container,
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  marginTop: "30px",
                }}
              >
                <Box
                  sx={{
                    ...theme.container,
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  {/* <p style={{ fontWeight: "bold" }}>For Startups:</p> */}
                  <p style={{ fontWeight: "bold" }}>
                    Submit a project for crowdfunding
                  </p>
                </Box>
                <Button
                  className="navbar-item md:h-[2.6rem] h-[50px]"
                  variant="contained"
                  sx={{
                    ...theme.buttons.primary,
                    textTransform: "none",
                    background: theme.background.black,
                    ml: theme.gaps[3],
                  }}
                  as="a"
                  href="https://blocksurvey.io/ion-inventonbtc-start-a-project-qa6auObvQaCkVgIyILXj.g?v=o"
                >
                  START A PROJECT
                </Button>
              </Box>
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
