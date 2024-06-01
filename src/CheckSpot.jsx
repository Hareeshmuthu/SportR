import React from 'react'

// function CheckSpot() {
//   return (
//     <>
//       <div id="carouselExample" className="carousel slide checkspot">
//             <div className="carousel-inner">
//                 <div className="carousel-item active">
//                     <div className="row" style={{paddingleft: "100px",paddingright: "100px"}}>
//                         <div className="col-3 tab">
//                             <p>Cricket</p>
//                             <img src="/images/Pictures/cricketicon.png" width="180px" height="200px"></img>
//                             <button type="button" className="btn btn-danger">Check Your Spot</button>
//                         </div>
//                         <div className="col-3 tab">
//                             <p>Football</p>
//                             <img src="/images/Pictures/FootBall Icon.jpg" width="180px" height="200px"></img>

//                             <button type="button" className="btn btn-danger">Check Your Spot</button>
//                         </div>

//                         <div className=" col-3 tab" >
//                             <p>Batmiton</p>
//                             <img src="/images/Pictures/Batmiton icon.jpg" width="180px" height="200px"></img>
//                             <button type="button" className="btn btn-danger">Check Your Spot</button>
//                         </div>
//                         <div className="col-3 tab">
//                             <p>BasketBall</p>
//                             <img src="/images/Pictures/BasketBall icon.png" width="180px" height="200px"></img>
//                             <button type="button" className="btn btn-danger">Check Your Spot</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="carousel-item">
//                     <div className="row" style={{paddingleft: "100px",paddingright: "100px"}}>
//                         <div className="col-3 tab">
//                             <p>GYM</p>
//                             <img src="/images/Pictures/Gym icon.jpeg" width="180px" height="200px"></img>
//                             <button type="button" className="btn btn-danger">Check Your Spot</button>
//                         </div>
//                         <div className="col-3 tab">
//                             <p>Volleyball</p>
//                             <img src="/images/Pictures/Volley Ball Icon.png" width="180px" height="200px"></img>
//                             <button type="button" className="btn btn-danger">Check Your Spot</button>
//                         </div>
//                         <div className="col-3 tab">
//                             <p>Swimming</p>
//                             <img src="/images/Pictures/Swimming icon.png" width="180px" height="200px"></img>
//                             <button type="button" className="btn btn-danger">Check Your Spot</button>
//                         </div>
//                         <div className="col-3 tab">
//                             <p>Soapy Football</p>
//                             <img src="/images/Pictures/Soapy Football icon.png" width="180px" height="200px"></img>
//                             <button type="button" className="btn btn-danger">Check Your Spot</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <button className="carousel-control-prev navigationbutton" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
//                 <span className="carousel-control-prev-icon navigationbutton1" aria-hidden="true"></span>
//                 <span className="visually-hidden">Previous</span>
//             </button>
//             <button className="carousel-control-next navigationbutton" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
//                 <span className="carousel-control-next-icon navigationbutton1" aria-hidden="true"></span>
//                 <span className="visually-hidden">Next</span>
//             </button>
//         </div>
//     </>
//   )
// }

// export default CheckSpot

import Carousel from 'react-bootstrap/Carousel';


function CheckSpot() {
    return (
        <>
            <div style={{ margin: " 2px 600px 2px 600px", fontFamily: "cursive" }}>
                <h3>Check your Spot !</h3>
            </div>

            <div className="checkspot">
                <Carousel data-bs-theme="dark" style={{ height: "300px", width: "1250px"}}>
                    <Carousel.Item style={{ color: "black" }}>
                        <div className="row tab">
                            <div className="col-3 tab1">
                                <p>Cricket</p>
                                <img src="/images/Pictures/cricketicon.png" width="180px" height="300px"></img>
                                <button type="button" className="btn btn-danger">Check Your Spot</button>
                            </div>
                            <div className="col-3 tab1">
                                <p>Football</p>
                                <img src="/images/Pictures/FootBall Icon.jpg" width="180px" height="200px"></img>

                                <button type="button" className="btn btn-danger">Check Your Spot</button>
                            </div>

                            <div className=" col-3 tab1" >
                                <p>Batmiton</p>
                                <img src="/images/Pictures/Batmiton icon.jpg" width="180px" height="200px"></img>
                                <button type="button" className="btn btn-danger">Check Your Spot</button>
                            </div>
                            <div className="col-3 tab1">
                                <p>BasketBall</p>
                                <img src="/images/Pictures/BasketBall icon.png" width="180px" height="200px"></img>
                                <button type="button" className="btn btn-danger">Check Your Spot</button>
                            </div>
                        </div>
                        <Carousel.Caption >



                        </Carousel.Caption>

                    </Carousel.Item>
                    <Carousel.Item style={{ color: "black" }}>
                        <div className="row" style={{ paddingleft: "100px", paddingright: "100px" }}>
                            <div className="col-3 tab1">
                                <p>Cricket</p>
                                <img src="/images/Pictures/cricketicon.png" width="180px" height="200px"></img>
                                <button type="button" className="btn btn-danger">Check Your Spot</button>
                            </div>
                            <div className="col-3 tab1">
                                <p>Football</p>
                                <img src="/images/Pictures/FootBall Icon.jpg" width="180px" height="200px"></img>

                                <button type="button" className="btn btn-danger">Check Your Spot</button>
                            </div>

                            <div className=" col-3 tab1" >
                                <p>Batmiton</p>
                                <img src="/images/Pictures/Batmiton icon.jpg" width="180px" height="200px"></img>
                                <button type="button" className="btn btn-danger">Check Your Spot</button>
                            </div>
                            <div className="col-3 tab1">
                                <p>BasketBall</p>
                                <img src="/images/Pictures/BasketBall icon.png" width="180px" height="200px"></img>
                                <button type="button" className="btn btn-danger">Check Your Spot</button>
                            </div>
                        </div>
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default CheckSpot;