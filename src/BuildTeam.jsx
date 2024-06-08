import React from 'react'

function BuildTeam() {
  return (
    <>
        <div class="buildteamheading" id="buildteam">
            <h2>Build your Team </h2>
        </div>
        <div class="buildteam">
            <div class="col-5 buildteam1">
                <h3>Create a Play Field</h3>
                <p>Gather your squad, showcase your skills, and
                    let<br/> the games begin!!</p>
                <button type="button" class="btn btn-primary">Create Now</button>
            </div>
            <div class="col-5 buildteam1">
                <h3 >Join a Team</h3>
                <p>Join your Mates, showcase your skills, and let
                    <br/>the games begin!!
                </p>
                <button type="button" class="btn btn-primary">Join Now</button>
            </div>
        </div>
        
    </>
  )
}

export default BuildTeam
