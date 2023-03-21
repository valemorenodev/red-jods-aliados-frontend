import React from 'react';
import Header from '../components/Header/Header'
import NewPartner from '../components/NewPartner/NewPartner'
import Footer from '../components/Footer/Footer'

const NewAlly = () => {
  return (
    <div>
      <Header />
      <div>
          <NewPartner />
      </div>
      <Footer />
    </div>
  );
}

export default NewAlly;