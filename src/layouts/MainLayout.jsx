import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />
      <div className="mt-20 px-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
