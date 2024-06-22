import AddBar from './AddBar';
import NavBar from './NavBar';
import DownBar from './DownBar';
import React from 'react'
import WhatSpot from './WhatSpot';
import ServicesOffer from './ServicesOffer';
import NavBar2 from './NavBar2';


function ListSpot() {
    return (
        <div style={{backgroundColor:"black"}}>
            <NavBar />
            <NavBar2/>
            <AddBar/>
            <WhatSpot/>
            <ServicesOffer/>
            <DownBar/>           
        </div>
    )
}

export default ListSpot
