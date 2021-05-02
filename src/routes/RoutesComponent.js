import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExplorePage from "../pages/ExplorePage";
import HomePage from "../pages/HomePage";
import AdminPage from "../pages/AdminPage";
import AdminAddItemsPage from "../pages/AdminAddItemsPage";
import AdminUpdateItemsPage from "../pages/AdminUpdateItemsPage";
import AdminViewItemPage from "../pages/AdminViewItemPage";
import MyCartPage from "../pages/MyCartPage";
import ViewItemPage from "../pages/ViewItemPage";

class RoutesComponent extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/admin" exact component={AdminPage} />
            <Route path="/admin/additem" exact component={AdminAddItemsPage} />
            <Route path="/admin/updateitem/:itemid" exact component={AdminUpdateItemsPage} />
            <Route path="/admin/viewitems" exact component={AdminViewItemPage} />

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
