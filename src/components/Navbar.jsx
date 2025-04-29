import { Link } from "react-router-dom";

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

const Navs = ({ user, logout }) => (
  <>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/menu">Menu</Link>
    </li>
    <li>
      <Link to="/cart">Cart</Link>
    </li>
    {user ? (
      <>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <button onClick={logout}>Logout</button>
        </li>
      </>
    ) : (
      <li>
        <Link to="/login">Login</Link>
      </li>
    )}
  </>
);

export default function Navbar() {
  const user = "hal";
  const logout = () => console.log("Hello");

  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl text-red-500">
          FOODIFY
        </Link>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 hidden md:flex">
          <Navs params={{ user, logout }} />
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
            <Navs params={{ user, logout }} />
          </ul>
        </div>
      </div>
    </div>
  );
}
