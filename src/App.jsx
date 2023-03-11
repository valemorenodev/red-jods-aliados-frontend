import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/GlobalStyles.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  )
}

export default App