import React, { Component } from 'react';
import logo from '../../img/logo.png'
import './style.css';

class Jumbotron extends Component {

  state = {
    counter: "18,287"
  }

  render() {
    return (
        <div class="row" id="jumbotron">
          <div class="col-6">
            <img id="jumbo-logo" src={logo} />
          </div>
          <div class="col-6">
            <div class="row">
              <h1 id="jumbo-text">Coffee lovers served...</h1>
              <h1 id="jumbo-counter">{this.state.counter}</h1>
            </div>
            <div class="row">
              <div class="col-2">
                <button id="login-btn" class="btn button">Login</button>
              </div>
              <div class="col-2">
                <button id="signup-btn" class="btn button">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Jumbotron;
