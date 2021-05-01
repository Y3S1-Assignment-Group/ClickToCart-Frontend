import React, { Component } from "react";
import Navbar from "../components/common/Navbar/Navbar";
import HomeHeroSection from "../modules/HomePageModules/HomeHeroSection/HomeHeroSection";
import ShoppingCart from "../modules/HomePageModules/ShoppingCart/ShoppingCart";
import Footer from "../components/common/Footer/Footer";

export class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <HomeHeroSection />
        <ShoppingCart />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
