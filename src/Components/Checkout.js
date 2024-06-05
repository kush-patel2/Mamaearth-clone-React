import React from 'react'
import './css/checkout.css'

export default function Checkout() {
  return (
    <div>
      <div className="gYmLvC main-row me-0 ">
        <div className="eZgwXE container">
            <div><div>Hi Kush, Welcome to Mamaearth</div></div>
            <div>
                <div className="sc-gmeYpB krkATd">
                    <div style={{height: '10px', display: 'block', width: '100%'}}></div>
                    <div className="flexAddress">
                        <div className="add-title">Delivery Address</div>
                    </div>
                    <div className="address-items-container">
                        <div className="sc-kZmsYB fWeySa address-item sc-RcBXQ dXcfoh">
                            <div className="flex"><div><span className="name"> Kush Patel </span></div>
                            <div className="title">HOME</div>
                        </div>
                        <span className="address">1, Sardar Nagar Society, B/h tasty vadapav, Nizampura , Vadodara, Vadodara, GUJARAT - 390002</span><span className="phone-number">7874396330</span>
                    </div>
                </div>
                <button className="sc-fZwumE jzQbeL">DELIVER TO NEW ADDRESS</button>
            </div>

            <div className="eZkpFq">
                <div className="gVhYmU">
                    <div className="eiEXqS">
                        <div className="sc-TOsTZ ficLuo choose-pymnt-mthd">
                            <div className="sc-kgAjT gYmLvC">
                                <div className="sc-cJSrbW kgXNnG">
                                    <div id="payment-heading" className="sc-clNaTc bGbtqW">Choose payment method</div>
                                </div>
                                <div className="sc-cJSrbW cvogaB">
                                    <div className="sc-ecaExY krifqj">
                                        <div><div className="heading">Redeem gift card</div>
                                        <div className="text">Gift card value will be deducted from your total amount</div>
                                    </div>
                                    <div className="apply">Apply</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="tabContainer">
                        <div className="tab">
                            <div className="bod">
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                  <label className="form-check-label buttonText" for="flexRadioDefault1">
                                    UPI
                                  </label>
                                </div><br/>
                                <div className="bod2"></div>
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                  <label className="form-check-label buttonText" for="flexRadioDefault1">
                                    Credit/Debit Card
                                  </label>
                                </div><br/>
                                <div className="bod2"></div>
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                  <label className="form-check-label buttonText" for="flexRadioDefault1">
                                    Net Banking
                                  </label>
                                </div><br/>
                                <div className="bod2"></div>
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                  <label className="form-check-label buttonText" for="flexRadioDefault1">
                                    Wallets
                                  </label>
                                </div><br/>
                                <div className="bod2"></div>
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                  <label className="form-check-label buttonText" for="flexRadioDefault1">
                                    Cash On Delivery
                                  </label>
                                </div><br/>
                                
                                
                              </div>
                              
                        </div>
                        <div className="tabcontent">
                            <div className="sc-kgAjT gYmLvC payment-option-title">
                                <div className="sc-cJSrbW bBrZqY"><div className="qr-text"> Pay through UPI QR</div>
                            </div>
                            <div className="sc-cJSrbW bBrZqY">
                                <div className="online-pay-off">
                                    <span className="pay-off-title">Applied</span><span className="pay-off-subtitle"> : Extra 5% Off with Your Order </span>
                                </div>
                            </div>
                        </div>

                        <div className="sc-jKmXuR ezoWsN">
                            <div className="details-wrapper">
                                <div className="scan-text">Pay using Google Pay, Phone Pe, Paytm and other UPI app from your phone.</div>
                                <div className="payment-methods">
                                    <img src="images/navbar/gpay.jpg" width="25px" height="23px"/>
                                    <img src="images/navbar/phonepay.png" className="img-p" width="25px" height="23px"/>
                                    <img src="images/navbar/paytm.png" className="img-p" width="25px" height="23px"/>
                                    <img src="images/navbar/upi.png" className="img-p" width="25px" height="23px"/>
                                </div>
                                <div className="qr-button">GENERATE QR CODE</div>
                            </div>
                        </div>
                        <div className="or-wrapper"><div className="border-line"></div><div>OR</div><div className="border-line"></div></div>

                        <div className="payment-method-upi">Pay using UPI ID</div>
                        <div className="sc-gkFcWv dqabiZ">
                            Payments from oksbi,paytm are experiencing high failure rates. Please try with other UPI Id.
                        </div>
                        <div className="gYmLvC">
                            <div className="QwZAH">
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <p className="reset-p paymentSubtitle">Enter UPI ID&nbsp;&nbsp;(Google Pay, BHIM, PhonePe &amp; more)</p>
                                </div>
                                <div style={{position: 'relative', width: '100%'}}>
                                    <input className="inputField" placeholder="Enter your UPI ID" label="UPI/QR" type="text" id="upiPayment" name="upiPayment" autocomplete="off" value=""/>
                                    <div className="saved-upi-checkbox">
                                        <label className="sc-kasBVs kDdEWw">
                                            <input type="checkbox" className="sc-etwtAo gUYuqq"/>
                                            <div className="sc-iGPElx hWfCbP">
                                                
                                            </div>
                                            <span>

                                            </span>
                                        </label>
                                        <div className="secure-text">Securely save VPA for future use</div>
                                    </div>
                                </div>
                                <button className="sc-jTzLTM sc-fjdhpX hVIcNv sc-fOICqy dLXYzN mobileHidden payNowBtn" name="upiButton" type="button" style={{backgroundColor: 'rgb(220, 220, 220)', color: 'rgb(163, 163, 163)'}}>PLACE ORDER</button>
                                
                                <div className="mobileHidden">
                                    <div className="sc-kgAjT FmyPh sc-gtfDJT fXXKCU">
                                        <div className="sc-cJSrbW hGLhyJ">
                                            <div className="sc-kgAjT gYmLvC assurance-message">
                                                <div className="lazyload-wrapper ">
                                                    <img loading="lazy" src="images/navbar/protect.png" className="sc-jtRfpW rHGOT protection-img" />
                                                </div>
                                                <p className="protection-label">100% Payment Protection, Easy Return Policy
                                                </p>
                                            </div>
                                            <div className="sc-eInJlc cWSeAw accepted-cards">
                                                <div className="lazyload-wrapper ">
                                                    <img loading="lazy" src="images/navbar/visa.png" alt="" className="sc-jtRfpW rHGOT payment-card-img" width="17.5px" height="20px"/>
                                                </div>
                                                <div className="lazyload-wrapper ">
                                                    <img loading="lazy" src="images/navbar/aexpress.png" alt="" className="sc-jtRfpW rHGOT payment-card-img" width="17.5px" height="20px"/>
                                                </div>
                                                <div className="lazyload-wrapper ">
                                                    <img loading="lazy" src="images/navbar/rupay.png" alt="" className="sc-jtRfpW rHGOT payment-card-img" width="17.5px" height="20px"/>
                                                </div>
                                                <div className="lazyload-wrapper ">
                                                    <img loading="lazy" src="images/navbar/mastercard.png" alt="" className="sc-jtRfpW rHGOT payment-card-img" width="17.5px" height="20px"/>
                                                </div>
                                                <div className="lazyload-wrapper ">
                                                    <img loading="lazy" src="images/navbar/netbank.png" alt="" className="sc-jtRfpW rHGOT payment-card-img" width="17.5px" height="20px"/>
                                                </div>
                                            </div>
                                            <p className="user-agreement-label">
                                               
                                                By placing this order, you agree to Mamaearth's&nbsp;
                                                <a href="/terms-and-conditions" style={{color: 'inherit', textDecoration: 'underline'}}>Terms and Conditions
                                                </a>
                                                &nbsp;and&nbsp;
                                                <a href="/privacy-policy" style={{color: 'inherit', textDecoration: 'underline'}}>Privacy Policy</a>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="NsRWM container">
            <div className="eZkpFq">
                <div className="order-summary-wrapper">
                    <div className="dnpDpX">
                <div className="order-summary-content">
                    <div className="px-rem"></div>
                    
                    
          
                    <div className="dyBmQY">
                      <div className="top-bar">
                        <div className="text-container">
                          <div className="title">Make me a <span className="goodness">goodness</span> 
                            <span className="insider">insider</span>
                          </div>
                          <div className="offer">Get 2 Free Gifts + Free Shipping on every order</div>
                        </div>
                        <div className="add-button">Join Now</div>
                      </div>
          
                      <div className="bottom-bar">
                        <div className="goodness-image">
                          <img src="images/navbar/of2 copy.png" loading="lazy"/></div>
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
                                  <img loading="lazy" src="images/navbar/down copy.png" style={{height: '20px', width: '20px'}}/></span>
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
                            <a href="#">
                              <img src="images/navbar/p9.jpg" alt="Onion Shampoo for Hair Fall Control and Hair Growth with Onion &amp; Plant Keratin - 650 ml"/>
                            </a>
                          </div>
                          <div className="cart-item-content">
                            <div className="cart-item-title">
                              <a href="#">Onion Shampoo for Hair Fall Control and Hair Growth with Onion &amp; Plant Keratin - 650 ml
                                
                              </a>
                            </div>
                            <div wrap="no-wrap" className="sc-EHOje dohyPu" style={{width: '100%'}}>
                              <div className="sc-EHOje fpMMGG" style={{paddingRight: '2px'}}>
                               <img src="images/navbar/lightning-bolt-9.png" height="15px" alt=""/>
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
                                  <div className="sc-cIShpX dAeckw" iscart="1">
                                    <button className="icon-holder">
                                      <i fill="currentColor" className="minus-icon fa fa-minus" style={{display: 'inline-block'}}>
                                        
                                          
                                        
                                      </i>
                                    </button>
                                    <span className="product-amount-label">1</span>
                                    <button className="icon-holder">
                                      <i fill="currentColor" className="plus-icon fa fa-plus" style={{display: 'inline-block'}}>
                                        
                                      </i>
                                    </button>
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
                                      <path id="Path_116096" data-name="Path 116096" d="M9.731,15.285H9.048l.682-4.777H7.342c-.6,0-.225-.512-.212-.532Q8.451,7.641,11.1,3h.682L11.1,7.777h2.4c.273,0,.423.13.273.45Q9.727,15.281,9.731,15.285Z" transform="translate(-7.002 -3)" fill="#fff">
          
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
                            <a href="#"><img src="images/navbar/p1.jpg" alt="Ubtan Face Wash with Turmeric &amp; Saffron for Tan Removal – 100ml"/></a>
                          </div>
                          <div className="cart-item-content">
                            <div className="cart-item-title">
                              <a href="/product/ubtan-face-wash">Ubtan Face Wash with Turmeric &amp; Saffron for Tan Removal – 100ml</a>
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
                                <div wrap="nowrap" className="sc-EHOje dMKbby CartItem_Actions" style={{alignSelf: 'stretch'}}>
                                  <div className="sc-cIShpX dAeckw" iscart="1">
                                    <button className="icon-holder">
                                      <i fill="currentColor" className="minus-icon fa fa-minus" style={{display: 'inline-block'}}>
                                      </i>
                                    </button>
                                    <span className="product-amount-label">1</span>
                                    <button className="icon-holder">
                                      <i fill="currentColor" className="plus-icon fa fa-plus" style={{display: 'inline-block'}}>
                                      </i>
                                    </button>
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
                          <img src="images/navbar/offer.png" className="coupon" height="24px" width="18px"/>
                          <span className="use-coupon">Available Offers </span>
                        </div>
                        <i fill="currentColor"  style={{display: 'inline-block', color: 'rgb(0, 174, 239)', fontSize: '20px', margin:'0px',padding:'0px'}}>
                          &#8594;
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
          
                    <div style={{height: '0.5rem', display: 'block', width: '100%}'}}></div>
                    <div style={{height: '4rem', display: 'block', width: '100%'}}></div>
                  </div>
                </div>
                </div>
            </div>
        </div> 

    </div>
    </div>
  )
}
