import { Flex } from "@chakra-ui/react";
import React from "react";
import { Footer, Header } from "./../components";
import { RouterProvider } from "react-router-dom";
import router from "../router";

const Layout = () => {
  return (
    <Flex sx={{ flexDirection: "column", height: "100vh" }}>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </Flex>
  );
};

export default Layout;
