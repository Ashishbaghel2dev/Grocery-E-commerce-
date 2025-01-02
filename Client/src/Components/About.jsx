import React from 'react'

function About() {
  return (
    <main>
       

    <section className="about-poster">
        <div className="container text-white">
            <div className="row">
                <div className="col-lg-12 py-3">
                    <p>Home <i className="fa-solid fa-angles-right"></i> About </p>
                </div>
            </div>
        </div>  
        <div className="text-center py-5">
            <img src="/img/poster/about-poster (1).png" alt=""/>
            <div className="about-poster-data py-3">
                <h1>Quality Produce, Great Prices - All in One Place!</h1>
            </div>
        </div>
    </section>


    <section className="about-main">
        <div className="container-fluid blur ">
            <div className="row justify-content-center">
                <div className="col-lg-9 py-5 about rounded">
                    <section className="intro my-5">
                        <h4>Welcome to Grosfit</h4>

                        <div className="about-img">
                            <img src="./assets/img/about1.png" alt="" className="w-100"/>
                        </div>
                        <p>Welcome to <strong>Grosfit</strong>, your trusted neighborhood grocery store in the heart of Gurgaon. We are dedicated to providing you with fresh, high-quality groceries and an exceptional shopping experience. At Grosfit, we believe in making your grocery shopping as enjoyable and convenient as possible.</p>
                    </section>
                    
                    <section className="mission my-5">
                        <h4>Our Mission</h4>
                        <p>At Grosfit, our mission is simple: to offer the freshest produce, top-quality ingredients, and outstanding value. We understand the importance of quality and convenience in your daily life, and we’re committed to delivering both with every visit. Whether you’re looking htmlFor locally-sourced fruits and vegetables, organic options, or everyday staples, we’ve got you covered.</p>
                    </section>
                    
                    <section className="values my-5">
                        <h4>Our Values</h4>
                        <ul>
                            <li><strong>Freshness:</strong> We take pride in offering products that are fresh and of the highest quality. Our team works diligently to ensure that everything on our shelves meets our rigorous standards.</li>
                            <li><strong>Quality:</strong> From local farm produce to premium imported goods, we select our products with care to ensure you receive only the best.</li>
                            <li><strong>Customer Care:</strong> Our friendly and knowledgeable staff are here to help you find exactly what you need. We aim to provide a welcoming atmosphere and personalized service to make your shopping experience enjoyable.</li>
                            <li><strong>Community:</strong> As a locally-owned business, we are deeply committed to the Gurgaon community. We support local producers and engage in initiatives that benefit our neighbors.</li>
                        </ul>
                    </section>
                    
                    <section className="story my-5">
                        <h4>Our Story</h4>
                        <p><strong>Grosfit</strong> was founded in [Year] with the vision of creating a grocery store that goes beyond the basics. Our goal is to be more than just a place to shop—we want to be a part of your daily life. Over the years, we’ve grown with our community and adapted to meet your evolving needs, all while maintaining our commitment to freshness and quality.</p>
                    </section>
                    
                    <section className="what-sets-us-apart my-5">
                        <h4>What Sets Us Apart</h4>
                        <ul>
                            <li><strong>Locally-Sourced Produce:</strong> We work with local farmers and suppliers to bring you the freshest fruits, vegetables, and artisanal products.</li>
                            <li><strong>Specialty Items:</strong> Discover a wide range of gourmet foods, organic choices, and unique items that you won’t find anywhere else.</li>
                            <li><strong>Exceptional Service:</strong> Our dedicated team is here to ensure that your shopping experience is smooth and pleasant, every time you visit.</li>
                        </ul>
                    </section>
                    
                    <section className="contact my-5">
                        <h4>Connect with Us</h4>
                        <p>Thank you htmlFor choosing <strong>Grosfit</strong>. We’re excited to serve you and be a part of your everyday life. If you have any questions or need assistance, please feel free to contact us.</p>
                        <ul>
                            <li><strong>Address:</strong> 123 Main Street, Gurgaon</li>
                            <li><strong>Phone:</strong> (123) 456-7890</li>
                            <li><strong>Website:</strong> <a href="http://www.grosfit.com" target="_blank">www.grosfit.com</a></li>
                            <li><strong>Follow Us:</strong> [Social Media Icons/Handles]</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    </section>
</main>


  )
}

export default About