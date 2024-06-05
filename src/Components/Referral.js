import React from 'react'
import './css/referral.css'
export default function Referral() {
  return (
    <div>
      
      <div className="dvICVw">
        <div className="header-left">
            <span style={{display: 'inline-block', color: 'rgb(29, 29, 29)'}}>
                <img  src="images/mamacash/leftarrow.png" style={{height: '1.5rem'}} alt=" "/>
            </span>
            <p>Refer And Earn</p>
        </div>
        <div className="header-right">Your Referral History</div>
    </div>

    <div className="voZRx">
        <p className="heading">Refer a friend and you both get <span className="heading-cash">₹100</span></p>
        <p className="sub-text">Spread the goodness to your friends and family by gifting them <span className="sub-text-price">₹100</span> for their first order. What’s more? you earn <span className="sub-text-price">₹100</span> as well on their first order.</p>
        <div className="bottom-border"></div>
    </div>

    <div className="dKVEoR">
        <div className="invite-code">
            <p>Invite Code</p>
            <div className="referral-code">
                <p>KPHQZDZZH</p>
                <img src="images/mamacash/copy2.png" alt="copy_text" className="copy-img"/>
            </div>
        </div>
        <div>
            <p className="share-via">Invite Via</p>
            <div className="buttons">
                <a className="whatsapp-button" href="/" >
                    <img src="https://images.mamaearth.in/wysiwyg/Referral_SVG/whatsapp_ref.svg" alt=""/>
                    WhatsApp
                </a>
                <div className="more-options-button">
                    <img src="https://images.mamaearth.in/wysiwyg/Referral_SVG/share.svg" alt=""/>
                    More Options
                </div>
            </div>
            <div className="bottom-border"></div>
            
        </div>
    </div>

    <div className="sc-dliRfk gyYthh">
        <div className="text-heading">How It Works</div>
        <div>
            <div className="sub-points">
                <img src="images/mamacash/share2.png" alt=""/>
                <p>Share the referral link with your friends.</p>
            </div>
            <div className="sub-points">
                <img src="images/mamacash/entry2.png" alt=""/>
                <p>Your friend will sign up through your shared link.</p>
            </div>
            <div className="sub-points">
                <img src="images/mamacash/wallet2.png" alt=""/>
                <p>Your friend earns ₹100 Cashback in the Mamapay wallet as soon as they sign up. After your friend places their first order, you get ₹100 Cashback in Mamapay wallet. You can earn cashback up to 5 successful referrals.</p>
            </div>
        </div>
    </div>
    </div>
  )
}
