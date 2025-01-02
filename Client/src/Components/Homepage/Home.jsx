import React from "react";
import Homeslider from "./HomeSlider";
import TopSlider from "./TopSlider";
import { Link } from "react-router-dom";
import { images } from "../../../data";
import Products from "./Products";
import SalePoster from "./SalePoster";
import { useSelector } from "react-redux";

function Home() {
  const user = useSelector((state) => state.auth.user); 
  return (
    <div className=" ubuntu-medium">
      <div>
      {user ? (
        <div>
          <h1>Welcome, {user.user.fullname}!</h1>
          <p>Email: {user.user.email}</p>
          <h1>Welcome, {user.user.phone}!</h1>
          <h1>Welcome, {user.token}!</h1>x``
          {/* Display other user data if available */}
        </div>
      ) : (
        <p>No user is logged in.</p>
      )}
    </div>
      <TopSlider />


    <Products/>
      <div className="container ubuntu-medium my-5">
        <div className="d-flex justify-content-between my-3">
          <h4> Grocery Items</h4>
          <Link to="#">See All</Link>
        </div>
        <Homeslider images={images} />
      </div>
      <div className="container ubuntu-medium my-5">
        <div className="d-flex justify-content-between my-3">
          <h4> Grocery Items</h4>
          <Link to="#">See All</Link>
        </div>
        <Homeslider images={images} />
      </div>
      <div className="container ubuntu-medium my-5">
        <div className="d-flex justify-content-between my-3">
          <h4> Grocery Items</h4>
          <Link to="#">See All</Link>
        </div>
        <Homeslider images={images} />
      </div>

      <SalePoster/>
    </div>
  );
}

export default Home;
