import React from 'react'

function Contact() {
  return (
    <main>

   
    <section className="contact-container"  style={{
    backgroundImage: "url('/img/contact 2.jpg')",
  }}>
        <div className="container-fluid bg-color">
            <div className="container text-white">
                <div className="row">
                    <div className="col-lg-12 py-3">
                        <p>Home <i className="fa-solid fa-angles-right"></i> Contact </p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center align-items-center">
              
                <div className="col-lg-6 text-white p-5">

                    <h1>We’d Love ❤️ to Hear from You: Connect with Us!</h1>
                </div>
                <div className="col-lg-6">
                    <div className="request-form">
                        <h2 className="my-3">Contact Us </h2>
                        <form className="row g-3 needs-validation" novalidate>
                            <div className="col-md-12">
                                <label for="validationCustom01" className="form-label">Full Name</label>
                                <input type="text" class="form-control" id="validationCustom01"
                                    placeHolder="Enter the Name" required/>

                            </div>
                            <div className="col-md-12">
                                <label for="validationCustom02" className="form-label">Number</label>
                                <input type="number" class="form-control" id="validationCustom02"
                                    placeHolder="Enter the Number" required/>
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-12">
                                <label for="validationCustom02" className="form-label">Email</label>
                                <input type="text" class="form-control" id="validationCustom02"
                                    placeHolder="Enter the Gmail" required/>
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                          
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="mb-3">
                                <button className="submit-btn">Submit</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="container my-5">
        <h2 className="text-center mb-4">Why Choose Grosfit?</h2>
        <div className="row">
            <div className="col-md-4 mb-4">
                <div className="card">
                    <div className="card-body">
                        <img src="/img/icon/icons8-fresh-96.png" alt=""/>
                        <h5 className="card-title">Unmatched Freshness</h5>
                        <p className="card-text">We take pride in sourcing locally-grown produce and premium ingredients, guaranteeing that everything on our shelves is fresh and of the highest quality.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className="card ">
                    <div className="card-body">
                        <img src="/img/icon/icons8-good-quality-96.png" alt=""/>
                        <h5 className="card-title">Quality You Can Trust</h5>
                        <p class="card-text">From everyday staples to specialty items, our careful selection process ensures that every product meets our rigorous standards, offering you the best value and quality.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className="card">
                    <div className="card-body">
                        <img src="/img/icon/icons8-customer-care-53.png" alt=""/>
                        <h5 className="card-title">Exceptional Customer Care</h5>
                        <p className="card-text">Our friendly, knowledgeable staff are dedicated to providing personalized service and a welcoming shopping environment, making each visit enjoyable and hassle-free.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 mb-4">
                <div className="card ">
                    <div className="card-body">
                        <img src="/img/icon/icons8-community-96.png" alt=""/>
                        <h5 className="card-title">Community Commitment</h5>
                        <p className="card-text">As a locally-owned store, we actively support local farmers and producers, and engage in initiatives that benefit the Gurgaon community, strengthening our connection with our neighbors.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className="card">
                    <div className="card-body">
                        <img src="/img/icon/icons8-organic-100.png" alt=""/>
                        <h5 className="card-title">Specialty and Organic Choices</h5>
                        <p class="card-text">Whether you're looking htmlFor gourmet foods, organic products, or unique items, we offer a diverse range of options that cater to your specific tastes and preferences.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>


  </main>

  )
}

export default Contact