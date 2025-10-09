import { signOut } from "firebase/auth";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/foodify_icon.png";
import auth from "../../firebase/firebase.init";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import ItemButton from "./ItemButton";
import ItemButtonLink from "./ItemButtonLink";
import ThemeController from "./ThemeController";

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

const Authenticated = ({ logout }) => (
  <>
    <li className="hover:bg-red-100 hover:rounded">
      <Link to="/dashboard/admin">
        <FaUserCircle className="text-3xl text-red-400 hover:text-red-600" />
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
);

const Guest = () => (
  <>
    <li className="md:mx-3">
      <ItemButtonLink
        title="Login"
        link="/login"
        outline="btn-error btn-outline"
      />
    </li>
    <li>
      <ItemButtonLink
        title="Register"
        link="/register"
        outline="btn-error btn-error text-white"
      />
    </li>
  </>
);

function Navs({ handleLogout, data = {} }) {
  const navStyle =
    "hover:bg-red-100 hover:rounded text-red-500 hover:text-red-600";

  return (
    <div className="md:flex md:items-center md:gap-4">
      <li className={navStyle}>
        <Link to="/">Home</Link>
      </li>
      <li className={navStyle}>
        <Link to="/menu">Menu</Link>
      </li>
      <li className="relative hover:bg-red-100 hover:rounded">
        <Link to="/cart">
          <FaShoppingCart className="text-2xl text-red-400 hover:text-red-600" />
          {data?.itemLength > 0 && (
            <span className="badge badge-sm badge-accent absolute -top-2 -right-2">
              {data.itemLength}
            </span>
          )}
        </Link>
      </li>
      {data?.user ? <Authenticated logout={handleLogout} /> : <Guest />}
    </div>
  );
}

export default function Navbar() {
  const { state } = useAuth();
  const navigate = useNavigate();
  const { cartItems } = useCart();

  console.log(state);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl text-red-500">
          <img src={logo} alt="Logo" className="w-20 h-auto" />
          <span className="text-2xl font-bold">FOODIFY</span>
        </Link>
      </div>

      <div className="flex-none">
        {/* Desktop menu */}
        <ul className="menu menu-horizontal px-1 hidden md:flex lg:mr-4">
          <Navs
            handleLogout={handleLogout}
            data={{ itemLength: cartItems?.data?.length, user: state?.user }}
          />
          <ThemeController />
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
