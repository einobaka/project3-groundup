import React from "react";
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Nav from "./components/Nav";
import Search from "./pages/Search";

function App() {
  return (
    <div>
      
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/search" component={Search} />
          </Switch>
        </BrowserRouter>
      
      </div>
      
    
  );
}

export default App;
