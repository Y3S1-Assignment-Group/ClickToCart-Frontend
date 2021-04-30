import React, { Component } from "react";
import MyCartNotAvailableImg from "../../assets/img/MyCartPage/login.svg";

export class MyCartNotAvailable extends Component {
  render() {
    return (
      <div>
        <div className="card p-5">
          <div className="container">
            <div className="container text-center">
              <img
                src={MyCartNotAvailableImg}
                alt="notAvailableCart"
                className="img-fluid"
              />
              <h2 className="text-warning">Sorry ! You should login first</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyCartNotAvailable;
