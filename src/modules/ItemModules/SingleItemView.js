import React, { Component } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { connect } from "react-redux";
import * as actions from "../../actions/ItemActions";
import * as cartActions from "../../actions/CartActions";

/* SingleItemView */
class SingleItemView extends Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.state = {
      qty: 1,
      processStatus: false,
      processStatusAlert: "",
      processStatusMessage: "",
    };
  }

  componentDidMount() {
    this.props.fetchItemById(this.props.productID);
  }

  add() {
    this.setState({
      qty: this.state.qty + 1,
    });
  }

  subtract() {
    this.setState({
      qty: this.state.qty - 1,
    });
  }

  addItemToCartFunction() {
    this.setState({
      processStatus: true,
      processStatusAlert: "alert alert-warning",
      processStatusMessage: "Please Wait...",
    });

    const newItem = {
      price: this.props.singleItem.price,
      quantity: this.state.qty,
      user: {
        id: this.props.user.id,
      },
      itemId: this.props.singleItem.id,
    };

    this.props.addItemToCart(
      newItem,
      () => {
        this.setState({
          processStatusAlert: "alert alert-success",
          processStatusMessage: "Added to cart successfully",
        });
        window.location = "/cart";
      },
      () => {
        this.setState({
          processStatusAlert: "alert alert-danger",
          processStatusMessage: "Something went wrong... Please try again",
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-12">
                <img
                  src={this.props.singleItem.imgLink}
                  className="img-fluid"
                  alt="singleItemImg"
                />
              </div>
              <div className="col-lg-12">
                <div className="row mt-2 text-center">
                  <div className="col-lg-4 col-md-3 p-2"></div>
                  <div className="col-lg-4 col-md-3 p-2">
                    <button
                      className="btn btn-warning btn-lg"
                      onClick={() => {
                        this.addItemToCartFunction();
                      }}
                    >
                      ADD TO CART <ShoppingCartIcon />
                    </button>
                  </div>
                  <div className="col-lg-4 col-md-3 p-2"></div>
                  {this.state.processStatus ? (
                    <div className={this.state.processStatusAlert} role="alert">
                      {this.state.processStatusMessage}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row mb-2">
              <div className="col-lg-10 col-md-10 col-sm-12">
                <h1>{this.props.singleItem.name}</h1>
              </div>
              <hr />
            </div>
            <div className="row mb-2">
              <div className="col-lg-3 col-md-3 col-sm-3 text-muted">Brand</div>
              <div className="col-lg-8 col-md-8 col-sm-8 text-left">
                {this.props.singleItem.brand}
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-lg-3 col-md-3 col-sm-3 text-muted">RAM</div>
              <div className="col-lg-8 col-md-8 col-sm-8 text-left">
                {this.props.singleItem.ram} GB
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-lg-3 col-md-3 col-sm-3 text-muted">
                Storage
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 text-left">
                {this.props.singleItem.storage} GB
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-lg-3 col-md-3 col-sm-3 text-muted">Stock</div>
              <div className="col-lg-8 col-md-8 col-sm-8 text-left">
                {this.props.singleItem.stock}
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-lg-3 col-md-3 col-sm-3 text-muted">
                Seller
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 text-left">
                {this.props.singleItem.sellarName}
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-lg-3 col-md-3 col-sm-3 text-muted">Price</div>
              <div className="col-lg-8 col-md-8 col-sm-8 text-left">
                {this.props.singleItem.price}
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-lg-3 col-md-3 col-sm-3 text-muted">
                Description
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 text-left">
                {this.props.singleItem.description}
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-lg-3 col-md-3 p-2">
                <button className="btn btn-warning" onClick={this.add}>
                  +
                </button>{" "}
                <button
                  className="btn btn-warning"
                  onClick={this.subtract}
                  disabled={this.state.qty <= 1}
                >
                  -
                </button>
              </div>
              <div className="col-sm-6 mt-3">Quantity: {this.state.qty}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  singleItem: state.itemReducer.singleItem,
  user: state.authReducer.user,
});

const mapActionToProps = {
  fetchItemById: actions.fetchItemById,
  addItemToCart: cartActions.addItemToCart,
};

export default connect(mapStateToProps, mapActionToProps)(SingleItemView);
