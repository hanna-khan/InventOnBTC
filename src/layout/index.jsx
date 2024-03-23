import { Flex } from "@chakra-ui/react";
import React from "react";
import { Footer, Header } from "./../components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Flex sx={{ flexDirection: "column", height: "100vh" }}>
      <Header />
      <Outlet />
      <Footer />
    </Flex>
  );
};

export default Layout;
