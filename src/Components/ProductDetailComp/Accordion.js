import React from 'react'

export default function Accordion() {
  return (
    <div>
       {/* <!-- Accordion --> */}
    <section className="accordion_wrapper">
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-8">
            
            <div className="faq">FAQs</div>

            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    How Often Should I Apply This Sunscreen?
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">It's recommended that you apply the Vitamin C Daily Glow Sunscreen every 6 hours.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Can I Use This Sunscreen on My Body?
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Yes, you can use this sunscreen on your body.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Will It Make My Skin Oily?
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Not at all. Its lightweight and non-sticky formula  gets absorbed into the skin quickly, leaving no residue or greasiness.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
                    Should I apply it on wet or dry skin?
                  </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Use the Vitamin C Daily Glow Sunscreen on clean and dry skin.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseThree">
                    Will This Work on Sensitive Skin?
                  </button>
                </h2>
                <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Yes, the Vitamin C Daily Glow Sunscreen is crafted with the goodness of natural ingredients such as Vitamin C &amp; Turmeric, making it suitable for all skin types.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseThree">
                    How to use Vitamin C Glow Sunscreen?
                  </button>
                </h2>
                <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Here are the directions to use Mamaearth Vitamin C Daily Glow Sunscreen. First, take a generous amount of this sunscreen on your palm and then apply it on sun-exposed body parts like hands and neck. Now, gently massage it until this sun-protecting cream is completely absorbed. Reapply every 6 hours for assured and complete protection.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseThree">
                    What is good for face skin glow?
                  </button>
                </h2>
                <div id="flush-collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Your face needs regular cleansing with the best and most natural skincare products, along with a change in your hectic lifestyle. For ages, Turmeric and Vitamin C have been considered very beneficial in our skincare routines. Vitamin C helps fight sun damage, and Turmeric helps deeply exfoliate your skin from within and removes all the impurities caused by environmental pollutants. Therefore, experts recommend incorporating a good face cream with the goodness of Vitamin C and Turmeric for glowing and radiant skin. One such example is Mamaearth Vitamin C Daily Glow Face Cream. It comes with the goodness of Vitamin C and Turmeric that help give your skin the daily dose of nourishment and care it deserves.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseThree">
                    How can I naturally glow up?
                  </button>
                </h2>
                <div id="flush-collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">A positive change in one's mental, physical, and emotional state is known as a "glow-up." Both planned, and natural glow-ups are possible in addition to being quick and transient or slow and persistent. Your body will benefit from all that nutrition if you consume a healthy, nutrient-rich diet. It helps eliminate puffy eyes and dark circles under your eyes if you sleep well every night and stay hydrated. Wearing sunglasses and SPF to protect yourself from the sun are just two of the many things you can do to shield yourself from harm in the future. Skincare products with potent ingredients like vitamin C can also be used to fix damage that has already occurred.</div>
                </div>
            </div>

          </div>
          <div color="#F2F2F2" className="sc-elJkPf daijCx colored-line"></div>


          </div>

        </div>
      
      </div>
    </section>
    {/* <!-- Accordion End --> */}
    </div>
  )
}
