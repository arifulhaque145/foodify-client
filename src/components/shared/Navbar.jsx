import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/foodify_icon.png";
import auth from "../../firebase/firebase.init";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import ItemButton from "./ItemButton";
import ItemButtonLink from "./ItemButtonLink";
// import ThemeController from "./ThemeController";

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

const Authenticated = ({ logout, scrolled }) => (
  <>
    <li className="">
      <Link to="/dashboard/admin">
        <FaUserCircle
          className={`text-red-400 hover:text-red-600 ${
            scrolled ? "text-3xl" : "text-xl"
          } transition-all duration-300`}
        />
      </Link>
    </li>
    <li>
      <ItemButton
        title="Logout"
        style={`btn btn-error text-white transition-all duration-300 ${
          scrolled ? "w-32" : "w-20"
        }`}
        icon={<FiLogOut />}
        click={logout}
      />
    </li>
  </>
);

const Guest = ({ scrolled }) => (
  <>
    <li className="md:mx-3">
      <ItemButtonLink
        title="Login"
        link="/login"
        outline={`btn-error btn-outline transition-all duration-300 ${
          scrolled ? "w-32" : "w-20"
        }`}
      />
    </li>
    <li>
      <ItemButtonLink
        title="Register"
        link="/register"
        outline={`btn-error text-white transition-all duration-300 ${
          scrolled ? "w-32" : "w-20"
        }`}
      />
    </li>
  </>
);

function Navs({ handleLogout, data = {}, scrolled }) {
  const navStyle = `text-md hover:text-red-600 transition-all duration-300`;

  return (
    <div className="md:flex md:items-center md:gap-4">
      <li className={navStyle}>
        <Link to="/">Home</Link>
      </li>
      <li className={navStyle}>
        <Link to="/menu">Menu</Link>
      </li>
      <li className="relative">
        <Link to="/cart">
          <FaShoppingCart
            className={`text-red-400 hover:text-red-600 ${
              scrolled ? "text-2xl" : "text-xl"
            } transition-all duration-300`}
          />
          {data?.itemLength > 0 && (
            <span className="badge badge-sm badge-accent absolute -top-2 -right-2 rounded-full w-6 h-6 flex items-center justify-center text-white font-extrabold">
              {data.itemLength}
            </span>
          )}
        </Link>
      </li>
      {data?.user ? (
        <Authenticated logout={handleLogout} scrolled={scrolled} />
      ) : (
        <Guest scrolled={scrolled} />
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { state } = useAuth();
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 navbar transition-all duration-500 bg-base-100 text-red-400 shadow-md px-4`}
    >
      <div className="flex-1">
        <Link to="/" className="flex items-center gap-2 text-xl">
          <img
            src={logo}
            alt="Logo"
            className={`${
              scrolled ? "w-12" : "w-8"
            } h-auto  transition-all duration-300`}
          />
          <span className={`text-md font-medium  transition-all duration-300`}>
            FOODIFY
          </span>
        </Link>
      </div>

      <div className="flex-none">
        {/* Desktop menu */}
        <ul className="menu menu-horizontal px-1 hidden md:flex">
          <Navs
            handleLogout={handleLogout}
            data={{ itemLength: cartItems?.data?.length, user: state?.user }}
            scrolled={scrolled}
          />
          {/* <ThemeController /> */}
        </ul>

        {/* Mobile dropdown */}
        <div className="dropdown dropdown-end md:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <SideButton />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Navs
              handleLogout={handleLogout}
              data={{ itemLength: cartItems?.data?.length, user: state?.user }}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
