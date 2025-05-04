import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useReducer } from "react";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext();

const initialState = {
  user: null,
  loading: true,
  cartItems: [],
  orderItems: [],
};

export const actionTypes = {
  login: "LOGIN",
  register: "REGISTER",
  logout: "LOGOUT",
  loading: "SET_LOADING",
  addToCart: "ADD_TO_CART",
  removeFromCart: "REMOVE_FROM_CART",
  clearCart: "CLEAR_CART",
  updateQuantiy: "UPDATE_QUANTITY",
  placeOrder: "PLACE_ORDER",
  updateOrderStatus: "UPDATE_ORDER_STATUS",
  cancelOrder: "CANCEL_ORDER",
};

function authReducer(state, action) {
  switch (action.type) {
    case actionTypes.login:
      return { ...state, user: action.payload, loading: false };
    case actionTypes.register:
      return { ...state, user: action.payload, loading: false };
    case actionTypes.logout:
      return { ...state, user: null, loading: false };
    case actionTypes.loading:
      return { ...state, loading: true };
    case actionTypes.addToCart: {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    }
    case actionTypes.removeFromCart: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    }
    case actionTypes.clearCart: {
      return {
        ...state,
        cartItems: [],
      };
    }
    case actionTypes.updateQuantiy: {
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    }
    case actionTypes.placeOrder: {
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    }
    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const actionUser = (email) => {
    dispatch({ type: actionTypes.login, payload: email });
  };

  const actionAddToCart = (product) => {
    dispatch({ type: actionTypes.addToCart, payload: product });
  };

  const actionRemoveFromCart = (id) => {
    dispatch({ type: actionTypes.removeFromCart, payload: id });
  };

  const actionClearCart = () => {
    dispatch({ type: actionTypes.clearCart });
  };

  const actionUpdateQuantity = (id, quantity) => {
    dispatch({ type: actionTypes.updateQuantiy, payload: { id, quantity } });
  };

  const actionPlaceOrder = (order) => {
    dispatch({ type: actionTypes.placeOrder, payload: order });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: "LOGIN", payload: user.email });
      } else {
        dispatch({ type: "LOGOUT" });
      }
    });

    return () => unsubscribe();
  }, []);

  const actions = {
    actionUser,
    actionAddToCart,
    actionRemoveFromCart,
    actionClearCart,
    actionUpdateQuantity,
    actionPlaceOrder,
  };

  return (
    <AuthContext.Provider value={{ state, ...actions }}>
      {children}
    </AuthContext.Provider>
  );
}
