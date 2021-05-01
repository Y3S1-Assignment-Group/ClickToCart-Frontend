import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExplorePage from "../pages/ExplorePage";
import HomePage from "../pages/HomePage";
import MyCartPage from "../pages/MyCartPage";
import ViewItemPage from "../pages/ViewItemPage";

class RoutesComponent extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cart" exact component={MyCartPage} />
          <Route path="/explore" exact component={ExplorePage} />
          <Route path="/product/:productid" exact component={ViewItemPage} />
        </Switch>
      </Router>
    );
  }
}

export default RoutesComponent;
