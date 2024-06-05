import React from 'react'
import Banner3 from './BeautyCatComponents/Banner3'
import Bestsellers from './BeautyComponents/Bestsellers'
import Products from './HomeComponents/Products'
import Footer from './HomeComponents/Footer'
import Nav from './Nav'


export default function Beauty() {
  return (
    <div>
        <Nav/>
        <Banner3/>
        <Bestsellers/>
        <Products/>
        <Footer/>

    </div>
  )
}
