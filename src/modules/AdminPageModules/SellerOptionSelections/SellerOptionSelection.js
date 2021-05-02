import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ItemsPieChart from "../SellerCharts/ItemPieChart/ItemsPieChart";
import ItemBarGraph from "../SellerCharts/ItemBarGraph/ItemBarGraph";
import addItemsImg from "./img/iphone-12-pro-family-hero.png";


class SellerOptionSelection extends Component {
    render() {
        return (
            <div>
                <div className="row  m-4">

                    <div className="col-lg-4 col-md-4 col-sm-12 mt-4">
                        <div className="card bg-light " style={{borderRadius:"20px"}}>
                            <div className="card-body">
                                <h5 className="card-title">ADD ITEMS</h5>
                                <p className="card-text">Click below to add a new item to your seller account</p>
                                <Link to="/seller/additem" className="btn btn-primary">Add items</Link>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-4" >
                        <div className="card bg-light" style={{borderRadius:"20px"}}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as </p>
                                <Link to="/" className="btn btn-primary">Update Profile</Link>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-4" >
                        <div className="card bg-light" style={{borderRadius:"20px"}}>
                            <div className="card-body">
                                <h5 className="card-title">MANAGE ITEMS</h5>
                                <p className="card-text">Click below to view/update/delete items or to add stock</p>
                                <Link to="/seller/viewitems" className="btn btn-primary">View Items</Link>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row  m-4">
                    <div className="col-lg-8 col-md-4 col-sm-12 mt-4" >
                        <div className="card" style={{borderRadius:"20px",backgroundColor:"#E7E9EB"}} >
                            <div className="card-body">
                                <ItemBarGraph/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-4" >
                        <div className="card" style={{borderRadius:"20px"}}>
                            <div className="card-body">
                                <ItemsPieChart/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SellerOptionSelection;