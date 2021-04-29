import React, { Component } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


/* SingleItemView */
class SingleItemView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 0
    };
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.showInfo = this.showInfo.bind(this);
  }

  add() {
    this.setState({
      qty: this.state.qty + 1
    });
    this.props.handleTotal(this.props.price);
  }

  subtract() {
    this.setState({
      qty: this.state.qty - 1
    });
    this.props.handleTotal(-this.props.price);
  }

  showInfo() {
    this.props.handleShow(this.props.info);
  }

  render() {
    return (


      <div className="container">

        <div className="row mt-5">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-12" >
                <img src="https://www.zdnet.com/a/hub/i/2021/01/07/a20ae151-6384-47c4-a75e-802455021c41/apple-iphone-12-best-phones-review.png" className="img-fluid" alt="singleItemImg" />
              </div>
              <div className="col-lg-12">
                <div className="row mt-2 text-center">
                  <div className="col-lg-4 col-md-3 p-2">
                  </div>
                  <div className="col-lg-4 col-md-3 p-2">
                    <button className="btn btn-warning btn-lg">ADD TO CART <ShoppingCartIcon /></button>
                  </div>
                  <div className="col-lg-4 col-md-3 p-2">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row mb-2">
              <div className="col-lg-6 col-md-6 col-sm-12"><h1>IPhone 12</h1></div>
              <hr />
            </div>
            <div className="row mb-2">
              <div className="col-lg-3 col-md-3 col-sm-3 text-muted">Brand</div>
              <div className="col-lg-8 col-md-8 col-sm-8 text-left">APPLE</div>
            </div>
            <div className="row mb-2">
              <div className="col-lg-3 col-md-3 col-sm-3 text-muted">RAM</div>
              <div className="col-lg-8 col-md-8 col-sm-8 text-left">2 GB</div>
            </div>
            <div className="row mb-2">
              <div className="col-lg-3 col-md-3 col-sm-3 text-muted">Storage</div>
              <div className="col-lg-8 col-md-8 col-sm-8 text-left">64 GB</div>
            </div>
            <div className="row mb-2">
              <div className="col-lg-3 col-md-3 col-sm-3 text-muted">Stock</div>
              <div className="col-lg-8 col-md-8 col-sm-8 text-left">100</div>
            </div>
            <div className="row mb-2">
              <div className="col-lg-3 col-md-3 col-sm-3 text-muted">Seller</div>
              <div className="col-lg-8 col-md-8 col-sm-8 text-left">Laser Mobile</div>
            </div>
            <div className="row mb-2">
              <div className="col-lg-3 col-md-3 col-sm-3 text-muted">Price</div>
              <div className="col-lg-8 col-md-8 col-sm-8 text-left">RS.120,00.00</div>
            </div>
            <div className="row mb-2">
              <div className="col-lg-3 col-md-3 col-sm-3 text-muted">Description</div>
              <div className="col-lg-8 col-md-8 col-sm-8 text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</div>
            </div>
            <div className="row mb-2">
              <div className="col-lg-3 col-md-3 p-2">
                <button className="btn btn-warning" onClick={this.add}>
                  +
            </button>{" "}
                <button className="btn btn-warning" onClick={this.subtract} disabled={this.state.qty < 1}>
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




export default SingleItemView;