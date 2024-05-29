import React from 'react'
import './App.css';
import Carousel from "react-bootstrap/Carousel";
// function AddBar() {
//     return (
//         <>
//             <div id="carouselExampleIndicators" className="carousel slide">
//                 <div className="carousel-indicators">
//                     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
//                         aria-current="true" aria-label="Slide 1"></button>
//                     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
//                         aria-label="Slide 2"></button>

//                 </div>
//                 <div className="carousel-inner">
//                     <div className="carousel-item active">
//                         <div className="col-10 addbar1" style={{height:"100%",width:"100%"}}>
//                             <p>
//                                 Play the Real Game! Sweat Wet 
//                             </p>
//                             <p>
//                                 Reconnect with your buddies and reignite the spirit of friendly
//                                 competition,<br/>with just a few taps, you find your spot for the sport.
//                             </p>
//                             <h4>So, what are you waiting for?</h4>
//                             <button type="button" className="btn btn-danger" style={{ width: "200px", marginBottom: "15px" }}>Book u'r
//                                 Slot</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="carousel-inner">
//                     <div className="carousel-item active">
//                         <div className="col-12 addbar1" style={{backgroundImage: 'url("/images/Pictures/Sloapy Footbal frame.jpg")',backgroundRepeat:'no-repeat'}}>
//                             <p>
//                                 Fun Max With your Team 
//                             </p>
//                             <p>
//                                 Reconnect with your buddies and reignite the spirit of friendly
//                                 competition,<br/>with just a few taps, you find your spot for the sport.
//                             </p>
//                             <h4>So, what are you waiting for?</h4>
//                             <button type="button" className="btn btn-danger" style={{ width: "200px", marginBottom: "15px" }}>Book u'r
//                                 Slot</button>
//                         </div>
//                     </div>
//                 </div>
//                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
//                     data-bs-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
//                     data-bs-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Next</span>
//                 </button>
//             </div>
//         </>
//     )
// }

function AddBar() {
    return (
      <Carousel style={{ height: "240px",width:"1300px" }}>
        <Carousel.Item>
          <img
            style={{ height: "150px", width: "80px" }}
            className="d-block w-100"
            src="/images/Pictures/Turf1.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "150px", width: "80px" }}
            className="d-block w-100"
            src="/images/Pictures/criz icon.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "150px", width: "80px" }}
            className="d-block w-100"
            src="/images/Pictures/Sloapy Footbal frame.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

export default AddBar