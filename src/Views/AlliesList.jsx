import React from 'react';
import Header from '../components/Header/Header'
import AlliesList from '../components/AlliesList/AlliesList';
import Footer from '../components/Footer/Footer'

const NewParther = () => {
  return (
    <div>
      <Header />
        <div>
          <AlliesList />
        </div>
      <Footer />
    </div>
  );
}

export default NewParther;