import React from 'react'
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <main>
    <section className="blog-poster mb-5">
        <div className="container text-white">
            <div className="row">
                <div className="col-lg-12 py-3">
                    <p>Home <i className="fa-solid fa-angles-right"></i> Blog </p>
                </div>
            </div>
        </div>  
        <div className="text-center">
            <div className="about-poster-data py-3">
                <h1 className="text-white">Blog</h1>
                <h4 className="text-white">Explore Our best Blogs</h4>
            </div>
            <img src="/img/blog-removebg.png" alt=""/>
           
        </div>
    </section>
    <section className="blog-container">
        <div className="container">
            <div className="row">
           
                <div className="col-lg-4">
                    <div className="article-box">
                        <div className="article-img">
                            <img src="/img/fruits.jpg" alt="Smart Grocery Solutions"/>
                        </div>
                        <h4>Revolutionizing Grocery Shopping with E-Commerce</h4>
                        <p>"The rise of e-commerce has significantly transhtmlFormed the grocery shopping experience. Online platforms have made it easier for customers to access their favorite products from the comfort of their homes." - Emily Carter, E-Commerce Specialist</p>
                        <Link href="#">Read More</Link>
                        <div className="button-box2">
                            <p><i className="fa-solid fa-calendar-days"></i> 01,08,2024</p>
                            <p><i className="fa-solid fa-user-tie"></i> by Emily Carter</p>
                        </div>
                    </div>
                </div>
    
   
                <div className="col-lg-4">
                    <div className="article-box">
                        <div className="article-img">
                            <img src="/img/supply.jpeg" alt="Inventory Management"/>
                        </div>
                        <h4>How Smart Inventory Management Enhances Efficiency</h4>
                        <p>"Implementing advanced inventory management systems has streamlined grocery store operations, reducing waste and improving stock accuracy. This technology is crucial htmlFor modern supply chains." - John Doe, Inventory Manager</p>
                        <Link href="#">Read More</Link>
                        <div className="button-box2">
                            <p><i className="fa-solid fa-calendar-days"></i> 10,07,2024</p>
                            <p><i className="fa-solid fa-user-tie"></i> by John Doe</p>
                        </div>
                    </div>
                </div>
    

                <div className="col-lg-4">
                    <div className="article-box">
                        <div className="article-img">
                            <img src="/img/1-removebg-preview.png" alt="Customer Experience"/>
                        </div>
                        <h4>Enhancing Customer Experience in Grocery Stores</h4>
                        <p>"Creating a seamless and engaging customer experience is key in today’s competitive grocery market. Strategies include personalized recommendations and improved in-store service." - Lisa Brown, Customer Experience Expert</p>
                        <Link href="#">Read More</Link>
                        <div className="button-box2">
                            <p><i className="fa-solid fa-calendar-days"></i> 22,06,2024</p>
                            <p><i className="fa-solid fa-user-tie"></i> by Lisa Brown</p>
                        </div>
                    </div>
                </div>
    
        
                <div className="col-lg-4">
                    <div className="article-box">
                        <div className="article-img">
                        <img src="/img/1-removebg-preview.png" alt="Customer Experience"/>
                        </div>
                        <h4>Optimizing Grocery Supply Chains</h4>
                        <p>"Efficient supply chain management is essential htmlFor maintaining inventory levels and ensuring product availability. Innovations in logistics and data analysis are transforming the industry." - Michael Smith, Supply Chain Analyst</p>
                        <Link href="#">Read More</Link>
                        <div className="button-box2">
                            <p><i className="fa-solid fa-calendar-days"></i> 15,05,2024</p>
                            <p><i className="fa-solid fa-user-tie"></i> by Michael Smith</p>
                        </div>
                    </div>
                </div>
    
         
                <div className="col-lg-4">
                    <div className="article-box">
                        <div className="article-img">
                            <img src="/img/2.png" alt="Trends in Grocery Retail"/>
                        </div>
                        <h4>Current Trends in the Grocery Retail Sector</h4>
                        <p>"Staying updated with the latest trends such as sustainability and digital transhtmlFormation is vital for grocery retailers to stay competitive and meet customer expectations." - Jane Doe, Retail Analyst</p>
                        <Link href="#">Read More</Link>
                        <div className="button-box2">
                            <p><i className="fa-solid fa-calendar-days"></i> 29,04,2024</p>
                            <p><i className="fa-solid fa-user-tie"></i> by Jane Doe</p>
                        </div>
                    </div>
                </div>
    
  
                <div className="col-lg-4">
                    <div className="article-box">
                        <div className="article-img">
                            <img src="/img/manage.jpeg" alt="Digital Payment Systems"/>
                        </div>
                        <h4>The Rise of Digital Payment Systems in Grocery Stores</h4>
                        <p>"Digital payment systems are revolutionizing the checkout process, making transactions faster and more secure. The shift towards cashless payments is becoming more prevalent in grocery retail." - Robert Green, Payments Specialist</p>
                        <Link href="#">Read More</Link>
                        <div className="button-box2">
                            <p><i className="fa-solid fa-calendar-days"></i> 05,03,2024</p>
                            <p><i className="fa-solid fa-user-tie"></i> by Robert Green</p>
                        </div>
                    </div>
                </div>
    

                <div className="col-lg-4">
                    <div className="article-box">
                        <div className="article-img">
                            <img src="/img/machine.jpeg" alt="Sustainable Practices"/>
                        </div>
                        <h4>Adopting Sustainable Practices in Grocery Stores</h4>
                        <p>"Sustainability is a growing concern in the grocery industry. Implementing eco-friendly practices not only helps the environment but also attracts environmentally conscious customers." - Patricia White, Sustainability Advocate</p>
                        <Link href="#">Read More</Link>
                        <div className="button-box2">
                            <p><i className="fa-solid fa-calendar-days"></i> 12,02,2024</p>
                            <p><i className="fa-solid fa-user-tie"></i> by Patricia White</p>
                        </div>
                    </div>
                </div>
    
        
                <div className="col-lg-4">
                    <div className="article-box">
                        <div className="article-img">
                            <img src="/img/5808879.jpg" alt="AI in Grocery Retail"/>
                        </div>
                        <h4>Integrating AI in Grocery Retail</h4>
                        <p>"Artificial intelligence is becoming a game-changer in grocery retail, from automating stock management to providing personalized shopping experiences through predictive analytics." - Steven Harris, AI Specialist</p>
                        <Link href="#">Read More</Link>
                        <div className="button-box2">
                            <p><i className="fa-solid fa-calendar-days"></i> 20,01,2024</p>
                            <p><i className="fa-solid fa-user-tie"></i> by Steven Harris</p>
                        </div>
                    </div>
                </div>
    
                <div className="col-lg-4">
                    <div className="article-box">
                        <div className="article-img">
                            <img src="/img/3539132.jpg" alt="Customer Loyalty Programs"/>
                        </div>
                        <h4>Building Effective Customer Loyalty Programs</h4>
                        <p>"Effective loyalty programs can increase customer retention and drive sales. Understanding customer behavior and offering tailored rewards can make a significant difference." - Olivia Martinez, Marketing Expert</p>
                        <Link href="#">Read More</Link>
                        <div className="button-box2">
                            <p><i className="fa-solid fa-calendar-days"></i> 28,12,2023</p>
                            <p><i className="fa-solid fa-user-tie"></i> by Olivia Martinez</p>
                        </div>
                    </div>
                </div>
    
                <div className="col-lg-4">
                    <div className="article-box">
                        <div className="article-img">
                            <img src="/img/ai.jpeg" alt="Online Grocery Market Trends"/>
                        </div>
                        <h4>Trends Shaping the Online Grocery Market</h4>
                        <p>"The online grocery market is evolving rapidly with trends such as voice-assisted shopping and same-day delivery. Staying ahead of these trends is crucial htmlFor e-commerce success." - Noah Clark, E-Commerce Analyst</p>
                        <Link href="#">Read More</Link>
                        <div className="button-box2">
                            <p><i className="fa-solid fa-calendar-days"></i> 15,11,2023</p>
                            <p><i className="fa-solid fa-user-tie"></i> by Noah Clark</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
 </main>
  )
}

export default Blog