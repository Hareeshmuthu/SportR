import React from 'react'
import { Link } from "react-router-dom";

function WhatSpot() {
    return (
        <div>
            <div className='whatspothead'>

                <div className='row'>
                    <h1>What is your Spot for?</h1>
                    <p>Make Your Spot with More Footsteps</p>
                </div>
            </div>
            <div className='row whatspotbutton'>
                <div class="card col-4" style={{ width: "18rem", marginRight: "100px" }}>
                    <a href='/listyourspot/forms'><img src="/images/Pictures/ListSpot/Turf.jpeg" class="card-img-top" alt="Turf"></img></a>
                    <h4>Turf</h4>
                </div>
                <div class="card col-4" style={{ width: "18rem", marginRight: "100px" }}>
                    <a href='/listyourspot/forms'><img src="/images/Pictures/ListSpot/Badminton court.jpeg" class="card-img-top" alt="Batmiton Court"></img></a>
                    <h4>Batmiton Court</h4>
                </div>
                <div class="card col-4" style={{ width: "18rem" }}>
                    <a href='/listyourspot/forms'><img src="/images/Pictures/ListSpot/BasketBall Court.webp" class="card-img-top" alt="Basket Ball Court"></img></a>
                    <h4>Basket Ball Court</h4>
                </div>
            </div>
            <div className='row whatspotbutton'>
                <div class="card col-4" style={{ width: "18rem", marginRight: "100px" }}>
                    <a href='/listyourspot/forms'><img src="/images/Pictures/ListSpot/GYM.webp" class="card-img-top" alt="Gym"></img></a>
                    <h4>Gym</h4>
                </div>
                <div class="card col-4" style={{ width: "18rem", marginRight: "100px" }}>
                    <a href='/listyourspot/forms'><img src="/images/Pictures/ListSpot/Cricket Nets1.jpeg" class="card-img-top" alt="Cricket Nets"></img></a>
                    <h4>Cricket Nets</h4>
                </div>
                <div class="card col-4" style={{ width: "18rem" }}>
                    <a href='/listyourspot/forms'><img src="/images/Pictures/ListSpot/Swimming Pool.jpeg" class="card-img-top" alt="Swimming Pool"></img></a>
                    <h4>Swimming Pool</h4>
                </div>
            </div>
            <div className='row whatspotbutton'>
                <div class="card col-4" style={{ width: "18rem", marginRight: "100px" }}>
                    <a href='/listyourspot/forms'><img src="/images/Pictures/ListSpot/Saopy Football.avif" class="card-img-top" alt="Soapy FootBall"></img></a>
                    <h4>Soapy FootBall</h4>
                </div>
                <div class="card col-4" style={{ width: "18rem", marginRight: "100px" }}>
                    <a href='/listyourspot/forms'><img src="/images/Pictures/ListSpot/Paint Ball Shooting.png" class="card-img-top" alt="PaintBall Shooting"></img></a>
                    <h4>PaintBall Shooting</h4>
                </div>
                <div class="card col-4" style={{ width: "18rem" }}>
                    <a href='/listyourspot/forms'><img src="/images/Pictures/ListSpot/Anything else2.jpg" class="card-img-top" alt="Anything Else"></img></a>
                    <h4>Anything Else</h4>
                </div>
            </div>
            <div className='col whatspotbutton'>
                <a href='/listyourspot/forms'><button type="button" class="btn btn-danger" style={{ width: "600px", }}>Patner With Us Now</button></a>
            </div>

        </div>
    )
}

export default WhatSpot
