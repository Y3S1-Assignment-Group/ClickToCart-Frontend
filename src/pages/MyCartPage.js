import React, { Component } from "react";
import Footer from "../components/common/Footer/Footer";
import Navbar from "../components/common/Navbar/Navbar";
import MyCartModule from "../modules/MyCartPageModules/MyCartModule";

class MyCartPage extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#ebebeb" }}>
        <Navbar />
        <MyCartModule />
        <Footer />
      </div>
    );
  }
}

export default MyCartPage;
