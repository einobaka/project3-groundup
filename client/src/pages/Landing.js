import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import SignUpModal from '../components/SignUpModal';
import LoginModal from '../components/LoginModal';
import SearchBar from '../components/SearchBar';
import LatestDrink from '../components/LatestDrink';
import TopShops from '../components/TopShops';
import API from '../utils/API';
import { withRouter } from "react-router-dom";

class Landing extends Component {


  signUpSubmit = data => {
    API.signUpSubmit(data).then(window.location.href="/search")
  };

  loginSubmit = data => {
    API.loginSubmit(data).then((res) => {
      console.log(res);
      this.props.updateUser(res.data._id, res.data.username)
      this.props.history.push("/search");
      
    }).catch(err => {
      alert("Incorrect username or password");
    })
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
            loginSubmit={this.loginSubmit}
          />
          <Jumbotron />
        </div>
        <div class="row">
          <div class="col-12">
            <SearchBar />
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6 mb-5">
            <LatestDrink />
          </div>
          <div class="col-12 col-md-6 mb-5">
            <TopShops />
          </div>
        </div>
      </div>
    </div>
  )
}
}

export default withRouter(Landing);
