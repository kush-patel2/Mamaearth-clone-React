import React from 'react'

export default function About() {
  return (
    <section id="about" className="about_wrapper">
    <div className="container">
      <div className="row flex-lg-row flex-column">
       
        <div className="col-lg-6 text-center text-lg-start">
          <h3>Our Goodness Promise</h3>
          <p>At Mamaearth, we live to spread a little love and goodness every day. We believe that goodness isn’t a superpower, nor a special gift, it’s inside all of us and it shows in the little choices we make. Our mission is to bring you the best of nature through our purest and most nurturing products that are made without any toxins or harmful chemicals. For us goodness also means being good to the earth. Which is why we recycle more plastic than we use and we're PETA Certified - which means we never test on animals. This is our #GoodnessInside.</p>
          <a href="/" >
            <button type="button" className="btn btn-primary">Shop Now</button>
          </a>
          <a href="/" >
            <button type="button" className="btn btn-outline-primary">Our Pledges</button>
          </a>
        </div>
        <div className="col-lg-6 mb-4 mb-lg-0 ps-lg-4 text-center">
          

          <iframe width="540" height="315" title='video'
            src="https://www.youtube.com/embed/NZYwNM7g0sY?controls=0">
            </iframe>
        </div>

      </div>
    </div>

   </section>
  )
}
