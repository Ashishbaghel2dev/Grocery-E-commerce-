import React from 'react'
import { images } from "../../../data.js";
import { Link } from 'react-router-dom';
function Products() {
  return (
  <div className="container my-5">
        <div className="d-flex justify-content-between my-3">
          <h4> Grocery Items</h4>
          <Link to="#">See All</Link>
        </div>
      <div className='d-flex flex-wrap gap-2 justify-content-center'>
        {images.map((item, index) => (
              <div class="product-box" key={index}>
              <Link to="#">
                  <div class="product-img">
                  <img src={item} alt={`Slide ${index + 1}`} className='' />
                  </div>
                  <p>Amul Milk</p>
              </Link>
          </div>
      ))}
    </div>
  </div>
  )
}

export default Products