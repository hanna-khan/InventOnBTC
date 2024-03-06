import React, { createContext, useContext, useReducer } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AuthContext = createContext();

const AUTH_DATA = "AUTH_DATA";

const initialState = {
  user: null,
};

function persistStore(state) {
  try {
    window.localStorage.setItem(
      AUTH_DATA,
      JSON.stringify({
        ...state,
      })
    );
  } catch (err) {
    console.log(err);
  }
}

function loadPersistedStore() {
  try {
    const state = window.localStorage.getItem(AUTH_DATA);

    if (state === null) {
      return initialState;
    }

    const newState = JSON.parse(state);
    return {
      ...initialState,
      ...newState,
    };
  } catch (err) {
    console.log(err);
  }

  return initialState;
}

const reducer = (state, action) => {
  let newState = { ...state };

  switch (action.type) {
    case "LOGIN":
      newState = {
        ...state,
        user: action.payload.user,
      };
      break;
    case "LOGOUT":
      newState = {
        ...state,
        user: null,
      };
      break;
    default:
      newState = { ...state };
  }

  persistStore(newState);

  return newState;
};
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, loadPersistedStore());
  const navigate = useNavigate();

  const login = (userData) => {
    dispatch({ type: "LOGIN", payload: { user: userData } });
  };

  const logout = () => {
    localStorage.clear();
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ ...state, dispatch, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
