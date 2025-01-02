import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    
    <footer className=' ubuntu-medium'>
        <div className="container">
            <h3 className="text-white my-2">Popular Grocery Categories</h3>
            <div className="row">
                <div className="col-lg-12">
                    <button className="category-button">Fruits</button>
                    <button className="category-button">Vegetables</button>
                    <button className="category-button">Dairy</button>
                    <button className="category-button">Meat</button>
                    <button className="category-button">Bakery</button>
                    <button className="category-button">Frozen Foods</button>
                    <button className="category-button">Snacks</button>
                    <button className="category-button">Beverages</button>
                    <button className="category-button">Household</button>
                    <button className="category-button">Personal Care</button>
                    <button className="category-button">Pantry Staples</button>
                    <button className="category-button">Organic Products</button>
                    <button className="category-button">International Foods</button>
                    <button className="category-button">Health Foods</button>
                </div>
            </div>
            <hr className="text-white"/>
            <div className="container footer-list">
                <div className="row justify-content-center">
                    <div className="col-lg-3">
                        <h6>Customer Service</h6>
                        <ul>
                            <li><Link to="./contact.html"><i className="fa-solid fa-caret-right"></i> Contact Us</Link></li>
                            <li><Link to="./faq.html"><i className="fa-solid fa-caret-right"></i> FAQs</Link></li>
                            <li><Link to="#"><i className="fa-solid fa-caret-right"></i> Return Policy</Link></li>
                            <li><Link to="./product-history.html"><i className="fa-solid fa-caret-right"></i> Shipping Information</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h6>Contact</h6>
                        <ul>
                            <li><Link to="./blog.html"><i className="fa-solid fa-caret-right"></i>Blogs</Link></li>
                            <li><Link to="./contact.html"><i className="fa-solid fa-caret-right"></i>Contact</Link></li>
                            <li><Link to="./add-to-card-page.html"><i className="fa-solid fa-caret-right"></i>Shopping Cart</Link></li>
                          
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h6>Our Store</h6>
                        <ul>
                            <li><Link to="about.html"><i className="fa-solid fa-caret-right"></i> About Us</Link></li>
                            <li><Link to="./faq.html"><i className="fa-solid fa-caret-right"></i> News & Updates</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h6>Connect With Us</h6>
                        <form>
                            <div>
                                <input type="email" className="form-control" placeholder="Enter your email" required />
                             
                                    <button className="cbtn2 my-3" type="submit">Subscribe</button>
                    
                            </div>
                        </form>
                        <div className="col-lg-12 my-3 social-icons">
                            <h6>Follow Us</h6>
                            <ul className="list-inline">
                                <li className="list-inline-item"><Link to="#" target="_blank"><i
                                            className="fab fa-facebook-f"></i></Link></li>
                                <li className="list-inline-item"><Link to="#" target="_blank"><i
                                            className="fab fa-twitter"></i></Link></li>
                                <li className="list-inline-item"><Link to="#" target="_blank"><i
                                            className="fab fa-linkedin-in"></i></Link></li>
                                <li className="list-inline-item"><Link to="#" target="_blank"><i
                                            className="fab fa-instagram"></i></Link></li>
                                <li className="list-inline-item"><Link to="#" target="_blank"><i
                                            className="fab fa-youtube"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row mt-3">
            <div className="container text-center text-white" >
                <div className="row">
                    <div className="col-lg-6">
                        <p>Copyrights 2024-25. All Rights Reserved for Grocery.</p>
                    </div>
                    <div className="col-lg-6">
                        <p><Link to="#" className="text-white" >Privacy</Link> | <Link to="#" className="text-white">Terms &
                                Conditions</Link> | </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer