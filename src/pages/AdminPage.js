import React, {Component} from 'react';
import Navbar from "../components/common/Navbar";
import AdminOptionSelection from "../modules/AdminPageModules/AdminOptionSelections/AdminOptionSelection";
import AdminItemTable from "../modules/AdminPageModules/AdminItemTable/AdminItemTable";

class AdminPage extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <AdminOptionSelection/>
                <AdminItemTable/>
            </div>
        );
    }
}

export default AdminPage;