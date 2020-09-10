import React, { Component }  from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "../components/Wrapper"
import Nav from "../components/Nav";

import SearchContainer from "../components/SearchContainer"

// import Jumbotron from '../components/Jumbotron';
// import SignUpModal from '../components/SignUpModal';
// import SearchBar from '../components/SearchBar';
// import LatestDrink from '../components/LatestDrink';

class Search extends Component {

  render() {
    return (
      <div>
        {/* <div class="col-12">
          <div class="row">             */}
            
            <Wrapper>
            <Nav />
            <SearchContainer />
            </Wrapper>
           
                   
           
          {/* </div>
          </div> */}
      </div>
    )
  }
}

export default Search;