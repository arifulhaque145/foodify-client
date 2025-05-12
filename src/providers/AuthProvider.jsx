import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useReducer } from "react";
import auth from "../firebase/firebase.init";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext();

const initialState = {
  user: null,
  loading: true,
  cartItems: [],
  orderItems: [],
};

export const actionTypes = {
  login: "LOGIN",
  logout: "LOGOUT",
  loading: "SET_LOADING",
  loadCart: "LOAD_CART",
  loadOrders: "LOAD_ORDERS",
  updateOrderStatus: "UPDATE_ORDER_STATUS",
  cancelOrder: "CANCEL_ORDER",
};

function authReducer(state, action) {
  switch (action.type) {
    case actionTypes.login:
      return { ...state, user: action.payload, loading: false };
    case actionTypes.logout:
      return {
        ...state,
        user: null,
        loading: false,
      };
    case actionTypes.loading:
      return { ...state, loading: true };
    case actionTypes.loadCart:
      return { ...state, cartItems: [...action.payload] };
    case actionTypes.loadOrders:
      return { ...state, orderItems: [...action.payload] };
    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const axiosPublic = useAxiosPublic();

  const fetchCart = async () => {
    const res = await axiosPublic.get(`/cart-items?user=${state.user}`);
    dispatch({ type: actionTypes.loadCart, payload: res.data });
  };

  const fetchOrder = async () => {
    const res = await axiosPublic.get(`/order-items?user=${state.user}`);
    dispatch({ type: actionTypes.loadOrders, payload: res.data });
  };

  const actionUser = (email) => {
    dispatch({ type: actionTypes.login, payload: email });
  };

  const actionAddToCart = async (product) => {
    const res = await axiosPublic.get(`/cart-items?user=${product.user}`);
    const cart = res.data;

    const existingItem = cart.find((cartItem) => cartItem._id === product._id);

    if (existingItem) {
      await axiosPublic.patch(`/cart-items`, {
        id: product._id,
        quantity: existingItem.quantity + 1,
        user: state.user,
      });
    } else {
      await axiosPublic.post("/cart-items", {
        ...product,
        user: state.user,
        quantity: 1,
      });
    }
  };

  const actionRemoveFromCart = async (id) => {
    await axiosPublic.delete(`/cart-items/${id}`);
  };

  const actionClearCart = async (id) => {
    await axiosPublic.delete(`/cart-items-all/${id}`);
  };

  const actionUpdateQuantity = async (itemId, itemQuantity) => {
    await axiosPublic.patch(`/cart-items`, {
      id: itemId,
      quantity: itemQuantity,
      user: state.user,
    });
  };

  const actionPlaceOrder = async (order) => {
    await axiosPublic.post(`/order-items/`, { ...order });
  };

  useEffect(() => {
    if (state.user) {
      fetchCart();
      fetchOrder();
    }
  }, [state]);

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
