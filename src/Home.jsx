import AddBar from './AddBar';
import NavBar from './NavBar';
import CheckSpot from './CheckSpot';
import NearBy from './NearBy';
import BuildTeam from './BuildTeam';
import DownBar from './DownBar';
import React from 'react'


function Home() {
    return (
        <div style={{backgroundColor:"#c3bbb0"}}>
            <NavBar />
            <AddBar/>
            <CheckSpot/>
            <NearBy/>
            <BuildTeam/>
            <DownBar/>
            
        </div>
    )
}

export default Home
