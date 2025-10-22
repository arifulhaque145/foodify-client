import { useContext } from "react";
import { MenuContext } from "../providers/ActionTypes";

export function useMenuContext() {
  return useContext(MenuContext);
}
