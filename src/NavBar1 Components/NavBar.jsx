import React, { useState } from "react";
// import "./App.css";
import { Link } from "react-router-dom";
import SelectCity from "./SelectCity";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [showCityDropdown, setshowCityDropdown] = useState(false);
  const navigate = useNavigate();

  const cityOptions = [
    { value: "Coimbatore", label: "Coimbatore" },
    { value: "Chennai", label: "Chennai" },
    { value: "Madurai", label: "Madurai" },
  ];

  const handleShowOnlineSales = () => setshowCityDropdown(true);
  const handleCloseOnlineSales = () => setshowCityDropdown(false);

  const handleCityChange = (selectedOption) => {
    if (selectedOption) {
      navigate(`/city/${selectedOption.value}`);
    }
    handleCloseOnlineSales();
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#f8f9fa",
      borderColor: "#ced4da",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#868e96",
      },
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 9999,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#e9ecef" : "white",
      color: "#495057",
      "&:hover": {
        backgroundColor: "#e9ecef",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#6c757d",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#495057",
    }),
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light homebar">
        <div className="container-fluid">
          <img
            src="/images/Pictures/Logo.png"
            alt="Bootstrap"
            width="150"
            height="80"
          />
          <span> </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 icons1 menu1">
              <li className="nav-item icons1 menu">
                <Link
                  className="nav-link active text-black "
                  aria-current="page"
                  to="/"
                >
                  <i
                    class="fa-solid fa-house fa-xl"
                    style={{ marginLeft: "7px" }}
                  ></i>
                  <br />
                  Home
                </Link>
              </li>
              <li className="nav-item icons1 menu">
                <Button
                  className="nav-link text-black menu no-hover-effect"
                  aria-current="page"
                  onClick={handleShowOnlineSales}
                  style={{
                    backgroundColor: "inherit",
                    color: "inherit",
                  }}
                >
                  <i
                    className="fa-solid fa-flag-checkered fa-fade fa-xl"
                    style={{ marginLeft: "15px" }}
                  ></i>
                  <br />
                  Sports
                </Button>
              </li>

              <Modal
                show={showCityDropdown}
                onHide={handleCloseOnlineSales}
                style={{ paddingTop:"200px" }}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Choose Your Location</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Select
                    options={cityOptions}
                    onChange={handleCityChange}
                    placeholder="Select a city"
                    styles={customStyles}
                    isClearable
                  />
                </Modal.Body>
              </Modal>

              <li className="nav-item icons1 menu">
                <Link
                  className="nav-link active text-black menu"
                  aria-current="page"
                  to="/"
                >
                  <i
                    class="fa-solid fa-person-skiing fa-spin fa-xl"
                    style={{ marginLeft: "35px" }}
                  ></i>
                  <br />
                  Fun Activities
                </Link>
              </li>
              <li className="nav-item icons1 menu">
                <button
                  className="nav-link active text-black menu"
                  aria-current="page"
                  href="https://www.hackerrank.com/dashboard"
                >
                  <i class="fa-solid fa-phone fa-bounce fa-xl"></i>
                  <br />
                  Call Us to Book Now
                </button>
              </li>
            </ul>

            <div className="menu1">{/* <SelectCity /> */}</div>

            <form className="d-flex" role="search">
              <div class="textInputWrapper">
                <input
                  placeholder="Search Here"
                  type="text"
                  class="textInput"
                />
              </div>
              <button
                type="button"
                className="btn btn-danger signin"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Sign in
              </button>

              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Sign In{" "}
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="container-fluid">
                        <div className="col">
                          <div>
                            <label>Name</label>
                            <input className="form-control" id="Name" />
                          </div>
                          <div>
                            <label>Mailid</label>
                            <input className="form-control" id="Mailid" />
                          </div>
                          <div>
                            <label>Mobile No.</label>
                            <input className="form-control" id="mobile" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
