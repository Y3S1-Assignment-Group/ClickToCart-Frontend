import React, { Component } from 'react';
import Navbar from "../components/common/Navbar/Navbar";
import ItemModules from "../modules/ItemModules/SingleItemView";
import Footer from "../components/common/Footer/Footer";

class ViewItemPage extends Component {
    render() {
        return (
            <div>
               <Navbar /> 
               <ItemModules />
               <Footer />  
            </div>
        );
    }
}

export default ViewItemPage;