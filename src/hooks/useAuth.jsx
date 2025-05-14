import { useContext } from "react";
import { AuthContext } from "../providers/ActionTypes";

export default function useAuth() {
  return useContext(AuthContext);
}
