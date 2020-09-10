import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import logo from '../../img/Logo_White.svg';
// import Navbar from 'react-bootstrap/Navbar';


function Nav() {
  return (
<nav className="nav-area" >
            <Link to = "/">
            <div class="col-12 col-md-6 text-center pt-3">
              <img id="nav-logo" src={logo} />
            </div>
            </Link>
            
              
                
        </nav>

      
    );
}


export default Nav;
