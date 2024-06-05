import React from 'react'
import './css/profile.css'
import Footer from './HomeComponents/Footer'
import Nav from './Nav'
export default function YourProfile() {
  return (
    <div>
      <Nav/>
       <section className="profile_wrapper ">
        <div className="">
            <div style={{height: '1rem', display: 'block', width: '100%'}}></div>
          <div className="container">
            <span className="name">Welcome, Kush Patel!</span>

            <div className="deskflex">
                <span>
                    <span className="details">
                        <span>Email:</span>
                        "kushp320@gmail.com"
                    </span>
                    <span className="details"> <span>Phone :</span> +91 7874396330 </span>
                    <span className="details"> <span>Gender :</span>  </span>
                    <span className="details"> <span>DOB : </span></span>
                    <button className="sc-ePZHVD cEtUHk"><img src="https://images.mamaearth.in/svg/pen.svg" alt=""/>Edit</button>
                </span>
                <span className="filter"><a className="bton" href="/contact-us">Need Help?</a></span>
            </div>

            <div className="grid-container">
              <a href="/orders">  
              <div className="dUMhGd">
                    <span className="circle"><img src="https://images.mamaearth.in/wysiwyg/OrderTracking/box.svg" alt=""/></span>
                    <span className="spac">
                        Your Orders
                        <div className="sc-jtRlXQ MUxAp">Track, return, or buy things again</div>
                    </span>

                </div>
              </a>
              <a href="/addresses">
                <div className="dUMhGd">
                    <span className="circle"><img src="https://images.mamaearth.in/wysiwyg/OrderTracking/location.svg" alt=""/></span><span className="spac">Addresses<div className="sc-jtRlXQ MUxAp">Edit addresses for orders and gifts</div></span>
                </div>
              </a>
              <a href="/mamacash">
                <div className="dUMhGd">
                    <span className="circle"><img src="https://images.mamaearth.in/wysiwyg/OrderTracking/wallet.svg" alt=""/></span><span className="spac"> Mamacash <span className="spac-wallet"> (₹0)</span><div className="sc-jtRlXQ MUxAp">Use Money from MamaCash Wallet</div></span>
                </div>
              </a>
              <a href="/referral">
                <div className="dUMhGd">
                  <span className="circle"><img src="https://images.mamaearth.in/wysiwyg/OrderTracking/refer.svg" alt=""/></span> <span className="spac"> Referrals<div className="sc-jtRlXQ MUxAp">Refer and Earn Money</div></span>
                </div>
              </a>
              <a href="/paymentmode">
                <div className="sc-bGbJRg dUMhGd">
                    <span className="circle"><img src="https://images.mamaearth.in/svg/card-02.svg" alt=""/></span> <span className="spac"> Payment Modes<div className="sc-jtRlXQ MUxAp">Your saved UPIs, Cards &amp; more</div></span>
                </div>
              </a>

            </div>
          </div>  

            <div className="sc-kgAjT gRxSpk line colored-line" color="#F2F2F2" height="8"></div>
            <div style={{height: '1rem', display: 'block', width: '100%'}}></div>
            <div className="foot container">
                <div className="jkMFTA">
                  <div className="flex-div">
                    
                    <img src="images/profile/goodness.png" alt=""/>
                    <div className="text">
                      <div className="sub">Become a goodness insider </div>
                      <span style={{marginRight: '1rem'}}>
                        <img src="https://images.mamaearth.in/svg/tick.svg" alt=""/>&nbsp;Get 2 Free gifts</span>
                        <span><img src="https://images.mamaearth.in/svg/tick.svg" alt=""/>&nbsp;Free shipping</span>
                      </div>
                    </div>

                    <div style={{height: '1rem', display: 'block', width: '100%'}}></div>

                    <div className="back">
                      
                      <div className="kkfuHC">
                        <div className="sc-cEvuZC jFUjWd">
                          <div className="head">3 Months</div>
                          <div className="price">₹99<span className="slashed-goodness">₹149</span></div>
                          <div className="per">₹33 /month</div>
                        </div>
                        <div className="sc-cEvuZC gxufFx">
                          <div className="badge">Money Saver</div>
                          <div className="head">6 Months</div>
                          <div className="price">₹149<span className="slashed-goodness">₹299</span></div>
                          <div className="per">₹24 /month</div>
                        </div>
                        <div className="sc-cEvuZC jFUjWd">
                          <div className="head">12 Months</div>
                          <div className="price">₹249<span className="slashed-goodness">₹599</span></div>
                          <div className="per">₹20 /month</div>
                        </div>
                      </div>
                      <div className="btn">Buy Now</div>
                    </div>
                </div>


                <div className="kmZrAT account">
                  <div style={{width: '90%'}}>
                    <div className="GoodnessSection">
                      <div>
                        <div className="goodnessText" style={{fontWeight: '600', fontSize: '14px'}}> Your 10th plant is ready to be planted. It will be planted once your order is delivered. </div>
                        <div className="plantTree">
                          
                          <div className="plantContainer">
                            <div className="halfTree"> <img src="images/profile/tree1.png" alt=""/></div>
                            <div className="plantedTree">
                              <div className="plantNumber"> 8th </div>
                              <img src="images/profile/tree21.jpg" style={{height: '50px', borderRadius: '50%', border: '3px solid rgb(109, 165, 35)'}} alt=""/>
                              <div style={{marginTop: '-8px'}}> 
                                <img src="https://images.mamaearth.in/svg/leaves.svg" alt=""/> 
                              </div>
                              <div className="plantName"> Guava</div>
                            </div>
                            <div className="plantedTree">
                              <div className="plantNumber"> 9th </div>
                              <img src="images/profile/tree31.jpg" style={{ height: '70px', borderRadius: '50%', border: '3px solid rgb(109, 165, 35)'}} alt=""/>
                              <div style={{marginTop: '-8px'}}>
                                <img src="https://images.mamaearth.in/svg/leaves.svg" alt=""/>
                               </div>
                               <div className="plantName"> Guava</div>
                            </div>
                            <div className="plantedTree">
                              <div className="plantNumber"> 10th </div>
                              <img src="images/profile/tree4.png" style={{height: '80px', borderRadius: '50%', backgroundColor: 'white'}} alt=""/>
                              <div style={{margin: '-8px 0px 8px'}}>
                                 <img src="https://images.mamaearth.in/svg/leaves.svg" alt=""/> 
                              </div>
                            </div>
                          </div>
                          <div className="plantBack"><img src="images/profile/back.svg" alt=""/></div>


                        </div>
                      </div>
                    </div>

                    <div className="appShareSection">
                      <div className="app">
                        <div className="downloadText">
                           Download the APP to Track Your Plant and Get notifications on offers and delivery.
                        </div>
                        <div className="appImages">
                          <a href="/"  style={{marginRight: '5px'}}>
                            <img src="images/profile/GP copy.png" className="playStoreimg" alt=""/>
                          </a>
                          <a href="/" >
                            <img src="images/profile/AP copy.png" className="playStoreimg" alt=""/>
                          </a>
                        </div>
                      </div>
                      <img src="images/profile/qr copy.png" className="qrImage" alt=""/>
                    </div>

                  </div>

                  <div className="downloadBenifits">
                    <div className="downText"> Download Benefits</div>
                    <div className="benifits row">
                      <div className="col-lg-12 mt-1">
                      <div className=" row">
                        <div className="col-lg-6"><img src="images/profile/tag2.png" className="options" alt=""/>
                        </div>
                        <div className="col-lg-6 text-start"><div className="benifitText"> Get Exciting Offers</div>
                      </div>
                      </div>
                    </div>
                    <div className="col-lg-12 mt-1 ">
                      <div className=" row" style={{padding: '0px'}}>
                        <div className="col-lg-6 "><img src="images/profile/truck2.png" className="option" style={{marginBottom: '12px'}} alt=""/>
                        </div>
                        <div className="col-lg-6 text-start "><div className="benifitText"> Easy To Track Your Orders</div>
                      </div>
                      </div>
                    </div>
                    <div className="col-lg-12mt-1">
                      <div className=" row">
                        <div className="col-lg-6"><img src="https://images.mamaearth.in/svg/trackPlant.svg" className="options" alt=""/>
                        </div>
                        <div className="col-lg-6 text-start"><div className="benifitText"> Easy To Track Your Plant</div>
                       
                        </div>

                      </div>
                    </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>

    </section>
    <Footer/>

    </div>
  )
}
