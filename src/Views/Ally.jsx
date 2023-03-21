import React from 'react';
import Header from '../components/Header/Header'
import Partner from '../components/Ally/Ally'
// import EventTable from '../components/EventTable/EventTable'
import Footer from '../components/Footer/Footer'

const Ally = () => {
  return (
    <div>
      <Header />
      <div>
          <Partner />
          {/* <EventTable /> */}
      </div>
      <Footer />
    </div>
  );
}

export default Ally;