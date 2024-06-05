import React from 'react'

export default function HomeBanner() {
  return (
    <div className="container_banner  " id="home">
      <div id="carouselExampleAutoPlaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/banner/b1.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="images/banner/b2.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="images/banner/b3.jpg" className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
