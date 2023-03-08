import React from 'react'
import Header from './components/Header/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
const RouterApp = () => {

    return (
        
        <BrowserRouter>
        <Header/>
            <Routes>

                {/* <Route path='/' element={<Home/>}/> */}
                {/* <Route path='/Usuario' element={<Usuario/>}/> */}
                {/* <Route path= '*' element={<NotFound/>}/> */}
            </Routes>
          
        </BrowserRouter>
    )
}

export default RouterApp
