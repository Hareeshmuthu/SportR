import React from 'react'
import { Link } from "react-router-dom";

function DownBar() {
    return (
        <>
            <div class="downbar">
                <div class="list downbar1">
                    <img src="images/Pictures/Ti-Icon.png" width="30px" />
                    <p>List Your Spot !</p>
                    <p> Make your Spot with the more footsteps</p>
                    <a href='/listyourspot/forms'><button type="button" class="btn btn-danger" style={{ width: "350px", height: "30px", }}>List
                        Today and Patner With Us</button></a>
                </div>
                <hr />
                <div class="social col d-flex justify-content-center">

                    <button type="button" class="btn btn-light downbarbutton"><i
                        class="fa-brands fa-facebook-f fa-s"></i></button>
                    <button type="button" class="btn btn-light downbarbutton"><i
                        class="fa-brands fa-instagram fa-s"></i></button>
                    <button type="button" class="btn btn-light downbarbutton"><i
                        class="fa-brands fa-youtube fa-s"></i></button>
                    <button type="button" class="btn btn-light downbarbutton"><i
                        class="fa-brands fa-linkedin"></i></button>
                    <p style={{ paddingLeft: "850px" }}>With Love ❤️ Made in Coimbatore</p>
                </div>
                <div class="social col d-flex justify-content-left pl-2 quicklinks">
                    <h5>Quick Links :</h5>
                    <Link to="/">Home</Link>
                    <a>Sports</a>
                    <a>Fun Activities</a>
                    <a>Build Team</a>
                    <Link to="/listyourspot">Partner Us</Link>
                </div>
            </div>
        </>
    )
}

export default DownBar
