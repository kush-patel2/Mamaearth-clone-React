import React from 'react';
// import './css/navbar.css';

import './css/navbar.css'
import './css/offcanvas.css'
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <>
    <header className="header_wrapper">
    <nav className="navbar navbar-expand-lg fixed-top ">
        <div className="row">
            <div className="col-lg-12">
                <div className="row">
  
                    <div className="col-lg-2 justify-content-center ml-0 p-0 mt-0">
              
                      
                   <Link  className="navbar-brand " to ="/">
                      <img src="images/logo/logo3.png" alt="logo" className="pl-3 me-3"/>
                    </Link>
                  
                    
                    
                    <Link className="navbar-toggler " type="Link" data-bs-toggle="collapse" data-bs-target="tonavbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    
                      <i className="fa-solid fa-bars-staggered navbar-toggler-icon "></i>
                    </Link>
                  </div>
                    
                    <div className="col-lg-6  mt-3 ">
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <div className="container-fluid justify-content-center">
                      <form className="d-flex" role="search">
                        <input className="search2 " type="search" placeholder="Search for Products" aria-label="Search"/>
                        <Link className=" search-btn" type="submit"><i className="fa fa-search" ></i> Search</Link>
                      </form>
                    </div>
                </div>

                  </div>
              
                  
                  
                
                    <div className="col-lg-4 ms-0 me-0 ">
                      <div className="row">

                        
                        <div className="col-lg-6  mt-1 ms-0 me-0 ">
                            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                                <ul className="navbar-nav menu-navbar-nav">
                                    <li className="nav-item">
                                      <img src="images/navbar/img.jpg" alt=" " className="img-fluid"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                
                      <div className="col-lg-6 ms-0 me-0 mt-3">
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav menu-navbar-nav">
                          <li className="nav-item">
                
                           <Link  className="nav-link icon-label"   data-bs-toggle="offcanvas" to ="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                              
                              <span><i className="fa fa-shopping-cart cart-icon"></i>  Cart</span> 
                            </Link>
                          </li>

                          <li className="nav-item">
                            <div className="dropdown">
                           <Link  className="nav-link icon-label" to ="" role="Link" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
                              <span><i className="fas fa-user-alt user-icon "></i>  Login</span> 
                            </Link>
                            <ul className="dropdown-menu  dropdown-menu-lg-end ">
                              <li><Link className="dropdown-item" to ="/yourprofile"><i className="fas fa-user-alt drop-icon"></i>    Your Profile</Link></li>
                              <li><hr className="dropdown-divider"/></li>
                              <li><Link className="dropdown-item" to ="/orders"> <i className="fas fa-shopping-cart drop-icon "></i>    Your Orders</Link></li>
                              <li><hr className="dropdown-divider"/></li>
                              <li><Link className="dropdown-item" to ="/paymentmode"><i className="fas 	fa fa-credit-card drop-icon"></i>    Saved Cards</Link></li>
                              <li><hr className="dropdown-divider"/></li>
                              <li><Link className="dropdown-item" to ="/"><i className="fas 	fa-gift drop-icon"></i> <img src="images/navbar/dropdown.jpeg" alt=" " /><div className="snew">Something New For You </div>  </Link></li>
                              <li><hr className="dropdown-divider"/></li>
                              <li><Link className="dropdown-item" to ="/addresses"><i className="	fas fa-map-marker-alt drop-icon"></i>    Manage Address</Link></li>
                              <li><hr className="dropdown-divider"/></li>
                              <li><Link className="dropdown-item" to ="/contactus"><i className="	fa fa-phone drop-icon"></i>    Contact Us</Link></li>
                              <li><hr className="dropdown-divider"/></li>
                              <li><Link type="Link" className="btn btn-primary w-100 " data-bs-toggle="modal" data-bs-target="tostaticBackdrop">Login</Link></li>
                              
                              


                              
                            </ul>
                          </div>
                          </li>

                           
                        
                          
                        </ul>
                    </div>
                      
                
                      </div>
                    </div>
                    </div>
                    
                    
                  </div>

            </div>
            <div className="col-lg-12 mt-2 mb-0 pb-0 ">
                <div className="row border">
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav menu-navbar-nav">
                        <li className="nav-item">
                           <Link  className="nav-link active" aria-current="page" to ="/">Home</Link>
                          </li>
                          <li className="nav-item">
                           <Link  className="nav-link active" aria-current="page" to ="/beautycat" >Beauty</Link>
                          </li>
                          <li className="nav-item">
                           <Link  className="nav-link active" aria-current="page" to ="/">Hair</Link>
                          </li>
                          <li className="nav-item">
                           <Link  className="nav-link active" aria-current="page" to ="/">Face</Link>
                          </li>
                          <li className="nav-item">
                           <Link  className="nav-link active" aria-current="page" to ="/">Body</Link>
                          </li>
                          <li className="nav-item">
                           <Link  className="nav-link active" aria-current="page" to ="/">MakeUp</Link>
                          </li>
                          <li className="nav-item">
                           <Link  className="nav-link active" aria-current="page" to ="/">Ingredient</Link>
                          </li>
                          <li className="nav-item">
                           <Link  className="nav-link active" aria-current="page" to ="/">Baby</Link>
                          </li>
                          <li className="nav-item">
                           <Link  className="nav-link active" aria-current="page" to ="/">Gift Packs</Link>
                          </li>
                          <li className="nav-item">
                           <Link  className="nav-link active" aria-current="page" to ="/">All Products</Link>
                          </li>
                          <li className="nav-item">
                           <Link  className="nav-link active" aria-current="page" to ="/">Blog</Link>
                          </li>
                          <li className="nav-item">
                           <Link  className="nav-link active" aria-current="page" to ="/">Plant Goodness</Link>
                          </li>
                          <li className="nav-item">
                           <Link  className="nav-link active" aria-current="page" to ="/">Store Locator</Link>
                          </li>
                    </ul>
                </div>
                </div>
                
            </div>
        </div>
    </nav>


    <div className="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          <div className="modal-body text-center">
            
            <h1 className="modal-title text-center " id="staticBackdropLabel">Login/Signup</h1>
            
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">+91</span>
              <input type="text" className="form-control" placeholder="Mobile Number" aria-label="MobileNumber" aria-describedby="basic-addon1"/>
            </div>
            <div className="mod-text text-center">By continuing, you agree to Mamaearth's</div>
            <div className="mod-text text-center"><Link to ="/" className="mod-link">Terms and Conditions</Link> and<Link  to ="/" className="mod-link">Privacy Policy</Link></div>

           <Link  to ="index.html"><Link type="Link" className="btn btn-primary mod-btn">Login with OTP</Link></Link>
          </div>
          
        </div>
      </div>
    </div>

    

    
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header">
        <div className="off-head">
          <div className="head-btn">        <Link type="Link" className="	fas fa-arrow-left btn-bg" data-bs-dismiss="offcanvas" aria-label="Close"></Link>
          </div>
          <div className="head-text">        <h5 className="off-head" id="offcanvasExampleLabel">My Cart</h5>
          </div>
      </div>
        
      </div>
      <div className="offcanvas-body text-center">
        <div className="order-summary-content">
          <div className="px-rem"></div>
          
          <div className="sc-eerKOB jhuAAS">
            <img src="images/navbar/of1.gif" width="60px" height="60px" loading="lazy" alt=''/>
            <div className="coupon-text"><div className="coupon-header">Flat 20% Off + 5% Prepaid Off</div>
            <div className="coupon-description">Shop for 599 &amp; Get Flat 20% Off + 5% Prepaid Off, Not applicable on Kits &amp; Diapers

            </div>
            </div>
            <div className="coupon-cta">
              <div className="coupon-tap">Tap Here To Apply</div>
              <div className="coupon-code">SAVE25</div>
            </div>
          </div>

          <div className="sc-emmjRN ehefXx"></div>

          <div className="dyBmQY">
            <div className="top-bar">
              <div className="text-container">
                <div className="title">Make me a <span className="goodness">goodness</span> 
                  <span className="insider">insider</span>
                </div>
                <div className="offer">Get 2 Free Gifts + Free Shipping on every order</div>
              </div>
              <div className="add-Link">Join Now</div>
            </div>

            <div className="bottom-bar">
              <div className="goodness-image">
                <img src="images/navbar/of2 copy.png" loading="lazy" alt=' '/></div>
                <div className="goodness-content">
                  <div className="text-description">6 Months Membership</div>
                  <div className="price-dropdown-wrapper">
                    <div className="sc-EHOje ggVyrl sc-cmthru GGIG price-container">
                      <table>
                        <tbody>
                          <tr>
                            <td className="price special">₹149.00</td>
                            <td className="slashed price">₹299</td>
                            <td className="price__discount__isCart">50% off</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="dropdown-wrapper">
                      <div className="selected">6 Months<span className="sc-hMFtBS ktAGEd" style={{display: 'inline-block'}}>
                        <img loading="lazy" src="images/navbar/down copy.png" style={{height: '20px', width: '20px'}} alt=''/></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          <div className="grayline"></div>

          <div className="order-summary-header">Order Summary</div>

          <ul className="iwNQPm">
            <div className="exjSGf">
              <div className="sc-EHOje dQOZSB CartItem_Holder px-rem" wrap="no-wrap">
                <div className="product-image-container">
                 <Link  to ="/">
                    <img src="images/navbar/p9.jpg" alt="Onion Shampoo for Hair Fall Control and Hair Growth with Onion &amp; Plant Keratin - 650 ml"/>
                  </Link>
                </div>
                <div className="cart-item-content">
                  <div className="cart-item-title">
                   <Link  to ="/">Onion Shampoo for Hair Fall Control and Hair Growth with Onion &amp; Plant Keratin - 650 ml
                      
                    </Link>
                  </div>
                  <div wrap="no-wrap" className="sc-EHOje dohyPu" style={{width: '100%'}}>
                    <div className="sc-EHOje fpMMGG" style={{paddingRight: '2px'}}>
                     <img src="images/navbar/lightning-bolt-9.png" height="15px" alt=" "/>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                      <div className="sc-EHOje ggVyrl sc-cmthru dykqjG price-container">
                        <table>
                          <tbody>
                            <tr>
                              <td className="price special">₹380</td>
                              <td className="slashed price">₹845</td>
                              <td className="price__discount__isCart">55% off</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div wrap="nowrap" className="sc-EHOje dMKbby CartItem_Actions" style={{alignSelf: 'stretch'}}>
                      {/*  */}
                        <div className="sc-cIShpX dAeckw" iscart="1">
                          <Link className="icon-holder">
                            <i fill="currentColor" className="minus-icon fa fa-minus" style={{display:'inline-block'}} >
                            {/*  */}
                              
                                
                              
                            </i>
                          </Link>
                          <span className="product-amount-label">1</span>
                          <Link className="icon-holder">
                            <i fill="currentColor" className="plus-icon fa fa-plus" style={{display: 'inline-block'}}>
                              
                            </i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="countdown-container">
                    <div className="countdown-icon-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <g id="bolt_black_24dp" transform="translate(0 -0.38)">
                          <g id="Group_25330" data-name="Group 25330">
                            <rect id="Rectangle_7532" data-name="Rectangle 7532" width="16" height="16" transform="translate(0 0.38)" fill="none"></rect>
                          </g>
                          <g id="Group_25331" data-name="Group 25331" transform="translate(4.779 2.047)">
                            <path id="Path_116096" data-name="Path 116096" d="M9.731,15.285H9.048l.682-4.777H7.342c-.6,0-.225-.512-.212-.532Q8.451,7.641,11.1,3h.682L11.1,7.777h2.4c.273,0,.423.13.273.45Q9.727,15.281,9.731,15.285Z" transform="translate(-7.002 -3)" fill="tofff">

                            </path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <p className="countdown-text">
                      <div><span>Ending in: 8h 38m 36s</span></div>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="sc-bMVAic exjSGf">
              <div className="sc-EHOje dQOZSB CartItem_Holder px-rem" wrap="no-wrap">
                <div className="product-image-container">
                 <Link  to ="/"><img src="images/navbar/p1.jpg" alt="Ubtan Face Wash with Turmeric &amp; Saffron for Tan Removal – 100ml"/></Link>
                </div>
                <div className="cart-item-content">
                  <div className="cart-item-title">
                   <Link  to ="/product/ubtan-face-wash">Ubtan Face Wash with Turmeric &amp; Saffron for Tan Removal – 100ml</Link>
                  </div>
                  <div wrap="no-wrap" className="sc-EHOje dohyPu" style={{width: '100%'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                      <div className="sc-EHOje ggVyrl sc-cmthru dykqjG price-container">
                        <table>
                          <tbody>
                            <tr>
                              <td className="price">₹259</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div wrap="nowrap" className="sc-EHOje dMKbby CartItem_Actions" style={{alignSelf:' stretch'}}>
                        <div className="sc-cIShpX dAeckw" iscart="1">
                          <Link className="icon-holder">
                            <i fill="currentColor" className="minus-icon fa fa-minus" style={{display: 'inline-block'}}>
                            </i>
                          </Link>
                          <span className="product-amount-label">1</span>
                          <Link className="icon-holder">
                            <i fill="currentColor" className="plus-icon fa fa-plus" style={{display: 'inline-block'}}>
                            </i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ul>

          <div>
            <div className="grayline-cart"></div>
            <div className="coupon-strip">
              <div>
                <img src="images/navbar/offer.png" className="coupon" height="24px" width="18px" alt=''/>
                <span className="use-coupon">Available Offers </span>
              </div>
              <i fill="currentColor"  style={{display:'inline-block', color: 'rgb(0, 174, 239)', fontSize: '20px', margin:'0px', padding:'0px'}}>
                
              </i>
            </div>
            <div className="grayline-cart"></div>

          </div>

          <div className="sc-bAeIUo eZkpFq">
            <div className="sc-gojNiO lmfEtY">
              <div className="header-wrapper">
                <div className="sc-exAgwC fADAcA total-savings">
                  <span className="savings">You are saving <span style={{color: 'rgb(89, 163, 14)'}}>₹536.95</span> on this order
                  </span>
                </div>
                <div className="summary-heading px-rem" style={{color: 'rgb(0, 0, 0)'}}>Price Summary &nbsp;</div>
              </div>
              <div className="summary-items__container">
                <div className="sc-GMQeP iCrQJE  px-rem">
                  <span className="item-label">Order Total </span>
                  <span className="item-value">₹1,104.00</span>
                </div>
                <div className="sc-GMQeP iCrQJE items-discount px-rem">
                  <span className="item-label">Items Discount </span>
                  <span className="item-value green">₹465.00</span>
                </div>
                <div className="sc-GMQeP iCrQJE shipping-charges px-rem">
                  <span className="item-label">Shipping <span className="shipping-tooltip__container">
                    <i className="fa fa-info-circle"></i>
                    
                  </span>
                </span>
                <span className="item-value">
                  <span style={{textDecoration: 'line-through', marginRight: '3px'}}>₹40</span>
                  <span style={{color: 'rgb(89, 163, 14)'}}>Free</span>
                </span>
              </div>
              <div className="sc-GMQeP iCrQJE  px-rem">
                <span className="item-label">5% online payment discount </span>
                <span className="item-value green">-₹31.95</span>
              </div>
              <div className="sc-GMQeP iCrQJE grand-total px-rem">
                <span className="item-label">Grand Total </span>
                <span className="item-value">₹607.05</span>
              </div>
            </div>
          </div>
          </div>

          <div style={{height: '0.5rem', display: 'block', width: '100%'}}></div>
          <div style={{height: '4rem', display: 'block', width: '100%'}}></div>
        </div>

        <div className="drawer-footer-wrapper">
          <div className="sc-tilXH gsppNe">
            <div className="view-cart-layout">
              <i className="fa fa-shopping-cart"></i>
              <div className="data-wrapper">
                <div className="item-count-layout">2 Items</div>
                <div className="item-total-layout">₹608</div>
              </div>
            </div>
           <Link  to ="checkout.html"><Link id="continue_cart" className="checkout-Link">Continue</Link></Link>
          </div>
        </div>
        
      </div>
    </div>
    
</header>
</>
  )
}
