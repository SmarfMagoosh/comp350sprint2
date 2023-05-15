import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "react-router-dom";
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Register from "./pages/Register"
import Login from "./pages/Login"
import NavbarComp from './component/navigation/NavbarComp';

function App() {
  return (

  <div className="App">

      <div className ="App">
       <NavbarComp/>
       <BrowserRouter>
          <Routes>
               <Route path="/Login" element={<Login/>}></Route>
               <Route exact path="/Register" element={<Register/>}></Route>
          </Routes>
       </BrowserRouter>
       </div>
  </div>

    );

}

export default App;
