import React from 'react'

function SalePoster() {
  return (
    <section>
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-12">
                    <div className="poster">
                        <div className="poster-img">
                            <img src="/img/2-removebg-preview.png" alt=""/>
                            <img src="/img/3-removebg-preview.png" alt=""/>
                            <img src="/img/1-removebg-preview 2.png" alt=""/>
                        </div>
                        <div className="poster-data">
                            <h1 className="headline">Huge Summer Sale: 50% OFF Everything!</h1>
                            <p className="subheadline">Savings Galore - Shop Today!</p>

                            <a href="#">Order Now</a>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

  )
}

export default SalePoster