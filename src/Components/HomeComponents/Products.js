import React from 'react'

export default function Products() {
  return (
    <section id="product" className="product_wrapper">

      <div className="container">

        <div className="row flex-lg-row flex-column">

          <div className="col-lg-4 text-center text-lg-start ps-lg-4 mt-5">
            
            <h3>Best Sellers</h3>
            <p>Explore best-selling safe, natural, and 100% toxin-free baby and beauty products from Mamaearth. Get amazing deals and start your toxin-free skin, hair, and baby care journey.
            </p>
            <a href="/" >
              <button type="button" className="btn btn-primary">View All</button>
            </a>

          </div>

          <div className="col-lg-8 mb-4 mb-lg-0 ps-lg-4 text-center mt-2">

              <div id="carouselExample" className="carousel slide carousel-dark">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row">

                          <div className="col-md-4 d-flex align-items-stretch">
                            <a href="productdetail.html">  
                            <div className="card" >
                                <img src="images/products/p1.jpg" className="card-img-top"  alt="product1" />
                                <div className="card-body">
                                  <h5 className="card-title text-center card2">Ubtan Face Wash</h5>
                                  <p className="card-text card1">
                                      With Turmeric & Saffron for Tan Removal–150 ml
                                      Removes Tan | Brightens Skin
                                  </p>
                                  
                                  <h5 className="text-center"><span>&#8377;</span>350</h5>
                                  <div className="star text-center">4.9
                                  <i className="fa fa-star checked"></i>
                                    
                                  </div>
                                  <div className="mt-2 text-center"><button className="btn btn-primary ">Add to Cart</button></div>
                                </div>
                            </div>
                          </a>
                        </div>
                        <div className="col-md-4 d-flex align-items-stretch">
                          <div className="card" >
                            <img src="images/products/p2.jpg" className="card-img-top"  alt="product2" />
                            <div className="card-body">
                              <h5 className="card-title text-center card2">Onion Hair Oil</h5>
                              <p className="card-text card1">
                                  For Hair Regrowth and Hair Fall Control, 250ml
                                  Boosts Hair Growth | Adds Strength & Shine
                              </p>
                              
                              <h5 className="text-center"><span>&#8377;</span>400</h5>
                              <div className="star text-center">4.8
                              <i className="fa fa-star checked"></i>
                                
                              </div>
                              <div className="mt-2 text-center"><button className="btn btn-primary ">Add to Cart</button></div>
                            </div>
                        </div>
                      </div>
                      <div className="col-md-4 d-flex align-items-stretch">
                          <div className="card" >
                            <img src="images/products/p3.jpg" className="card-img-top"  alt="product3" />
                            <div className="card-body">
                              <h5 className="card-title text-center card2">Onion Shampoo</h5>
                              <p className="card-text card1">
                                  Onion Keratin for Hair Fall Control-400ml
                                  Reduces Hair Fall | Strengthens Hair
                              </p>
                              
                              <h5 className="text-center"><span>&#8377;</span>200</h5>
                              <div className="star text-center">4.8
                              <i className="fa fa-star checked"></i>
                                
                              </div>
                              <div className="mt-2 text-center"><button className="btn btn-primary ">Add to Cart</button></div>
                            </div>
                        </div>
                      </div>

                      </div>
                      
                    </div>
                    <div className="carousel-item">
                      
                      <div className="row">

                          <div className="col-md-4 d-flex align-items-stretch">
                              <div className="card" >
                                <img src="images/products/p4.jpg" className="card-img-top"  alt="product4" />
                                <div className="card-body">
                                  <h5 className="card-title text-center card2">Rosemary Hair Growth Oil</h5>
                                  <p className="card-text card1">
                                      With Rosemary & Methi Dana for Promoting Hair Growth-150 ml
                                      Stimulates Hair Growth | Controls Hair Fall 
                                  </p>
                                  
                                  <h5 className="text-center"><span>&#8377;</span>200</h5>
                                  <div className="star text-center">4.9
                                  <i className="fa fa-star checked"></i>
                                    
                                  </div>
                                  <div className="mt-2 text-center"><button className="btn btn-primary ">Add to Cart</button></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex align-items-stretch">
                          <div className="card" >
                            <img src="images/products/p5.jpg" className="card-img-top"  alt="product5" />
                            <div className="card-body">
                              <h5 className="card-title text-center card2">Ultra Light Indian Sunscreen</h5>
                              <p className="card-text card1">
                                  With Carrot Seed, Turmeric and SPF 50 PA+++ - 80ml
                                  Packed with SPF 50 | Long Lasting Sun Protection
                              </p>
                              
                              <h5 className="text-center"><span>&#8377;</span>350</h5>
                              <div className="star text-center">4.8
                              <i className="fa fa-star checked"></i>
                                
                              </div>
                              <div className="mt-2 text-center"><button className="btn btn-primary ">Add to Cart</button></div>
                            </div>
                        </div>
                      </div>
                      <div className="col-md-4 d-flex align-items-stretch ">
                          <div className="card" >
                            <img src="images/products/p6.jpg" className="card-img-top"  alt="product6" />
                            <div className="card-body">
                              <h5 className="card-title text-center card2">Vitamin C Foaming Face Wash</h5>
                              <p className="card-text card1">
                                  With Vitamin C and Turmeric for Skin Illumination - 150ml
                                  Deeply Cleanses | Brightens Skin
                              </p>
                              
                              <h5 className="text-center"><span>&#8377;</span>250</h5>
                              <div className="star text-center">4.8
                              <i className="fa fa-star checked"></i>
                                
                              </div>
                              <div className="mt-2 text-center"><button className="btn btn-primary ">Add to Cart</button></div>
                            </div>
                        </div>
                      </div>

                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="row">

                          <div className="col-md-4 d-flex align-items-stretch">
                              <div className="card" >
                                <img src="images/products/p7.jpg" className="card-img-top"  alt="product7" />
                                <div className="card-body">
                                  <h5 className="card-title card2 text-center">Rice Face Wash</h5>
                                  <p className="card-text card1">
                                      With Rice Water & Niacinamide for Glass Skin - 100 ml
                                      Gently Cleanses Skin | Hydrates Skin
                                  </p>
                                  
                                  <h5 className="text-center"><span>&#8377;</span>199</h5>
                                  <div className="star text-center">4.7
                                  <i className="fa fa-star checked"></i>
                                    
                                  </div>
                                  <div className="mt-2 text-center"><button className="btn btn-primary ">Add to Cart</button></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex align-items-stretch">
                          <div className="card" >
                            <img src="images/products/p8.jpg" className="card-img-top"  alt="product8" />
                            <div className="card-body">
                              <h5 className="card-title text-center card2">Vitamin C Daily Glow Face Cream</h5>
                              <p className="card-text card1">
                                  With Vitamin C & Turmeric for Skin Illumination - 80 g
                                  Brightens Skin | Moisturizes Skin
                              </p>
                              
                              <h5 className="text-center"><span>&#8377;</span>299</h5>
                              <div className="star text-center">4.7
                              <i className="fa fa-star checked"></i>
                                
                              </div>
                              <div className="mt-2 text-center"><button className="btn btn-primary ">Add to Cart</button></div>
                            </div>
                        </div>
                      </div>
                      <div className="col-md-4 d-flex align-items-stretch ">
                          <div className="card" >
                            <img src="images/products/p9.jpg" className="card-img-top"  alt="product9" />
                            <div className="card-body">
                              <h5 className="card-title text-center card2">Rosemary Anti-Hair Fall Shampoo</h5>
                              <p className="card-text card1">
                                  With Rosemary&Methi Dana for Reducing Hair Loss & Breakage-250 ml
                                  Gives up to 94% Stronger Hair 
                              </p>
                              
                              <h5 className="text-center"><span>&#8377;</span>199</h5>
                              <div className="star text-center">4.8
                              <i className="fa fa-star checked"></i>
                                
                              </div>
                              <div className="mt-2 text-center"><button className="btn btn-primary ">Add to Cart</button></div>
                            </div>
                        </div>
                      </div>

                      </div>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
            

          </div>

        </div>

      </div>

    </section>
  )
}
