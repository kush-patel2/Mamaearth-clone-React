import React from 'react'
import './css/mamacash.css'
import Footer from './HomeComponents/Footer'
import Nav from './Nav'

export default function Mamacash() {
  return (
    <div>
        <Nav/>
      <div className="cGLJUw">
        <div>
            <div className="ffWgHd">
                <img src="images/mamacash/images2.png" alt=""/>
                <div className="oops-wrapper">
                    <div className="oops-text">Oops! You have no balance</div>
                    <div className="oops-subtext">You’ve 2 ways to earn cashback!</div>
                </div>
            </div>
            <div className="jPcSdL">
                <div className="expiry-title">Shop now and Use “REDEEM35”coupon to save upto 35%</div>
                <div className="expiry-subtitle">Shop for 999 &amp; Get Flat 20% Off +10% Cashback + 5% Prepaid Off. Not applicable on kits &amp; diapers</div>
                <a href="index.html"><div className="shop-now-cta">Shop now</div></a>
            </div>
        </div>
        <div className="kpRFUR">
            <div className="history-items-wrapper">
                <div className="cashback-history-title">Cashback History</div>
                <div className="current-page">
                    <div className="httSEK isDebit">
                        <div className="info">
                            <div className="sc-eLExRp fKZjOa debit">
                                <span className="type">Expired On :</span>
                                <span className="date">13 August, 2023</span>
                            </div>
                            <p className="order-info">Wallet was credited on : <span className="order-id">16 May, 2023</span>
                            </p>
                        </div>
                        <div className="amount">- ₹ 500</div>
                    </div>
                    <div className="sc-emmjRN httSEK">
                        <div className="info">
                            <div className="sc-eLExRp fKZjOa credit">
                                <span className="type">Credited On :</span>
                                <span className="date">16 May, 2023</span>
                            </div>
                            <p className="order-info">Order ID : <span className="order-id">#91015017717</span>
                            </p>
                        </div>
                        <div className="amount">+ ₹ 500</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
