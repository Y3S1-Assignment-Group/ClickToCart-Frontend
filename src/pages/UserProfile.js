import React, { Component } from 'react';
import Navbar from '../components/common/Navbar/Navbar';
import Footer from '../components/common/Footer/Footer';
import UserProfileModule from '../modules/UserModules/UserProfileModule';

class UserProfile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <UserProfileModule />
        <Footer />
      </div>
    );
  }
}

export default UserProfile;
