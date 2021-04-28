import React, { Component } from "react";
import Navbar from "../components/common/Navbar";
import ShoppingCart from "../modules/HomePageModules/ShoppingCart/ShoppingCart";

export class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ShoppingCart />
      </div>
    );
  }
}

export default HomePage;
