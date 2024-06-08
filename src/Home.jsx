import AddBar from './AddBar';
import NavBar from './NavBar';
import NavBar1 from './NavBar1';
import CheckSpot from './CheckSpot';
import NearBy from './NearBy';
import BuildTeam from './BuildTeam';
import DownBar from './DownBar';
import OnlineSales from './OnlineSales';
import React from 'react'


function Home() {
    return (
        <div style={{backgroundColor:"black"}}>
            <NavBar />
            <NavBar1/>
            <AddBar/>
            <CheckSpot/>
            <NearBy/>
            <BuildTeam/>
            <DownBar/>
            {/* <OnlineSales/> */}
            
            
        </div>
    )
}

export default Home
