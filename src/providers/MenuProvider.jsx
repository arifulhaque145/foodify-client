import { useReducer } from "react";
import { menuActionTypes, MenuContext } from "./ActionTypes";

const initialState = {
  allItems: [],
  search: "",
  category: "",
  sortOrder: "",
  currentPage: 1,
  itemsPerPage: Infinity,
};

function menuReducer(state, action) {
  switch (action.type) {
    case menuActionTypes.SET_ITEMS:
      return { ...state, allItems: action.payload };
    case menuActionTypes.SET_SEARCH:
      return { ...state, search: action.payload, currentPage: 1 };
    case menuActionTypes.SET_CATEGORY:
      return { ...state, category: action.payload, currentPage: 1 };
    case menuActionTypes.SET_SORT:
      return { ...state, sortOrder: action.payload, currentPage: 1 };
    case menuActionTypes.SET_PAGE:
      return { ...state, currentPage: action.payload };
    case menuActionTypes.SET_PAGE_ITEMS:
      return { ...state, itemsPerPage: action.payload };
    default:
      return state;
  }
}

export default function MenuProvider({ children }) {
  const [state, dispatch] = useReducer(menuReducer, initialState);

  return (
    <MenuContext.Provider value={{ state, dispatch }}>
      {children}
    </MenuContext.Provider>
  );
}
