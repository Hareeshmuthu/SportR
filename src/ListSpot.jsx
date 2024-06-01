import AddBar from './AddBar';
import NavBar from './NavBar';
import DownBar from './DownBar';
import React from 'react'
import WhatSpot from './WhatSpot';

function ListSpot() {
    return (
        <div style={{backgroundColor:"#c3bbb0"}}>
            <NavBar />
            <AddBar/>
            <WhatSpot/>
            <DownBar/>
        </div>
    )
}

export default ListSpot
