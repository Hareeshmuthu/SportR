import React from 'react'
import './App.css';

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-danger homebar">
                <div className="container-fluid">
                    <img src="/images/Pictures/Logo.png" alt="Bootstrap" width="150" height="80" /><span> </span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 icons1">
                            <li className="nav-item icons1">
                                <a className="nav-link active text-black menu" aria-current="page"
                                    href="http://127.0.0.1:5500/home.html">Home</a>
                            </li>
                            <li className="nav-item icons1">
                                <a className="nav-link active text-black menu" aria-current="page"
                                    href="https://www.hackerrank.com/dashboard">Sports</a>
                            </li>
                            <li className="nav-item icons1">
                                <a className="nav-link active text-black menu" aria-current="page"
                                    href="https://www.hackerrank.com/dashboard">Activities</a>
                            </li>
                            <li className="nav-item icons1">
                                <a className="nav-link active text-black menu" aria-current="page"
                                    href="https://www.hackerrank.com/dashboard">List your Spot</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 searchbar"
                                type="search" placeholder="Search" aria-label="Search" />
                            <li className="nav">
                                <a className="nav-link text-dark city"
                                    href="https://www.hackerrank.com/products/developer-skills-platform/">City</a>
                            </li>


                            <button type="button" className="btn btn-primary signin" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                                Sign in
                            </button>


                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Sign In </h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="container-fluid">
                                                <div className="col">
                                                    <div>
                                                        <label >Name</label>
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
                                            <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
