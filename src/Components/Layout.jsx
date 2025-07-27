import React from "react";
import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar"; // Uncomment if using Navbar
// import Footer from "./Footer"; // Uncomment if using Footer

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-black">
      {/* <Navbar /> */}
      <main className="max-w-screen-xl mx-auto px-4 py-6">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
