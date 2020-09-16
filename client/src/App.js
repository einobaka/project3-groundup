import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, BrowserRouter, withRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Search from "./pages/Search";

class App extends Component {
  state = {
    user: {
      username: "",
      _id: ""
    },
    test: "test",
  }

  updateUser = (id, username) => {

    this.setState({
      user: {
        username: username,
        id: id
      }
    })
    console.log(this.state.user)
  }

  render() {
    return (
      <div>

        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={() => <Landing
              updateUser={this.updateUser}
              user={this.state.user}
            />}
            />
            <Route exact path="/search" component={() => <Search
              user={this.state.user}
            />}
            />
          </Switch>
        </BrowserRouter>

      </div>


    );
  }

}

export default App;
