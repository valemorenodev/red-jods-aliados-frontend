import React from 'react';
import Header from '../components/Header/Header'
import AdminUser from '../components/AdminUser/AdminUser';
import Footer from '../components/Footer/Footer'

const UserList = () => {
  return (
    <div>
      <Header />
      <div>
        <AdminUser />
      </div>
      <Footer />
    </div>
  );
}

export default UserList;