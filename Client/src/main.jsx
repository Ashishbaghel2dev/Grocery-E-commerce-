import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Components/Homepage/Home";
import About from "./Components/About";
import Page404 from "./Components/Page404";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import DashBoard from "./Components/Admin/DashBoard";
import Addtocart from "./Components/Addtocart";
import { Provider } from "react-redux";
import store from "./features/store.js";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Addtocart />} />
          <Route path="/admin/dashboard" element={<DashBoard />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </StrictMode>
);
