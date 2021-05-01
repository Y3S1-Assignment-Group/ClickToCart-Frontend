import React, { Component } from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Payment from "../PaymentModules/Payment";
import { connect } from "react-redux";
import * as actions from "../../actions/CartActions";
import { Link } from "react-router-dom";

export class MyCart extends Component {
  constructor(props) {
    super(props);
    this.calculateTotalAmount = this.calculateTotalAmount.bind(this)
    this.state = {
      totalAmount: 0,
    };
  }

  componentDidMount(){
    this.props.getItemFromCart(this.props.user.id);
  }

  calculateTotalAmount(){

    let total = 0;

    this.props.cartList.forEach((cartItem)=>{
      total = total + cartItem.totalPrice
    })

    return total;

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
                 { this.props.cartList.map(cartItem=>{
                   return(
                    <tr>
                    <td>{cartItem.itemName}</td>
                    <td>{cartItem.qty}</td>
                    <td>{cartItem.totalPrice}</td>
                    <td>
                      <button className="btn btn-danger btn-sm">
                        <HighlightOffIcon />
                      </button>
                    </td>
                  </tr>
                   )
                 })}
    
     
                  <tr>
                    <td></td>
                    <td>
                      <h5 className="font-weight-bold">Total</h5>
                    </td>
                    <td>
                      <h5 className="font-weight-bold">{this.state.totalAmount}USD </h5>
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

const mapStateToProps = (state) => ({
  cartList: state.cartReducer.cartList,
  user:state.authReducer.user
});

const mapActionToProps = {
  getItemFromCart: actions.getItemFromCart,
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(MyCart);
