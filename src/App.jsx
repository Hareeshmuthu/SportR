import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import "bootstrap/dist/css/bootstrap.min.css"
import AddBar from './AddBar';
import CheckSpot from './CheckSpot';
import NearBy from './NearBy';
import BuildTeam from './BuildTeam';

function App() {
  return (
    <>
    <div style={{backgroundColor:"#c3bbb0"}}>
      
    <NavBar/>
    <AddBar/>
    <CheckSpot/>
    <NearBy/>
    {/* <BuildTeam/> */}
    </div>
  
    </>
  );
}
export default App;
