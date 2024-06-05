import React from 'react'
import { Link } from 'react-router-dom';

export default function Category() {
  return (
    <div>
      {/* <!-- Home> Beauty --> */}
  <div class="container mt-3">
   <Link to="/"><span class="h-label" >Home </span></Link> <span class="b-label"> - Beauty Care Products</span>

  </div>
  {/* <!-- Home> Beauty exit --> */}

  <div class="container text-center">
    <h1 class="bt-head">Categories </h1>
  </div>
  {/* <!-- Beauty Care Products heading end --> */}

  {/* <!-- Category --> */}
  <section class="cat_wrapper">

    <div class="container">
        <div class="row flex-lg-row flex-column">
            <div class="col-lg-12 mb-4 mb-lg-0 ps-lg-4 text-center ">
              <div class="row  mb-3">
      
                <div class="col-md-3 d-flex align-items-stretch">
                    <div class="card" >
                      <img src="images/products/p1.jpg" class="card-img-top"  alt="product1" />
                      <div class="card-body">
                        <h5 class="card-title text-center card2">Face Wash</h5>  
                        </div>
                        <div class="mt-2 text-center"><Link to="/beauty"><button class="btn btn-primary ">View All</button></Link></div>
                      </div>
                  
              </div>
              <div class="col-md-3 d-flex align-items-stretch">
                <div class="card" >
                  <img src="images/products/p8.jpg" class="card-img-top"  alt="product2" />
                  <div class="card-body">
                    <h5 class="card-title text-center card2">Face Cream</h5>
                    </div>
                    <div class="mt-2 text-center"><Link to="/beauty"><button class="btn btn-primary ">View All</button></Link></div>
                  </div>
              </div>
            
            <div class="col-md-3 d-flex align-items-stretch">
                <div class="card" >
                  <img src="images/Beauty/ourproducts/p3.jpeg" class="card-img-top"  alt="product3" />
                  <div class="card-body">
                    <h5 class="card-title text-center card2">Onion Shampoo</h5>  
                    </div>
                    <div class="mt-2 text-center"><Link to="/beauty"><button class="btn btn-primary ">View All</button></Link></div>
                  </div>
              </div>
            
            <div class="col-md-3 d-flex align-items-stretch">
                <div class="card" >
                  <img src="images/Beauty/ourproducts/p1.jpeg" class="card-img-top"  alt="product4" />
                  <div class="card-body">
                    <h5 class="card-title text-center card2">Face Serum</h5>  
                    </div>
                    <div class="mt-2 text-center"><Link to="/beauty"><button class="btn btn-primary ">View All</button></Link></div>
                  </div>
              </div>
            
    
            </div>
            <div class="row mt-3 mb-3">
      
              <div class="col-md-3 d-flex align-items-stretch">
                  <div class="card" >
                    <img src="images/category/facemask.jpeg" class="card-img-top"  alt="product5" />
                    <div class="card-body">
                      <h5 class="card-title text-center card2">Face Mask</h5>
                    </div>
                      <div class="mt-2 text-center"><Link to="/beauty"><button class="btn btn-primary ">View All</button></Link></div>
                    </div>
                </div>
            
            <div class="col-md-3 d-flex align-items-stretch">
              <div class="card" >
                <img src="images/category/facescrub.jpeg" class="card-img-top"  alt="product6" />
                <div class="card-body">
                  <h5 class="card-title text-center card2">Face Scrub</h5>
                  </div>
                  <div class="mt-2 text-center"><Link to="/beauty"><button class="btn btn-primary ">View All</button></Link></div>
                </div>
            </div>
          
          <div class="col-md-3 d-flex align-items-stretch">
              <div class="card" >
                <img src="images/category/sunscreen.jpeg" class="card-img-top"  alt="product7" />
                <div class="card-body">
                  <h5 class="card-title text-center card2">Sunscreen</h5>
                  </div>
                  <div class="mt-2 text-center"><Link to="/beauty"><button class="btn btn-primary ">View All</button></Link></div>
                </div>
            </div>
          
          <div class="col-md-3 d-flex align-items-stretch">
              <div class="card" >
                <img src="images/category/hairshampoo.jpeg" class="card-img-top"  alt="product8" />
                <div class="card-body">
                  <h5 class="card-title text-center card2">Hair Shampoo</h5>
                  </div>
                  <div class="mt-2 text-center"><Link to="/beauty"><button class="btn btn-primary ">View All</button></Link></div>
                </div>
            </div>
          
    
          </div>
    
    
            </div>
    
    
           </div>

    </div>

  </section>

  {/* <!-- Category End --> */}
    </div>
  )
}
