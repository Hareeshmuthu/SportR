import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Cities from "./Cities";

function NavBar1() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar1">
        <div className="container-fluid" style={{marginLeft:"150px"}}>
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
              <li className="nav-item icons1 nav1">
                <a
                  className="nav-link active  "
                  aria-current="page"
                  href="#findyourspot"
                  style={{color:"white"}}
                >
                  Find Your Spot
                </a>
              </li>
              <li className="nav-item icons1 nav1">
                <a
                  className="nav-link active  nav1"
                  aria-current="page"
                  href="#Nearby"
                  style={{color:"white"}}
                >
                  Near By Ground
                </a>
              </li>
              <li className="nav-item icons1 nav1">
                <a
                  className="nav-link active  nav1"
                  aria-current="page"
                  href="#buildteam"
                  style={{color:"white"}}
                >
        
                 Build Your Team
                </a>
              </li>
              <li className="nav-item icons1 nav1" style={{border:"1px",paddingLeft:"650px"}}>
                <Link
                  className="nav-link active nav1"
                  aria-current="page"
                  to="/listyourspot"
                  style={{color:"white"}}
                >
                 List now and Partner with us.
                </Link>
              </li>         
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar1;
