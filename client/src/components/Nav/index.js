import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import logo from '../../img/Logo_White.svg';
// import Navbar from 'react-bootstrap/Navbar';


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
          <p class="welcome">Welcome, <span class="user"></span>
            <div>
              <button id="login-btn" class="btn button" data-toggle="modal" data-target="#loginModal">Login</button>
              <button id="signup-btn" class="btn button" data-toggle="modal" data-target="#signUpModal">Sign Up</button>
            </div>
            {/* <div class="col-6 col-sm-4 col-lg-3">
              
            </div>
            <div class="col-6 col-sm-4 col-lg-3">
              
            </div> */}
          </p>
        </div>
      </nav>

    );
  }

}


export default Nav;
