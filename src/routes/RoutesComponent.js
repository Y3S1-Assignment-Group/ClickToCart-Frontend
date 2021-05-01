import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AdminPage from "../pages/AdminPage";
import AdminAddItemsPage from "../pages/AdminAddItemsPage";
import AdminUpdateItemsPage from "../pages/AdminUpdateItemsPage";
import AdminViewItemPage from "../pages/AdminViewItemPage";

class RoutesComponent extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/admin" exact component={AdminPage} />
            <Route path="/admin/additem" exact component={AdminAddItemsPage} />
            <Route path="/admin/updateitem" exact component={AdminUpdateItemsPage} />
            <Route path="/admin/viewitems" exact component={AdminViewItemPage} />

        </Switch>
      </Router>
    );
  }
}

export default RoutesComponent;
