import React from 'react';
import Header from '../components/Header/Header'
import AlliesList from '../components/AlliesList/AlliesList';
import Footer from '../components/Footer/Footer'

const NewParther = () => {
  return (
    <>
      <Header />
      <div>
        <AlliesList />
      </div>
      <Footer />
    </>
  );
}

export default NewParther;