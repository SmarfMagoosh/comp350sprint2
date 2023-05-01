import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Register from "./pages/Register"
import Login from "./pages/Login"
import NavbarComp from './component/navigation/NavbarComp';
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <div className ="App">
     <NavbarComp/>
     <BrowserRouter>
        <Routes>
             <Route path="/Login" element={<Login/>}></Route>
             <Route exact path="/Register" element={<Register/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
