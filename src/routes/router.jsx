import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import Cart from "../pages/Cart";
import AdminDashboard from "../pages/Dashboard/AdminDashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import MenuDetails from "../pages/MenuDetails";
import Order from "../pages/Order";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";

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
        path: "menu",
        element: (
          <PrivateRouter>
            <Menu />
          </PrivateRouter>
        ),
      },
      {
        path: "menu-details/:id",
        element: <MenuDetails />,
      },
      {
        path: "cart",
        element: (
          <PrivateRouter>
            <Cart />
          </PrivateRouter>
        ),
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
        element: (
          <PrivateRouter>
            <Order />
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: (
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-5xl font-thin">404 Not Found</h1>
      </div>
    ),
    children: [
      {
        path: "admin",
        element: <AdminDashboard />,
      },
    ],
  },
]);

export default router;
