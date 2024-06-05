import React from 'react'

export default function CatList() {
  return (
    <div>
          {/* <!-- cat list --> */}
    <section className="cat-list-wrapper">
        <div className="container">
            <div className="row flex-lg-row flex-column">
                <div className="col-lg-8">
                    <div className="cat-list">
                    <button className="btn btn-outline">Hero Ingredients</button>
                    <button className="btn btn-outline">How to Use</button>
                    <button className="btn btn-outline">Who Can Use </button>
                    <button className="btn btn-outline">Why Mamaearth</button>
                    </div>
                    <div className="content-item">
                        <div className="row flex-lg-row flex-column">
                            <div className="col-lg-6">
                                <ul style={{listStyle: 'none'}}>
                                    <li>
                                        <div className="list-icon"><img src="images/productdetail/lemon.jpg" alt=" Lemon " className="rounded-circle w-100 img-fluid"/></div>
                                        <span className="list-content" style={{textAlign: 'justify'}}><strong> VitaminC: </strong>Loaded with antioxidants, it brightens skin &amp; protects it from UV rays.
                                        </span>
                                    </li>
                                    
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul style={{listStyle: 'none'}}>
                                    <li>
                                        <div className="list-icon"><img src="images/productdetail/Turmeric.jpg" alt="Turmeric " className="rounded-circle w-100 img-fluid"/></div>
                                        <span className="list-content" style={{textAlign: 'justify'}}><strong> VitaminC: </strong>Loaded with antioxidants, it brightens skin &amp; protects it from UV rays.
                                        </span>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div color="#F2F2F2" className="sc-elJkPf daijCx colored-line"></div>


            </div>
        </div>
    </section>
    {/* <!-- cat list end --> */}
    </div>
  )
}
