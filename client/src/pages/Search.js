import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "../components/Wrapper"
import Nav from "../components/Nav";
import API from '../utils/API';
import SearchContainer from "../components/SearchContainer"
import SignUpModal from '../components/SignUpModal';
import LoginModal from '../components/LoginModal';
import HistoryCard from '../components/HistoryCard';

class Search extends Component {

  signUpSubmit = data => {
    API.signUpSubmit(data).then(window.location.reload());
  };

  loginSubmit = data => {
    API.loginSubmit(data).then(window.location.reload());
  };

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
            <Wrapper>
            <div class="col-12 col-md-6 mb-5">
              <Nav />
              </div>
              <div class="col-12 col-md-6 mb-5">
              <SearchContainer />
              </div>
              <div class="col-12 col-md-6 mb-5">
              <HistoryCard />
              </div>
            </Wrapper>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;