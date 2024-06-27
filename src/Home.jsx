import AddBar from "./Poster Content/AddBar";
import NavBar from "./NavBar1 Components/NavBar";
import NavBar1 from "./NavBar2 Components/NavBar1";
import CheckSpot from "./Find Your Spot/CheckSpot";
import NearBy from "./NearBy Content/NearBy";
import BuildTeam from "./Build Your Team Content/BuildTeam";
import DownBar from "./Contact Us/DownBar";
import React from "react";

function Home() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <NavBar />
      <NavBar1 />
      <AddBar />
      <CheckSpot />
      <NearBy />
      <BuildTeam />
      <DownBar />
    </div>
  );
}

export default Home;
