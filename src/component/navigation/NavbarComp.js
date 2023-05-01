import React, { Component } from "react";
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom"
import About from "../../pages/About";
import Home from "../../pages/Home";
import Register from "../../pages/Register";
import View from "../../pages/View";
import "./NavBar.css";

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
            <div>
            <Navbar bg="dark" variant={"dark"} expand="lg">
                <Container>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-filter-square" viewBox="0 0 16 16">
                         <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                         <path d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                       </svg>
                        <a className="navbar-brand nav-link" href="">Scrumlings Scheduler </a>
                        <Nav.Link as={Link} to={"/home"}> Home </Nav.Link>
                        <Nav.Link as={Link} to={"/about"}>My Schedules</Nav.Link>
                        <Nav.Link as={Link} to={"/view"}>Calender View</Nav.Link>
                        <svg xmlns="http://www.w3.org/2000/svg" href = "#" width="35" height="35" fill="white" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                           <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                        </svg>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
            <div>
                <Routes>
                 <Route exact path="/home" element={<Home/>}/>
                 <Route exact path="/about" element={<About/>}/>
                 <Route exact path="/view" element={<View/>}/>
                </Routes>
            </div>
            </Router>
        )
    }
}