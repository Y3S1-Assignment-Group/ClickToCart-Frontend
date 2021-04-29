import React, { Component } from "react";

class SellerLogin extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="container">
            <form>
              <div class="form-group formDiv">
                <label>Username</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter username"
                />
              </div>
              <div class="form-group formDiv">
                <label>Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              <div class="form-group formDiv">
                <button type="submit" class="btn btn-warning">
                  LOGIN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SellerLogin;
