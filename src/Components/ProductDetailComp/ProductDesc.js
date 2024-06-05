import React from 'react'

export default function ProductDesc() {
  return (
    <div>
       {/* <!-- product description --> */}

<section className="product_desc_wrapper">
    <div className="container">
        <div className="row flex-lg-row flex-column">
            
            <div className="col-lg-4">
                <div id="carouselExampleIndicators" className="carousel slide carousel-dark">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="card" >
                          <a href="images/productdetail/p1.jpeg">
                            <img src="images/productdetail/p1.jpeg" className="card-img-top img-fluid"  alt="product1" /></a>
                            <div className="card-body">
                              </div>
                            </div>
                      </div>
                      <div className="carousel-item">
                        <div className="card" >
                            <img src="images/productdetail/p2.jpeg" className="card-img-top img-fluid"  alt="product2" />
                            <div className="card-body">
                              </div>
                            </div>
                      </div>
                      <div className="carousel-item">
                        <div className="card" >
                            <img src="images/productdetail/p3.jpeg" className="card-img-top img-fluid"  alt="product3" />
                            <div className="card-body">
                              </div>
                            </div>
                      </div>
                      <div className="carousel-item">
                        <div className="card" >
                            <img src="images/productdetail/p4.jpeg" className="card-img-top img-fluid"  alt="product4" />
                            <div className="card-body">
                              </div>
                            </div>
                      </div>
                      <div className="carousel-item">
                        <div className="card" >
                            <img src="images/productdetail/p5.jpeg" className="card-img-top img-fluid"  alt="product5" />
                            <div className="card-body">
                              </div>
                            </div>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
            </div>

            <div className="col-lg-8 ">
                <div className="container">
                    <div className="container mt-3">
                        <a href="index.html"><span className="h-label" >Home </span></a>
                        <span className="b-label"> - </span> 
                        <a href="/"><span className="h-label">  Sunscreen Cream </span> </a>
                        <span className="b-label"> - </span> 
                        <span className="b-label"> Vitamin C Daily Glow Sunscreen With Vitamin C &amp; Turmeric for Sun Protection &amp; Glow - 80 g</span>
                
                    </div>

                    <div className="container mt-2 ">
                        <h1 className="product_name">
                            Vitamin C Daily Glow Sunscreen With Vitamin C & Turmeric for Sun Protection & Glow - 80 g
                        </h1>
                    </div>

                    <div className="container mt-2">
                        <div className="product-subtitle">SPF 50 &amp; PA+++ Protection | Adds Natural Glow</div>
                    </div>

                    <div className="container mt-2">
                        <div className="reviews">
                            <a className="rating" href="/">
                                <span style={{color: 'black'}}>5.0</span>
                                
                                <span style={{color: 'rgb(255, 195, 0)', alignSelf: 'center'}}>★</span>&nbsp;
                                <span className="review-count">59 Reviews </span></a></div>
                    </div>

                    <div className="container mt-2">
                        <div className="price">
                            <span className="price_label">₹449.00</span> <span className="incl-tax">Inc. of all taxes</span>
                        </div>
                    </div>
                    <div className="container mt-2">
                    <button type="button" className="btn btn-primary me-2">Buy Now</button>
                    <button type="button" className="btn btn-primary ">Add To Cart</button>
                    </div>
                    <div className="container mt-2">
                        <img src="images/productdetail/label.jpg" alt="" className="product-goodness-image"/>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>

{/* <!-- product description end --> */}
    </div>
  )
}
