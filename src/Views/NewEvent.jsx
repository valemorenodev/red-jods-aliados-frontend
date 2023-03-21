import React from 'react';
import Header from '../components/Header/Header'
import NewEvent from '../components/NewEvent/NewEvent'
import Footer from '../components/Footer/Footer'

const NewAlly = () => {
  return (
    <div>
      <Header />
      <div>
          <NewEvent />
      </div>
      <Footer />
    </div>
  );
}

export default NewAlly;