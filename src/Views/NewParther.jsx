import React from 'react';
import Header from '../components/Header/Header'
import FormInputs from '../components/NewPartner/FormInputs';
import FormFiles from '../components/NewPartner/FormFiles';
import Footer from '../components/Footer/Footer'

const NewParther = () => {
  return (
    <div>
      <Header />
      <div id='ContainerNewParther'>
        <FormInputs />
        <FormFiles />
      </div>
      <Footer />
    </div>
  );
}

export default NewParther;