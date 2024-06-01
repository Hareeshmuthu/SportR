import React from 'react'

function DownBar() {
    return (
        <>
            <div class="downbar">
                <div class="list downbar1">
                    <img src="images/Pictures/Ti-Icon.png" width="30px" />
                    <p>List Your Spot !</p>
                    <p> Make your Spot with the more footsteps</p>
                    <button type="button" class="btn btn-danger" style={{ width: "350px", height: "30px", }}>List
                        Today and Patner With Us</button>
                </div>
                <hr />
                <div class="social" style={{ marginLeft: "600px", paddingBottom:"30px" }}>

                    <button type="button" class="btn btn-light downbarbutton"><i
                        class="fa-brands fa-facebook-f fa-s"></i></button>
                    <button type="button" class="btn btn-light downbarbutton"><i
                        class="fa-brands fa-instagram fa-s"></i></button>
                    <button type="button" class="btn btn-light downbarbutton"><i
                        class="fa-brands fa-youtube fa-s"></i></button>
                    <button type="button" class="btn btn-light downbarbutton"><i
                        class="fa-brands fa-linkedin"></i></button>
                </div>
            </div>
        </>
    )
}

export default DownBar
