import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/ItemActions";
import { Link } from "react-router-dom";
import "./ShoppingCart.css";

export class ShoppingCart extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.props.fetchAllItems();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row mb-5">
              {this.props.itemList.map((item, index) => {
                return (
                  <div
                    className="col-lg-4 col-md-4 col-sm-12 p-3 ShoppingCartSingleItemCol"
                    key={index}
                  >
                    <Link to={`/product/${item.id}`}>
                      <div className="card ShoppingItemCard">
                        <img
                          className="card-img-top ShoppingItemImage"
                          src={item.imgLink}
                          alt={`cartImg${item.id}`}
                        />
                        <div className="card-body text-center">
                          <h5 className="card-title text-dark">{item.name}</h5>
                          <div className="row">
                            <div className="col-md-6 text-center">
                              <p className="card-text ">
                                <span className="priceTag">
                                  {item.price}USD
                                </span>
                              </p>
                            </div>
                            <div className="col-md-6 ">
                              <p className="card-text text-secondary">
                                {item.sellarName}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  itemList: state.itemReducer.itemList,
});

const mapActionToProps = {
  fetchAllItems: actions.fetchAllItems,
};

export default connect(mapStateToProps, mapActionToProps)(ShoppingCart);
