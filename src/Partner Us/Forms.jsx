import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
// import "./App.css";

function Form() {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-3">
            <h3>Information</h3>
          </div>
          <div className="col-3">
            <h3>Bank Details</h3>
          </div>
          <div className="col-3">
            <h3>Upload Documents</h3>
          </div>
          <div className="col-3">
            <h3>Terms and Conditions</h3>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row d-flex justify-content-center">
          <h3>Spot Details</h3>
        </div>
        <div className="row mt-5">
          <div class="col-6 mb-3">
            {/* <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label> */}
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Spot Name"
            />
          </div>
          <div class="col-6 mb-3">
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Spot Address"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div class="col-6 mb-3">
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Spot Email Address"
            />
          </div>
          <div class="col-6 mb-3">
            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Booking Mobile Number"
            />
          </div>
        </div>
        <div className="col-12">
       
      <select
        id="options"
        name="option"
      >
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

        </div>
      </div>
      <div className="container mt-4">
        <div className="row d-flex justify-content-center">
          <h3>Personal Details</h3>
        </div>
        <div className="row mt-5">
          <div class="col-6 mb-3">
            {/* <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label> */}
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Full Name"
            />
          </div>
          <div class="col-6 mb-3">
            <input
              type="mail"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Email Address"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div class="col-6 mb-3">
            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="MobileNumber"
            />
          </div>
        </div>
      </div>
      {/* <div className="container mt-4">
        <div className="row d-flex justify-content-center">
          <h3>Bank Details</h3>
        </div>
        <div className="row mt-5">
          <div class="col-6 mb-3">
          
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Type Your Full Name"
            />
          </div>
          <div class="col-6 mb-3">
            <input
              type="mail"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Type Your Email Address"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div class="col-6 mb-3">
            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Type Your MobileNumber"
            />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Form;