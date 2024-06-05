import React from 'react'
import ProductDesc from './ProductDetailComp/ProductDesc'
import Paragraph from './ProductDetailComp/Paragraph'
import Imgsection from './ProductDetailComp/Imgsection'
import CatList from './ProductDetailComp/CatList'
import Accordion from './ProductDetailComp/Accordion'
import SimilarProds from './ProductDetailComp/SimilarProds'
import Footer from './HomeComponents/Footer'
import Nav from './Nav'
import './css/product.css'

export default function ProductDetail() {
  return (
    <div>
      <Nav/>
      <ProductDesc/>
      <Paragraph/>
      <Imgsection/>
      <CatList/>
      <Accordion/>
      <SimilarProds/>
      <Footer/>
    </div>
  )
}
