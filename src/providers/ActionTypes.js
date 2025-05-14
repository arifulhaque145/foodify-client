import { createContext } from "react";

export const AuthContext = createContext();

export const actionTypes = {
  login: "LOGIN",
  logout: "LOGOUT",
};
