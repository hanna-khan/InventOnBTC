import React, { useEffect, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import themeSettings from "./theme";
import Home from "./pages/home";
import ProjectDetail from "./pages/projectDetail";
import BackerSection from "./pages/BackerSection";
import StartupSection from "./pages/StartupSection";
import Category from "./pages/Category";
import BetaLoginPage from "./pages/BetaLoginPage";

import { useAuth } from "./context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  let location = useLocation();

  if (!user || !user.isAuthenticated) {
    return <Navigate to="/betaLogin" state={{ from: location }} replace />;
  }

  return children;
};

function App() {
  const theme = useMemo(() => createTheme(themeSettings));
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/project_detail"
          element={
            <ProtectedRoute>
              <ProjectDetail />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/backer"
          element={
            <ProtectedRoute>
              <BackerSection />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/startup"
          element={
            <ProtectedRoute>
              <StartupSection />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/category"
          element={
            <ProtectedRoute>
              <Category />
            </ProtectedRoute>
          }
        />
        <Route exact path="/betaLogin" element={<BetaLoginPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
