import React from "react";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function CheckSpot() {
  return (
    <>
      <div className="d-flex justify-content-center pt-5 ft" id="findyourspot">
        <h2 style={{color:"white"}}>Find YOUR SPOT!</h2>
      </div>

      <div className="checkspot custom-carousel"> {/* Add custom-carousel class */}
        <Carousel
          data-bs-theme="dark"
          style={{ height: "300px", width: "1250px" }}
        >
          <Carousel.Item style={{ color: "black" }}>
            <div className="row tab">
              <div className="col-3 tab1">
                <p>Cricket</p>
                <img
                  src="/images/Pictures/Find Spot/Cricket1.jpeg"
                  width="250px"
                  height="300px"
                ></img><br/>
                <button type="button" className="btn btn-light">
                  Find Your Spot
                </button><br/>
                {/* <button> I'M READY
                </button> */}
              </div>
              <div className="col-3 tab1">
                <p>Football</p>
                <img
                  src="/images/Pictures/Find Spot/Football1.jpeg"
                  width="250px"
                  height="300px"
                ></img><br/>

                <button type="button" className="btn btn-danger">
                  Find Your Spot
                </button><br/>
              </div>

              <div className=" col-3 tab1">
                <p>Batmiton</p>
                <img
                  src="/images/Pictures/Find Spot/Batmiton1.jpg"
                 width="250px"
                  height="300px"
                ></img><br/>
                <button type="button" className="btn btn-danger">
                  Find Your Spot
                </button><br/>
              </div>
              <div className="col-3 tab1">
                <p>BasketBall</p>
                <img
                  src="/images/Pictures/Find Spot/Basketball3.jpg"
                 width="250px"
                  height="300px"
                ></img><br/>
                <button type="button" className="btn btn-danger">
                  Find Your Spot
                </button>
              </div>
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ color: "black" }}>
            <div
              className="row"
              style={{ paddingleft: "100px", paddingright: "100px" }}
            >
              <div className="col-3 tab1">
                <p>Swimming</p>
                <img
                  src="/images/Pictures/Find Spot/Swimming.webp"
                  width="250px"
                  height="300px"
                ></img><br/>
                <button type="button" className="btn btn-danger">
                  Find Your Spot
                </button>
              </div>
              <div className="col-3 tab1">
                <p>Gym</p>
                <img
                  src="/images/Pictures/Find Spot/Gym.jpeg"
                 width="250px"
                  height="300px"
                ></img><br/>

                <button type="button" className="btn btn-danger">
                  Find Your Spot
                </button>
              </div>

              <div className=" col-3 tab1">
                <p>Sloapy Football</p>
                <img
                  src="/images/Pictures/Find Spot/Soapy Football.jpeg"
                 width="250px"
                  height="300px"
                ></img><br/>
                <button type="button" className="btn btn-danger">
                  Find Your Spot
                </button>
              </div>
              <div className="col-3 tab1">
                <p>PaintBall Shooting</p>
                <img
                  src="/images/Pictures/Find Spot/PaintBall Shooting.png"
                  width="250px"
                  height="300px"
                ></img><br/>
                <button type="button" className="btn btn-danger">
                  Find Your Spot
                </button>
              </div>
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default CheckSpot;
