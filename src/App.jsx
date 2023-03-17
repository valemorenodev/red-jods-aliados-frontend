import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/GlobalStyles.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import PatnerTodo from './components/PatnerTodo'
function App() {
  return (
    <div className="App">
      <Header />
      <PatnerTodo />
      <Footer />
    </div>
  )
}

export default App