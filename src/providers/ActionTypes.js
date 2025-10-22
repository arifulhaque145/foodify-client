import { createContext } from "react";

export const AuthContext = createContext();
export const MenuContext = createContext();

export const actionTypes = {
  login: "LOGIN",
  logout: "LOGOUT",
  loading: "LOADING",
  googleLoading: "GOOGLE_LOADING",
};

export const menuActionTypes = {
  SET_ITEMS: "SET_ITEMS",
  SET_SEARCH: "SET_SEARCH",
  SET_CATEGORY: "SET_CATEGORY",
  SET_SORT: "SET_SORT",
  SET_PAGE: "SET_PAGE",
  SET_PAGE_ITEMS: "SET_PAGE_ITEMS",
};
