import React, { Component } from 'react';
import logo from '../../img/ground-up.svg'
import './style.css';

class Jumbotron extends Component {

  state = {
    counter: "18,287"
  }

  render() {
    return (
      <div class="row mb-4" id="jumbotron">
        <div class="col">
          <div class="row">
            <div class="col-12 col-md-6 text-center pt-3">
              <img id="jumbo-logo" src={logo} />
            </div>
            <div class="col-12 col-md-6">
              <div class="row pt-5 py-md-5">
                <h1 id="jumbo-text">Coffee lovers served...</h1>
                <h1 id="jumbo-counter">{this.state.counter}</h1>
              </div>
              <div class="row text-center">
                <div class="col-6 col-sm-4 col-lg-3">
                  <button id="login-btn" class="btn button" data-toggle="modal" data-target="#loginModal">Login</button>
                </div>
                <div class="col-6 col-sm-4 col-lg-3">
                  <button id="signup-btn" class="btn button" data-toggle="modal" data-target="#signUpModal">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
