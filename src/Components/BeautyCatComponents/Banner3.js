import React from 'react'


export default function Banner() {
  return (
    <div class="container_banner" id="home">
    <div id="carouselExampleAutoPlaying2" class="carousel slide carousel-dark" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="images/Beauty/Banner/B3.jpg" class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src="images/Beauty/Banner/B2.jpg" class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src="images/Beauty/Banner/B1.jpg" class="d-block w-100" alt="..."/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoPlaying2" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoPlaying2" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  )
}
