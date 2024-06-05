import React from 'react'
import Banner3 from './BeautyCatComponents/Banner3'
// import './css/beautycat.css'
import Category from './BeautyCatComponents/Category'
import Footer from './HomeComponents/Footer'
import Nav from './Nav'
export default function BeautyCat() {
  return (
    <div>
        <Nav/>
        <Banner3/>
        <Category/>
        <Footer/>
    </div>
  )
}
