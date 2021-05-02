import React, {Component} from 'react';
import Navbar from "../components/common/Navbar/Navbar";
import SellerOptionSelection from "../modules/AdminPageModules/SellerOptionSelections/SellerOptionSelection";
import Footer from "../components/common/Footer/Footer";

class SellerPage extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <SellerOptionSelection/>
                <Footer/>
            </div>
        );
    }
}

export default SellerPage;