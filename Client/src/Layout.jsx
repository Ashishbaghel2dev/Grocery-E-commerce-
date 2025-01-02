import React from "react";
import Header from "./Components/Layout/Header.jsx";
import Footer from "./Components/Layout/Footer.jsx";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
