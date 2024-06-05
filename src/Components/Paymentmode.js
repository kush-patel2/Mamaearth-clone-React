import React from 'react'
import './css/paymentmode.css'
import Footer from './HomeComponents/Footer'
import Nav from './Nav'
export default function Paymentmode() {
  return (
    <div>
      <Nav/>
       <div class="sc-kIWQTW hGPLPQ">
        <div class="header">
            <a href="/"><img src="images/arrow-left.svg" style={{marginRight: '8px'}} alt=""/></a>
            <div> Payment Modes</div>
        </div>
        <div class="heading">Saved Cards</div>
        <div class="sc-gCwZxT hRYZDS">
            <img src="images/mamacash/card.png" alt="" />
            <div style={{marginTop: '16px'}}>Once saved , your cards will visible here</div>
        </div>
    </div>

    <Footer/>
    </div>
  )
}
