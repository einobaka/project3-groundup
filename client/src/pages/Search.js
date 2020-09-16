import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "../components/Wrapper"
import Nav from "../components/Nav";
import API from '../utils/API';
import SearchContainer from "../components/SearchContainer"
import SignUpModal from '../components/SignUpModal';
import LoginModal from '../components/LoginModal';
import HistoryCard from '../components/HistoryCard';
import AddModal from '../components/AddModal';
import ShopModal from '../components/AddShop';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shops: []
    }

    this.updateShops = this.updateShops.bind(this);
  }

  updateShops() {
    API.getShopData().then(data => {
      this.setState({ shops: data.data });
      console.log(this.state.shops);
    })
  }

  addDrink(drink) {
    API.addDrink(drink)
  }

  signUpSubmit = (data) => {
    API.signUpSubmit(data).then(window.location.reload());
  };

  loginSubmit = data => {
    API.loginSubmit(data).then(window.location.reload());
    API.signUpSubmit(data).then(console.log(data));
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
            <AddModal 
            updateShops={this.updateShops}
            shops={this.state.shops}
            />
            <ShopModal 
            updateShops={this.updateShops}
            />
            <Wrapper>
              <div class="col-12 col-md-6 mb-5">
                <Nav />
              </div>
              <div class="col-12 col-md-6 mb-5">
                <SearchContainer 
                shops={this.state.shops}
                />
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