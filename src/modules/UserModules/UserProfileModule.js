import React, { Component } from 'react';
import { connect } from 'react-redux';
import user from '../../assets/img/UserProfilePage/user.png';
import Payment from '../PaymentModules/Payment';
import * as actions from '../../actions/CartActions';

class UserProfileModule extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getPayedItemsFromCart(this.props.user.id);
  }

  render() {
    return (
      <div className='container mt-4'>
        <h2>
          <center>My Profile</center>
        </h2>
        <div className='row p-5'>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <img
              src='https://kittyinpink.co.uk/wp-content/uploads/2016/12/facebook-default-photo-male_1-1.jpg'
              alt='logo'
              style={{ width: '150px', height: '150px' }}
            />
          </div>
          <div className='col-lg-8 col-md-8 col-sm-12 mt-5'>
            <div className='row mb-2'>
              <div className='col-lg-4 col-md-4 col-sm-6 text-muted '>Name</div>
              <div className='col-lg-8 col-md-8 col-sm-6 '>
                {this.props.user.username}
              </div>
            </div>
            <div className='row mb-2'>
              <div className='col-lg-4 col-md-4 col-sm-6 text-muted '>
                Email
              </div>
              <div className='col-lg-8 col-md-8 col-sm-6 '>
                {this.props.user.email}
              </div>
            </div>
          </div>
        </div>
        <div class='card bg-warning'>
          <div class='card-body mt-2'>
            <div className='row mb-2'>
              <table className='table table-md table-responsive'>
                <div className='table-responsive'>
                  <table className='table align-middle'>
                    <thead>
                      <th scope='col'>Product</th>
                      <th scope='col'>Quantity</th>
                      <th scope='col'>Price</th>
                      <th scope='col'>Purchased Date</th>
                      <th scope='col'></th>
                    </thead>
                    <tbody>
                      {this.props.payedCartList.map((cartItem) => {
                        return (
                          <tr>
                            <td>{cartItem.itemName}</td>
                            <td>{cartItem.qty}</td>
                            <td>{cartItem.totalPrice}</td>
                            <td>{cartItem.modifiedDate}</td>
                          </tr>
                        );
                      })}

                      <tr>
                        <td></td>
                        <td>
                          <h5 className='font-weight-bold'>Total</h5>
                        </td>
                        <td>
                          <h5 className='font-weight-bold'>
                            {this.props.payedCartList.reduce(
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
                </div>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  payedCartList: state.cartReducer.payedCartList,
  user: state.authReducer.user,
});

const mapActionToProps = {
  getPayedItemsFromCart: actions.getPayedItemsFromCart,
};
export default connect(mapStateToProps, mapActionToProps)(UserProfileModule);
