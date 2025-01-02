import React from 'react'

function Addtocart() {
  return (
    <main>

    <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 py-3">
                    <p>Home <i className="fa-solid fa-angles-right"></i> Add To Card</p>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div className="container py-2">
            <div className="row">
                <div className="col-lg-8  rounded">
                    <div className="product-catalog">
            
                        <div className="card-product-box">
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <img src="/img/product-img/carrot.jpg" alt="Carrots" className="w-100"/>
                                </div>
                                <div className="col-lg-8">
                                    <section className="container">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h2>Carrots</h2>
                                                <p className="lead"> 250 g</p>
                                                <div className="d-flex align-items-center">
                                                    <h3 className="mr-3">₹50</h3>
                                                    <p className="text-muted text-decoration-line-through">₹60</p>
                                                    <p className="ml-2 text-success">17% OFF</p>
                                                </div>
                                                <p>(Inclusive of all taxes)</p>
                                            </div>
                                            <div className="addtokart">
                                                <div className="qty">
                                                    <button id="decrement1">-</button>
                                                    <p id="quantity1">0</p>
                                                    <button id="increment1">+</button>
                                                </div>
                                                <button className="btn-addtocard">Add to Cart</button>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        
                       
                        <div className="card-product-box">
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <img src="/img/product-img/tamato.jpeg" alt="Tomatoes" className="w-100"/>
                                </div>
                                <div className="col-lg-8">
                                    <section className="container">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h2>Tomatoes</h2>
                                                <p className="lead">500 g</p>
                                                <div className="d-flex align-items-center">
                                                    <h3 className="mr-3">₹40</h3>
                                                    <p className="text-muted text-decoration-line-through">₹50</p>
                                                    <p className="ml-2 text-success">20% OFF</p>
                                                </div>
                                                <p>(Inclusive of all taxes)</p>
                                            </div>
                                            <div className="addtokart">
                                                <div className="qty">
                                                    <button id="decrement2">-</button>
                                                    <p id="quantity2">0</p>
                                                    <button id="increment2">+</button>
                                                </div>
                                                <button className="btn-addtocard">Add to Cart</button>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        
                  
                        <div className="card-product-box">
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <img src="/img/product-img/oniun.jpeg" alt="Spinach" className="w-100"/>
                                </div>
                                <div className="col-lg-8">
                                    <section className="container">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h2>Onion</h2>
                                                <p className="lead"> 200 g</p>
                                                <div className="d-flex align-items-center">
                                                    <h3 className="mr-3">₹35</h3>
                                                    <p className="text-muted text-decoration-line-through">₹45</p>
                                                    <p className="ml-2 text-success">22% OFF</p>
                                                </div>
                                                <p>(Inclusive of all taxes)</p>
                                            </div>
                                            <div className="addtokart">
                                                <div className="qty">
                                                    <button id="decrement3">-</button>
                                                    <p id="quantity3">0</p>
                                                    <button id="increment3">+</button>
                                                </div>
                                                <button className="btn-addtocard">Add to Cart</button>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        
                  
                        <div className="card-product-box">
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <img src="/img/product-img/patato.jpeg" alt="Bell Peppers" className="w-100"/>
                                </div>
                                <div className="col-lg-8">
                                    <section className="container">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h2>Patato</h2>
                                                <p className="lead">1 kg</p>
                                                <div className="d-flex align-items-center">
                                                    <h3 className="mr-3">₹80</h3>
                                                    <p className="text-muted text-decoration-line-through">₹100</p>
                                                    <p className="ml-2 text-success">20% OFF</p>
                                                </div>
                                                <p>(Inclusive of all taxes)</p>
                                            </div>
                                            <div className="addtokart">
                                                <div className="qty">
                                                    <button id="decrement4">-</button>
                                                    <p id="quantity4">0</p>
                                                    <button id="increment4">+</button>
                                                </div>
                                                <button className="btn-addtocard">Add to Cart</button>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        
                    
                        <div className="card-product-box">
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <img src="/img/product-img/cucum.jpeg" alt="Cucumbers" className="w-100"/>
                                </div>
                                <div className="col-lg-8">
                                    <section className="container">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h2>Cucumbers</h2>
                                                <p className="lead">1 kg</p>
                                                <div className="d-flex align-items-center">
                                                    <h3 className="mr-3">₹60</h3>
                                                    <p className="text-muted text-decoration-line-through">₹80</p>
                                                    <p className="ml-2 text-success">25% OFF</p>
                                                </div>
                                                <p>(Inclusive of all taxes)</p>
                                            </div>
                                            <div className="addtokart">
                                                <div className="qty">
                                                    <button id="decrement5">-</button>
                                                    <p id="quantity5">0</p>
                                                    <button id="increment5">+</button>
                                                </div>
                                                <button className="btn-addtocard">Add to Cart</button>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-4">
                    <div className="sub-total">
                        <div className="container">
                            <div className="card border">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Order Summary</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-6">
                                            <p className="lead mb-1">Price (2 items)</p>
                                            <h4 className="mb-3">₹19,198</h4>
                                        </div>
                                        <div className="col-6 text-right">
                                            <p className="lead mb-1">Discount</p>
                                            <h4 className="text-danger">− ₹8,550</h4>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-12">
                                            <p className="lead mb-1">Delivery Charges</p>
                                            <h4 className="text-success">Free</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer bg-light text-right">
                                    <h4 className="mb-2">Total Amount</h4>
                                    <h3 className="text-success">₹10,648</h3>
                                    <p className="mb-0">You will save <span className="text-danger">₹8,550</span> on this order</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>

</main>

  )
}

export default Addtocart