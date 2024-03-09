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
                <span style={{ color: theme.colors.primary }}>BTC</span>
              </Box>
            </Box>

            <Button
              className="navbar-item md:w-[6rem] md:h-[2.5rem] h-[2rem] w-[4rem] mr-2"
              variant="contained"
              sx={{
                ...theme.buttons.primary,
              }}
            >
<<<<<<< HEAD
              <span className="md:text-[0.8rem] text-[0.6rem] text-white uppercase">
                Doc
              </span>
=======
              <span style={{}}>Doc</span>
>>>>>>> origin/main
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ height: "calc(100vh - 86px)" }}>
        <Box
          className="justify-center md:justify-between flex items-center"
          sx={{
<<<<<<< HEAD
            position: "relative",
            background: theme.background.black,
=======
            display: "flex",
            flexWrap: "wrap",
            background: theme.background.black,
            justifyContent: "space-between",
            flexDirection: { xs: "column-reverse", md: "row" },
>>>>>>> origin/main
            py: theme.gaps[3],
            paddingTop: "119px",
          }}
        >
<<<<<<< HEAD
          <Box className="md:pl-[2rem] px-0 flex flex-col">
            <div className="flex flex-row gap-4">
              <h1
                className="max-w-[30vw] md:text-[3rem] text-[1.5rem]"
                style={{
                  color: theme.colors.white,
                  textTransform: "uppercase",
                }}
              >
                DEFI Crowdfunding
                <br />
                for <span style={{ color: theme.colors.primary }}>
                  Bitcoin
                </span>{" "}
                <br />
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
=======
          <Box
            sx={{
              paddingLeft: { xs: "0", md: "120px" },
              ...theme.container,
              flexDirection: Laptop3 ? "column" : "row",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.4rem", md: "3rem" },
>>>>>>> origin/main
                color: theme.colors.white,
                marginBottom: theme.gaps[2],
                textTransform: "uppercase",
              }}
            >
<<<<<<< HEAD
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
=======
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
            </Typography>
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
            style={{ width: "400px", objectFitL: "contain" }}
>>>>>>> origin/main
            src={BetaIcon}
            alt="Hero Image"
          />
        </Box>
        <Box
          className="nd:p-[27px] p-[10px]"
          sx={{
            width: "100%",
            backgroundColor: "#d77b27",
<<<<<<< HEAD
=======
            padding: "27px 0",
>>>>>>> origin/main
          }}
        >
          <Box
            className="md:w-[50%] w-[100%]"
            sx={{
<<<<<<< HEAD
=======
              // width: "50%",
>>>>>>> origin/main
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
                flexWrap: "wrap",
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
              <Box>
                <TextField
                  className="md:w-[265px] w-[150px] md:text-[1rem] text-[0.7rem]"
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
                  className="md:w-[265px] w-[150px] md:text-[1rem] text-[0.7rem]"
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
                  style={{ margin: "auto", marginTop: "10px" }}
                  variant="contained"
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
              sx={{
                ...theme.container,
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: theme.gaps[3],
              }}
            >
              <Box
                sx={{
                  ...theme.container,
                  flexWrap: "wrap",
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
                as="a"
                href="https://blocksurvey.io/ion-inventonbtc-start-a-project-qa6auObvQaCkVgIyILXj.g?v=o"
                className="navbar-item"
                variant="contained"
                onClick={addEmailAndTwitterHandle}
                sx={{
                  ...theme.buttons.primary,
                  textTransform: "none",
                  background: theme.background.black,
                  ml: theme.gaps[3],
                }}
              >
<<<<<<< HEAD
                <a
                  href="https://blocksurvey.io/ion-inventonbtc-start-a-project-qa6auObvQaCkVgIyILXj.g?v=o"
                  style={{
                    textDecoration: "underline",

                    color: "#fff",
                  }}
                >
                  START A PROJECT
                </a>
=======
                START A PROJECT
>>>>>>> origin/main
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
