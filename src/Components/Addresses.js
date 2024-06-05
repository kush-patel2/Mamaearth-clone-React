import React from 'react'
import './css/addresses.css'
import Footer from './HomeComponents/Footer'
import Nav from './Nav'
export default function Addresses() {
  return (
    <div>
      <Nav/>
      <div className="jeXwuF">
        <div className="section-header">1 Saved Address</div>
        <div className="address-items-container">
            <div className="iXghqB">
                <div className="flex"><span className="name"> Kush Patel</span><div className="title">HOME</div></div>
                <span className="address">
                    1, Sardar Nagar Society, B/h tasty vadapav, Nizampura , Vadodara, Vadodara, GUJARAT - 390002
                </span>
                <span className="phone-number">7874396330</span>
                <div className="action-buttons"><button className="edit">Edit</button><button className="delete">Remove</button></div>
            </div>
        </div>
        <button className="sc-eInJlc ipaSkd">+ ADD NEW ADDRESS</button>
      </div>
      <Footer/>
    </div>
  )
}
