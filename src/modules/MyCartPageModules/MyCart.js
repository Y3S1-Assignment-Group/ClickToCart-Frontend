import React, { Component } from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Payment from "../PaymentModules/Payment";

export class MyCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalAmount: 500,
    };
  }
  render() {
    return (
      <div>
        <div className="card p-5">
          <table className="table table-md ">
            <div className="table-responsive">
              <table className="table align-middle">
                <thead>
                  <th scope="col">Product</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col"></th>
                </thead>
                <tbody>
                  <tr>
                    <td>IPhone 12 ( 25 )</td>
                    <td>2</td>
                    <td>500 USD</td>
                    <td>
                      <button className="btn btn-danger btn-sm">
                        <HighlightOffIcon />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>IPhone 12 ( 25 )</td>
                    <td>2</td>
                    <td>500 USD</td>
                    <td>
                      <button className="btn btn-danger btn-sm">
                        <HighlightOffIcon />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <h5 className="font-weight-bold">Total</h5>
                    </td>
                    <td>
                      <h5 className="font-weight-bold">1500 USD </h5>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <Payment totalAmount={this.state.totalAmount} />
            </div>
          </table>
        </div>
      </div>
    );
  }
}

export default MyCart;
