import React, { Component } from "react";
import Navbar from "../components/common/Navbar/Navbar";
import Footer from "../components/common/Footer/Footer";
import HomeHeroCarousel from "../modules/HomePageModules/HomeHeroSection/HomeHeroCarousel";
import ExploreShoppingCart from "../modules/ExplorePageModules/ExploreShoppingCart/ExploreShoppingCart";
class ExplorePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <ExploreShoppingCart />
        </div>
        <Footer />
      </div>
    );
  }
}

export default ExplorePage;
