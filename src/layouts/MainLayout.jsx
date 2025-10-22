import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

export default function MainLayout() {
  return (
    <div className="max-w-full mx-auto">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <div className="relative bg-white z-50">
        <Footer />
      </div>
    </div>
  );
}
