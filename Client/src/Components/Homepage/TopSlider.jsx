import React from 'react'
import { Link } from 'react-router-dom'
import { Poster1, Poster2 } from '../../../data.js'


function TopSlider() {
  return (
    <div>
         <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={Poster1} className="d-block w-100" alt="..."/>
                <div className="main-poster-data">
                    <h1>Discover Fresh Groceries at Unbeatable Prices!</h1>
                    <h6>Top-Quality Produce Delivered Daily - Shop with Us Today!</h6>
                    <Link href="./data.html">Shop Now</Link>
                </div>
            </div>
            <div className="carousel-item ">
                <img src={Poster2} className="d-block w-100" alt="..."/>
                <div className="main-poster-data">
                    <h1 className="btn-shine">Get Fresh Groceries from Our Shop!</h1>
                    <h6>Quality Produce, Exceptional Prices!</h6>
                    <Link href="./data.html">Shop Now</Link>
                </div>
            </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>

    </div>
  )
}

export default TopSlider