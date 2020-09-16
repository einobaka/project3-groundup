import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import logo from '../../img/Logo_White.svg';
import Welcome from "../Welcome"
import Navbar from 'react-bootstrap/Navbar';

class Nav extends Component {

  render() {
    return (
      <nav className="nav-area" >
        <Link to="/">
          <div class="col-12 col-md-6 text-center pt-3">
            <img id="nav-logo" src={logo} />
          </div>
        </Link>
        <div class="navbar-header">
            <Welcome />
            <div class="col-6 col-sm-4 col-lg-3">
            </div>
            <div class="col-6 col-sm-4 col-lg-3">
            </div>
        </div>
      </nav>

    );
  }

}


export default Nav;
