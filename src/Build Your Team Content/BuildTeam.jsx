import React from "react";
import { useRef, useState, useEffect } from "react";

function BuildTeam() {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  return (
    // <>
    //     <div class="buildteamheading" id="buildteam">
    //         <h2>Build your Team </h2>
    //     </div>
    //     <div class="buildteam">
    //         <div class="col-5 buildteam1">
    //             <h3>Create a Play Field</h3>
    //             <p>Gather your squad, showcase your skills, and
    //                 let<br/> the games begin!!</p>
    //             <button type="button" class="btn btn-primary">Create Now</button>
    //         </div>
    //         <div class="col-5 buildteam1">
    //             <h3 >Join a Team</h3>
    //             <p>Join your Mates, showcase your skills, and let
    //                 <br/>the games begin!!
    //             </p>
    //             <button type="button" class="btn btn-primary">Join Now</button>
    //         </div>
    //     </div>

    // </>
    <>
      <div class="buildteamheading" id="buildteam">
        <h2>Build your Team </h2>
      </div>
      <div class="buildteam row" style={{ marginTop: "50px" }}>
        <div class="col-5 buildteam1">
          <h3>Create a Play Field</h3>
          <p>
            Gather your squad, showcase your skills, and let
            <br /> the games begin!!
          </p>
          <button type="button" class="btn btn-primary">
            Create Now
          </button>
        </div>
        <div
          className={`col-5 buildteamp sliding-div ${isVisible ? "slide" : ""}`}
          ref={divRef}
          style={{ marginLeft: "60px", marginTop: "50px" }}
        >
          <p>Make Private or Public Teams and Book your Slot</p>
          <p>Invite Your Friends Create the team now and book your Slot</p>
        </div>

        <div
          className={`col-5 buildteamp sliding-div ${isVisible ? "slide" : ""}`}
          style={{ marginLeft: "90px", marginTop: "70px" }}
        >
          <p>Make Private or Public Teams and Book your Slot</p>
          <p>Invite Your Friends Create the team now and book your Slot</p>
        </div>
        <div class="col-5 buildteam1" style={{ marginTop: "20px" }}>
          <h3>Join a Team</h3>
          <p>
            Join your Mates, showcase your skills, and let
            <br />
            the games begin!!
          </p>
          <button type="button" class="btn btn-primary">
            Join Now
          </button>
        </div>
      </div>
    </>
  );
}

export default BuildTeam;
