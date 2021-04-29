import React, { Component } from "react";
import "./Navbar.css";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExploreIcon from "@material-ui/icons/Explore";
import LoginPage from "../../../pages/LoginPage";
import RegisterPage from "../../../pages/RegisterPage";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <span
              style={{ fontSize: "30px", fontWeight: "bold", color: "#008775" }}
            >
              CLICK<span style={{ color: "#e36200" }}>TOCART</span>
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse navLinkTab"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto navLinkTab">
              <li className="nav-item active">
                <a
                  className="nav-link navLinkTab"
                  href="/"
                  style={{ color: "#c4026d" }}
                >
                  <HomeIcon />
                  HOME
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link navLinkTab"
                  href="/"
                  style={{ color: "#c4026d" }}
                >
                  <ExploreIcon />
                  EXPLORE
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link navLinkTab"
                  href="/"
                  style={{ color: "#c4026d" }}
                >
                  <ShoppingCartIcon />
                  CART
                </a>
              </li>
            </ul>
            <ul className="navbar-nav mr-auto navLinkTab mr-sm-2">
              <li className="nav-item active p-2">
                <LoginPage />
              </li>

              <li className="nav-item active p-2">
                <RegisterPage />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
