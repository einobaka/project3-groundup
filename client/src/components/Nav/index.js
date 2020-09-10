import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import logo from '../../img/Logo_White.svg';
// import Navbar from 'react-bootstrap/Navbar';


function Nav() {
  return (
<nav className="nav-area" >
            <Link to = "/">            
              <img id="nav-logo" src={logo} />            
            </Link>
              
                
        </nav>

      
    );
}


export default Nav;
