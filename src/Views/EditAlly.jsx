import React from 'react';
import Header from '../components/Header/Header'
import EditAlly from '../components/EditAlly/EditAlly';
import Footer from '../components/Footer/Footer'

const NewAlly = () => {
  return (
    <div>
      <Header />
      <div>
          <EditAlly />
      </div>
      <Footer />
    </div>
  );
}

export default NewAlly;