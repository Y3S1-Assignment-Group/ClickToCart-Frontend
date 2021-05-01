import React, { Component } from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Payment from "../PaymentModules/Payment";
import { connect } from "react-redux";
import * as actions from "../../actions/CartActions";

export class MyCart extends Component {
  constructor(props) {
    super(props);
    this.deleteItemFromCartFunc = this.deleteItemFromCartFunc.bind(this);
    this.state = {};
  }

  componentDidMount() {
    this.props.getItemFromCart(this.props.user.id);
    this.props.deleteItemFromCart(this.props.cartId, ()=>{

    },()=>{

    });
  }

  deleteItemFromCartFunc(id) {

    this.props.deleteItemFromCart(id,
      () => {
      },
      () => {
      });
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
                  {this.props.cartList.map((cartItem) => {
                    return (
                      <tr>
                        <td>{cartItem.itemName}</td>
                        <td>{cartItem.qty}</td>
                        <td>{cartItem.totalPrice}</td>
                        <td>
                          <button className="btn btn-danger btn-sm" onClick={()=>this.deleteItemFromCartFunc(cartItem.id)}>
                            <HighlightOffIcon />
                          </button>
                        </td>
                      </tr>
                    );
                  })}

                  <tr>
                    <td></td>
                    <td>
                      <h5 className="font-weight-bold">Total</h5>
                    </td>
                    <td>
                      <h5 className="font-weight-bold">
                        {this.props.cartList.reduce(
                          (accumulator, current) =>
                            accumulator + current.totalPrice,
                          0
                        )}
                        USD
                      </h5>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <Payment
                totalAmount={this.props.cartList.reduce(
                  (accumulator, current) => accumulator + current.totalPrice,
                  0
                )}
              />
            </div>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartList: state.cartReducer.cartList,
  user: state.authReducer.user,
});

const mapActionToProps = {
  getItemFromCart: actions.getItemFromCart,
  deleteItemFromCart: actions.deleteItemFromCart,
};

export default connect(mapStateToProps, mapActionToProps)(MyCart);
