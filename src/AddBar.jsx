import React from "react";
import "./App.css";
import Carousel from "react-bootstrap/Carousel";

function AddBar() {
  return (
    <div className="addbar mt-2">
      <Carousel>
        <Carousel.Item style={{ backgroundColor: "black" }}>
          <img
            style={{ height: "300px" }}
            className="d-block w-100"
            src="/images/Pictures/AddBar2.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="addbarbutton">
            {/* <h3>First slide label</h3> */}
            <button
              type="button"
              className="btn btn-light"
              style={{ width: "220px", height: "70px" }}
            >
              BOOK U'R SLOT NOW !
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "300px" }}
            className="d-block w-100"
            src="/images/Pictures/criz icon.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "300px" }}
            className="d-block w-100"
            src="/images/Pictures/Sloapy Footbal frame.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default AddBar;
