import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";


// Custom Previous Arrow Component
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="custom-arrow prev-arrow" onClick={onClick}>
      &#10094; {/* Left arrow symbol */}
    </button>
  );
}

// Custom Next Arrow Component
function NextArrow(props) {
  const { onClick } = props;
  return (
    <button className="custom-arrow next-arrow" onClick={onClick}>
      &#10095; {/* Right arrow symbol */}
    </button>
  );
}

export default function Homeslider( {images}) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow:  <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024, // Screen width less than 1024px
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Screen width less than 768px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Screen width less than 480px
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {images.slice(1,10).map((item, index) => (
        <div className="product-detils-box" key={index}>
          <div className="pro-details-img">
            <img src={item} alt={`Slide ${index + 1}`} />
          </div>
          <div className="pro-data">
            <p>Amul Milk 1.5ltr</p>
            <span>1.5 L</span>
            <h6>Rs.80</h6>
            <div className="button-box">
              <button className="ord">Order Now</button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
