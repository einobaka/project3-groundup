import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import SignUpModal from '../components/SignUpModal';
import LoginModal from '../components/LoginModal';
import SearchBar from '../components/SearchBar';
import LatestDrink from '../components/LatestDrink';

class Landing extends Component {

  signUpSubmit = data => {
    console.log(data);
  }

  loginSubmit = data => {
    console.log(data);
  }

  render() {
    return (
      <div>
        <div class="col-12">
          <div class="row">
            <SignUpModal 
            signUpSubmit={this.signUpSubmit}
            />
            <LoginModal 
            loginSumbit={this.loginSubmit}
            />
            <Jumbotron />
          </div>
          <div class="row">
            <div class="col-12">
              <SearchBar />
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6">
              <LatestDrink />
            </div>
            <div class="col-12 col-md-6">
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;