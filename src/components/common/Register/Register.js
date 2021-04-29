import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/AuthActions";
import "./registerstyle.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.onRegister = this.onRegister.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.state = {
      username: "",
      email: "",
      password: "",
      userRole: "",
      processStatus: false,
      processStatusAlert: "",
      processStatusMessage: "",
    };
  }

  onValueChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onRegister(e) {
    e.preventDefault();

    this.setState({
      processStatus: true,
      processStatusAlert: "alert alert-warning",
      processStatusMessage: "Please Wait...",
    });

    const role = [this.state.userRole];
    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      role,
    };

    this.props.registerUser(
      newUser,
      () => {
        this.setState({
          processStatusAlert: "alert alert-success",
          processStatusMessage: "Account created successfully",
        });
      },
      () => {
        this.setState({
          processStatusAlert: "alert alert-danger",
          processStatusMessage:
            "Something went wrong. Please try again with different username",
        });
      }
    );
  }

  render() {
    return (
      <div>
        <div className="container">
          <form onSubmit={this.onRegister}>
            <div class="form-group formDiv">
              {this.state.processStatus ? (
                <div class={this.state.processStatusAlert} role="alert">
                  {this.state.processStatusMessage}
                </div>
              ) : (
                ""
              )}
            </div>
            <div class="form-group formDiv">
              <label>Username</label>
              <input
                type="text"
                name="username"
                class="form-control"
                placeholder="Enter username"
                onChange={(e) => {
                  this.onValueChange(e);
                }}
              />
            </div>
            <div class="form-group formDiv">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                class="form-control"
                placeholder="Enter email"
                onChange={(e) => {
                  this.onValueChange(e);
                }}
              />
              <small class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group formDiv">
              <label>Password</label>
              <input
                type="password"
                name="password"
                class="form-control"
                placeholder="Password"
                onChange={(e) => {
                  this.onValueChange(e);
                }}
              />
            </div>
            <div class="form-group formDiv">
              <label>Account Type</label>
              <select
                class="form-control"
                name="userRole"
                onChange={(e) => {
                  this.onValueChange(e);
                }}
              >
                <option value="user">User</option>
                <option value="mod">Seller</option>
              </select>
            </div>
            <div class="form-group formDiv">
              <button type="submit" class="btn btn-warning">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapActionToProps = {
  registerUser: actions.register,
};

export default connect(null, mapActionToProps)(Register);
