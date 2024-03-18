import { createBrowserRouter } from "react-router-dom";
import { Backers, Home, Login, Project, Satrtup } from "./../pages";
import { Box } from "@chakra-ui/react";

const styles = { container: { flex: 1 } };

export default createBrowserRouter([
  {
    path: "/",
    element: (
      <Box sx={styles.container}>
        <Home />
      </Box>
    ),
    caseSensitive: true,
  },
  {
    path: "/login",
    element: (
      <Box sx={styles.container}>
        <Login />
      </Box>
    ),
    caseSensitive: true,
  },
  {
    path: "/project/:id",
    element: (
      <Box sx={styles.container}>
        <Project />
      </Box>
    ),
    caseSensitive: true,
  },
  {
    path: "/startup",
    element: (
      <Box sx={styles.container}>
        <Satrtup />
      </Box>
    ),
    caseSensitive: true,
  },
  {
    path: "/backers",
    element: (
      <Box sx={styles.container}>
        <Backers />
      </Box>
    ),
    caseSensitive: true,
  },
]);
