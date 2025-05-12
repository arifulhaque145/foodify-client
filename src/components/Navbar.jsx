import { signOut } from "firebase/auth";
import React from "react";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/foodify_icon.png";
import auth from "../firebase/firebase.init";
import { useAuth } from "../hooks/useAuth";
import ItemButton from "./shared/ItemButton";

const SideButton = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

function Navs() {
  const { state } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="md:flex md:items-center">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/cart">
          <FaShoppingCart className="text-2xl text-gray-700" />
          {!state.cartItems.length ? (
            ""
          ) : (
            <span className="badge badge-sm badge-accent absolute top-0 right-0">
              {state.cartItems.length}
            </span>
          )}
        </Link>
      </li>
      {state.user ? (
        <>
          <li>
            <Link to="/order">
              <FaUserCircle className="text-3xl hover:text-blue-600" />
            </Link>
          </li>
          <li>
            <ItemButton
              title="Logout"
              style="btn-secondary btn-outline"
              icon={<FiLogOut />}
              click={logout}
            />
          </li>
        </>
      ) : (
        <>
          <li className="md: mx-3">
            <Link
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
              to="/login"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
              to="/register"
            >
              Register
            </Link>
          </li>
        </>
      )}
    </div>
  );
}

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl text-red-500">
          <img src={logo} alt="Logo" className="w-20 h-auto" />
          <span className="text-2xl font-bold">FOODIFY</span>
        </Link>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 hidden md:flex lg:mr-4">
          <Navs />
        </ul>

        {/* Mobile dropdown */}
        <div className="dropdown dropdown-end md:hidden">
          <label tabI ndex={0} className="btn btn-ghost">
            <SideButton />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Navs />
          </ul>
        </div>
      </div>
    </div>
  );
}
