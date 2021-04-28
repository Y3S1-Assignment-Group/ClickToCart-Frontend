import React, { Component } from "react";
import HomeHeroCarousel from "./HomeHeroCarousel";

class HomeHeroSection extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-8">
            <HomeHeroCarousel />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeHeroSection;
