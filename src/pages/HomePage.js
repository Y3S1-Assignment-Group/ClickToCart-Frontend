import React, { Component } from "react";
import Navbar from "../components/common/Navbar";
import HomeHeroSection from "../modules/HomePageModules/HomeHeroSection/HomeHeroSection";
import ShoppingCart from "../modules/HomePageModules/ShoppingCart/ShoppingCart";

export class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <HomeHeroSection />
        <ShoppingCart />
      </div>
    );
  }
}

export default HomePage;
