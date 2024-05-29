import React from 'react'

function CheckSpot() {
  return (
    <>
      <div id="carouselExample" className="carousel slide checkspot">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row" style={{paddingleft: "100px",paddingright: "100px"}}>
                        <div className="col-3 tab">
                            <p>Cricket</p>
                            <img src="/images/Pictures/cricketicon.png" width="180px" height="200px"></img>
                            <button type="button" className="btn btn-danger">Check Your Spot</button>
                        </div>
                        <div className="col-3 tab">
                            <p>Football</p>

                            <img src="/images/Pictures/FootBall Icon.jpg" width="180px" height="200px"></img>

                            <button type="button" className="btn btn-danger">Check Your Spot</button>
                        </div>

                        <div className=" col-3 tab" >
                            <p>Batmiton</p>
                            <img src="/images/Pictures/Batmiton icon.jpg" width="180px" height="200px"></img>
                            <button type="button" className="btn btn-danger">Check Your Spot</button>
                        </div>
                        <div className="col-3 tab">
                            <p>BasketBall</p>
                            <img src="/images/Pictures/BasketBall icon.png" width="180px" height="200px"></img>
                            <button type="button" className="btn btn-danger">Check Your Spot</button>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row" style={{paddingleft: "100px",paddingright: "100px"}}>
                        <div className="col-3 tab">
                            <p>GYM</p>
                            <img src="/images/Pictures/Gym icon.jpeg" width="180px" height="200px"></img>
                            <button type="button" className="btn btn-danger">Check Your Spot</button>
                        </div>
                        <div className="col-3 tab">
                            <p>Volleyball</p>
                            <img src="/images/Pictures/Volley Ball Icon.png" width="180px" height="200px"></img>
                            <button type="button" className="btn btn-danger">Check Your Spot</button>
                        </div>
                        <div className="col-3 tab">
                            <p>Swimming</p>
                            <img src="/images/Pictures/Swimming icon.png" width="180px" height="200px"></img>
                            <button type="button" className="btn btn-danger">Check Your Spot</button>
                        </div>
                        <div className="col-3 tab">
                            <p>Soapy Football</p>
                            <img src="/images/Pictures/Soapy Football icon.png" width="180px" height="200px"></img>
                            <button type="button" className="btn btn-danger">Check Your Spot</button>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev navigationbutton" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon navigationbutton1" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next navigationbutton" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon navigationbutton1" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>
  )
}

export default CheckSpot
