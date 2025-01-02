import React from "react";
import { NavLink ,Link } from "react-router-dom";

function Header() {
  return (
  <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary p-1  ubuntu-medium">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <h1 className="text-g2">Grosfit</h1>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item mx-2">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                  
                    <li className="nav-item mx-2 dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Product
                        </Link>
                        <ul className="dropdown-menu">
                            <div className="drop-down-box d-flex">
                                <ul className="m-0 p-0">
                                    <li><Link className="dropdown-item" to="/"><i className="fa-solid fa-caret-right"></i> Fruits</Link></li>
                                    <li><Link className="dropdown-item" to="/"><i className="fa-solid fa-caret-right"></i> Vegetables</Link></li>
                                    <li><Link className="dropdown-item" to="/"><i className="fa-solid fa-caret-right"></i> Dairy Products</Link></li>
                                    <li><Link className="dropdown-item" to="/"><i className="fa-solid fa-caret-right"></i> Bakery</Link></li>
                                    <li><Link className="dropdown-item" to="/"><i className="fa-solid fa-caret-right"></i> Beverages</Link></li>
                                </ul>
                                <ul className="m-0 p-0">
                                    <li><Link className="dropdown-item" to="/"><i className="fa-solid fa-caret-right"></i> Snacks</Link></li>
                                    <li><Link className="dropdown-item" to="/"><i className="fa-solid fa-caret-right"></i> Frozen Foods</Link></li>
                                    <li><Link className="dropdown-item" to="/"><i className="fa-solid fa-caret-right"></i> Canned Goods</Link></li>
                                    <li><Link className="dropdown-item" to="/"><i className="fa-solid fa-caret-right"></i> Household Items</Link></li>
                                    <li><Link className="dropdown-item" to="/"><i className="fa-solid fa-caret-right"></i> Personal Care</Link></li>
                                </ul>
                            </div>
                        </ul>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-link" aria-disabled="true" to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-link" aria-disabled="true" to="/contact">Contact</Link>
                    </li>
                </ul>


                <div className="ms-auto login">

                    <Link to="/login"> <button><i className="fa-solid fa-user"></i> Login</button></Link>
                    <Link to="./add-to-card-page.html"><button><i className="fa-solid fa-cart-shopping"></i> Cart</button></Link>
         
                </div>
            </div>
        </div>
    </nav>
  
  
  </>
  );
}

export default Header;
