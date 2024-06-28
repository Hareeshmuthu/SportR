import AddBar from "./Poster Content/AddBar";
import NavBar from "./NavBar1 Components/NavBar";
import DownBar from "./Contact Us/DownBar";
import React from "react";
import WhatSpot from "./Partner Us/WhatSpot";
import ServicesOffer from "./ServicesOffer";
import NavBar2 from "./Partner Us/NavBar2";

function ListSpot() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <NavBar />
      <NavBar2 />
      <AddBar />
      <WhatSpot />
      <ServicesOffer />
      <DownBar />
    </div>
  );
}

export default ListSpot;
