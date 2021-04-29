import React from "react";
import Stripe from "react-stripe-checkout";
import axios from "axios";

export default class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { amount: 120 };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleToken(token, address) {
    console.log({ token, address });
    await axios
      .post(
        "http://localhost:8080/payment/charge",
        {},
        {
          headers: {
            token: token.id,
            amount: 120,
          },
        }
      )
      .then(() => {
        console.log("backend called");
      });
  }

  render() {
    return (
      <div style={{ borderRadius: "25px" }}>
        <Stripe
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
          token={this.handleToken}
          amount
        />
      </div>
    );
  }
}
