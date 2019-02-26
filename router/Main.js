import React, { Component } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './index.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import {Navbar, Nav} from 'react-bootstrap';
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
                <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
            <NavLink className="abc" exact to="/home">Home</NavLink>
            <NavLink className="abc" to="/stuff">Form</NavLink>
            <NavLink className="abc" to="/contact">Contact</NavLink>
            </Nav>
        </Navbar>
            {/* <ul className="header" id='home'>
              <li><NavLink exact to="/home">Home</NavLink></li>
              <li><NavLink to="/stuff">Form</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul> */}
            <div className="content">
              <Route path="/home" component={Home}/>
              <Route path="/stuff" component={Stuff}/>
              <Route path="/contact" component={Contact}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
export default Main;