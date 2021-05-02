import React, {Component} from 'react';
import Navbar from "../components/common/Navbar/Navbar";
import AdminOptionSelection from "../modules/AdminPageModules/AdminOptionSelections/AdminOptionSelection";
import AdminItemTable from "../modules/AdminPageModules/AdminItemTable/AdminItemTable";
import Footer from "../components/common/Footer/Footer";

class AdminPage extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <AdminOptionSelection/>
                <AdminItemTable/>
                <Footer/>
            </div>
        );
    }
}

export default AdminPage;