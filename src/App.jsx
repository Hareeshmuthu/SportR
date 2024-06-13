import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ListSpot from './ListSpot';
import Forms from './Forms';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          {/* <Route path='/funactivities' element={}></Route> */}
          <Route path='/listyourspot' element={<ListSpot/>}></Route>
          <Route path='/listyourspot/forms' element={<Forms/>}></Route>
          {/* <Route path='/signin' element={}></Route> */}
          {/* <Route path='/nearbygrounds' element={}></Route> */}
          {/* <Route path='/createnow' element={}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
