import React from 'react'


export default function Footer() {
  return (
    
    <footer className="mt-5 text-black pt-5 pb-4">
      <div className="container">
        <div className="row bod">
  
          <div className="col-lg-3  text-center">
          
              <img src="images/footer/truck.jpg" alt="Free Shipping" className=" mt-3 mb-2"/>
  
            
            <div className="row">
              <h6 style={{fontWeight: '600', fontSize: '0.9rem'}}>Free Shipping</h6>
              <p style={{fontWeight: '400',lineHeight: '1.4em',fontSize: '0.8rem', color: 'rgb(131, 131, 131)'}}>On Orders Above Rs. 399 </p>
            </div>
           
  
          </div>
  
          <div className="col-lg-9 bod2">
  
            <div className="row">
  
              <div className="col-lg-4 text-center ">
                <img src="images/footer/money.jpg" alt="Free Shipping" height="38px" className="mt-3 mb-2 " />
                <h6 style={{lineHeight: '1.62',fontWeight: '600', fontSize: '0.9rem'}}>COD available</h6>
                <p style={{fontWeight: '400', lineHeight: '1.4em', fontSize: '0.8rem', color: 'rgb(131, 131, 131)'}}>@ Rs. 40 Per Order </p>
  
              </div>
  
              <div className="col-lg-8 text-center ">
  
                <div className="row pt-2">
                  <h5 style={{color: 'rgb(0, 0, 0)',fontSize: '16px',lineHeight: '1.4em',textTransform: 'revert',fontWeight: '600'}} className="mt-3 align-items-stretch">Have Queries or Concerns?</h5>
  
                </div>
                <div className="row pt-2">
                  <div className="col ">
                    <button className="btn btn-outline " >Contact Us</button>
                  </div>
                  
                </div>
              </div>
            </div>
  
  
          </div>
  
        </div>
  
        <div className="row bod3 pt-3 fot-row">
          <div className="row" >
            <h5 className="fot-text">PAYMENT</h5>
            
          </div>
          <div className="row pb-0">
            <div className="col ">
              <h6 className="fot-text2"> <img src="images/footer/assure.jpg" alt=""   height="21px"/>    100% Payment Protection, Easy Return Policy
            </h6>
          </div>
            
          </div>
          <div className="row pb-3">
            <div className="col">
              <img src="images/footer/web-payments.webp" alt=""/>
            </div>
  
          </div>
        </div>
      </div>

      <div className="container  text-md-left bod">

        <div className="row  text-md-left">

          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Useful Links</h5>
            
              <a href="/" className=" align-left "><p>Privacy Policy</p></a>
            
            
              <a href="/" className=""><p>Returns</p></a>
            
            
              <a href="/" className=""><p>Terms and Conditions</p></a>
            
            
              <a href="/" className="text-black"><p>Terms and Conditions-Cashback</p></a>
            
            
              <a href="/" className="text-black"><p>FAQs</p></a>
            
            
              <a href="/" className="text-black"><p>We're Safe</p></a>
            
            
              <a href="/" className="text-black"><p>Track Order</p></a>
            
            
              <a href="/" className="text-black"> <p> Contact Us</p></a>
            
            
              <a href="/" className="text-black"> <p>Sitemap</p></a>
            
            
              <a href="/" className="text-black"><p>About Us </p></a>
            
          </div>

          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Categories</h5>
            
              <a href="/" className="text-black"><p>Baby</p></a>
            
            
              <a href="/" className="text-black"><p>Beauty</p></a>
            
            
              <a href="/" className="text-black"><p>Hair</p></a>
            
            
              <a href="/" className="text-black"><p>Face</p></a>
            
            
              <a href="/" className="text-black"><p>Body</p></a>
            
            
              <a href="/" className="text-black"><p>Makeup</p></a>
            
            
              <a href="/" className="text-black"><p>Ingredient</p></a>
            
            
              <a href="/" className="text-black"><p>Gift Pack</p>  </a>
            
            
          </div>

          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">My Account</h5>
            
              <a href="/" className="text-black"><p>Account</p></a>
            
            
              <a href="/" className="text-black"><p>Orders</p></a>
            
            
              <a href="/" className="text-black"><p>Addresses</p></a>
            
            
            
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 ">
            <img src="images/footer/3.jpg" alt="" className="h-25"/>
          </div>


        </div>
        <hr className="w-100 "/>
        <div className="row mt-2 mb-3">
          <div className="col-md-12 col-lg-12 col-xl-12 text-center ">
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i>
            <i className="fab fa-linkedin icon"></i>
            <i className="fab fa-pinterest icon"></i>
          </div>

        </div>
        <div className="row mt-4 mb-3">
          <div className="col-md-12 col-lg-12 col-xl-12 text-center ">
            <button className="btn btn-dark">
              <i className="fab fa-google-play"></i>
              Get it on Google Play
            </button>
            <button className="btn btn-dark">
              <i className="fab fa-app-store"></i>
               Get it on Apple Play
            </button>
          </div>

        </div>
        <hr className="w-100 "/>
        <div className="row mt-4 mb-3 text-center">
          <p>&#169; 2024 Honasa Consumer Limited. All Rights Reserved</p>
        </div>

      </div>

    </footer>
    
  )
}
