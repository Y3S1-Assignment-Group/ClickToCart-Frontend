import React, {Component} from 'react';
import Navbar from "../components/common/Navbar/Navbar";
import Footer from "../components/common/Footer/Footer";
import {connect} from "react-redux";
import * as actions from "../actions/ItemActions";
import Icon from '@material-ui/core/Icon';
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import UpdateStockModal from "../modules/AdminPageModules/UpdateStockModal/UpdateStockModal";
import UpdateItem from "../modules/AdminPageModules/UpdateItem/UpdateItem";


class AdminViewItemPage extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this)
        this.toggleUpdate = this.toggleUpdate.bind(this)
        this.state={
            modal:false,
            modalUpdate:false,
            singleItem: "",
        }
    }

    componentDidMount() {
        this.props.fetchAllItemsBySellarID(this.props.user.id);
    }

    toggle() {
        this.setState({ modal: !this.state.modal });
    }
    toggleUpdate() {
        this.setState({ modalUpdate: !this.state.modalUpdate });
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="card m-4 " >
                    <div className="card-body">
                        <table className="table table-borderless">
                            <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Brand</th>
                                <th scope="col">Sellar</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Ram</th>
                                <th scope="col">Update</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Add stock</th>

                            </tr>
                            </thead>
                            <tbody>
                            {this.props.sellarItemList.map((singleItem, index) => {
                                return (
                                    <tr>
                                        <th scope="row">{singleItem.id}</th>
                                        <td>{singleItem.name}</td>
                                        <td>{singleItem.brand}</td>
                                        <td>{singleItem.sellarName}</td>
                                        <td>{singleItem.stock}</td>
                                        <td>{singleItem.ram}</td>
                                        <td>
                                            <button type="button" className="btn btn-outline-info"
                                                    onClick={() => {
                                                        this.setState({
                                                            singleItem:singleItem
                                                        });
                                                        this.toggleUpdate()}}
                                                        >UPDATE</button>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-outline-danger" onClick={()=>{
                                                this.props.deleteItem(singleItem.id,()=>{

                                                },()=>{

                                                });
                                            }}>DELETE</button>
                                        </td>
                                        <td>
                                            <button onClick={() => {
                                                this.setState({
                                                    singleItem:singleItem
                                                });
                                                this.toggle()
                                            }}
                                            className="bg-transparent border-0">
                                                <Icon className="fa fa-plus-circle" color="secondary" />
                                            </button>


                                        </td>
                                    </tr>
                                );
                            })}


                            </tbody>
                        </table>
                    </div>
                    {/* <!-- Modal For Updating stock--> */}
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>
                            UPDATE STOCK
                        </ModalHeader>
                        <ModalBody>
                            <UpdateStockModal singleItem={this.state.singleItem}/>
                        </ModalBody>
                    </Modal>
                    {/* <!--Modal For Updating Stock end--> */}

                    {/* <!-- Modal For Updating Item--> */}
                    <Modal isOpen={this.state.modalUpdate} toggle={this.toggleUpdate}>
                        <ModalHeader toggle={this.toggleUpdate}>
                            UPDATE ITEM
                        </ModalHeader>
                        <ModalBody>
                            <UpdateItem singleItem={this.state.singleItem}/>
                        </ModalBody>
                    </Modal>
                    {/* <!--Modal For Updating Item End--> */}
                </div>
                <Footer/>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    user: state.authReducer.user,
    sellarItemList:state.itemReducer.sellarItemList
});

const mapActionToProps = {
    fetchAllItemsBySellarID:actions.fetchAllItemsBySellarID,
    deleteItem:actions.deleteItem,
};

export default connect(mapStateToProps, mapActionToProps)(AdminViewItemPage);
