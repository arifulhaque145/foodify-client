import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Order from "../pages/Order";
import Register from "../pages/Register";

export const BASE_URL = import.meta.env.VITE_URL;

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: (
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-5xl font-thin">404 Not Found</h1>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "order",
        element: <Order />,
      },
    ],
  },
]);

export default router;
