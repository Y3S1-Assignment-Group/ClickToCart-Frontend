import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class AdminOptionSelection extends Component {
    render() {
        return (
            <div>
                <div className="row  m-4">

                    <div className="col-lg-4 col-md-4 col-sm-12 mt-4">
                        <div className="card" style={{borderRadius:"20px"}}>
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a
                                    natural lead-in to additional content. This content is a little bit longer.</p>
                                <Link to="/admin/additem" className="btn btn-primary">Add items</Link>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-4" >
                        <div className="card" style={{borderRadius:"20px"}}>
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a
                                    natural lead-in to additional content. This content is a little bit longer.</p>
                                <Link to="/" className="btn btn-primary">Update Profile</Link>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-4" >
                        <div className="card" style={{borderRadius:"20px"}}>
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a
                                    natural lead-in to additional content. This content is a little bit longer.</p>
                                <Link to="/admin/viewitems" className="btn btn-primary">View Items</Link>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row  m-4">
                    <div className="col-lg-8 col-md-4 col-sm-12 mt-4" >
                        <div className="card" style={{borderRadius:"20px",backgroundColor:"#E7E9EB"}} >
                            <div className="card-body">


                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-4" >
                        <div className="card" style={{borderRadius:"20px"}}>
                            <div className="card-body">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminOptionSelection;