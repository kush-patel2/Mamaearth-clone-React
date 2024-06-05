import React from 'react'
import HomeBanner from './HomeComponents/HomeBanner'
import About from './HomeComponents/About'
import Products from './HomeComponents/Products'
import Gift from './HomeComponents/Gift'
import Banner2 from './HomeComponents/Banner2'
import Supersafe from './HomeComponents/Supersafe'
import Testimonials from './HomeComponents/Testimonials'
import Footer from './HomeComponents/Footer'
import './css/responsive-stylee.css'
import Nav from './Nav'

export default function Home() {
  return (
    <div>
      <Nav />
      <HomeBanner/>
      <About/>
      <Products/>
      <Gift/>
      <Banner2/>
      <Supersafe/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}
