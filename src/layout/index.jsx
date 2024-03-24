import { Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Footer, Header } from "./../components";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("loggedIn");

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [isLoggedIn]);

  return (
    <Flex sx={{ flexDirection: "column", height: "100vh" }}>
      {isLoggedIn ? <Header /> : null}
      <Outlet />
      {isLoggedIn ? <Footer /> : null}
    </Flex>
  );
};

export default Layout;
