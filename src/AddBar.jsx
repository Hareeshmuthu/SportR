import React from 'react'
import './App.css';
import Carousel from "react-bootstrap/Carousel";

function AddBar() {
    return (
      <div className="addbar">
      <Carousel >
        <Carousel.Item style={{backgroundColor:"black"}}>
          <img
            style={{ height: "200px", width: "1300px" }}
            className="d-block w-100"
            src="/images/Pictures/AddBar1.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="addbarbutton"> 
            {/* <h3>First slide label</h3> */}
            <button type="button" className="btn btn-light" style={{ width: "220px", height:"80px"}}>BOOK U'R SLOT NOW !</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "200px", width: "1300px" }}
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
            style={{ height: "400px", width: "1300px" }}
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
      </div>
    );
  }

export default AddBar