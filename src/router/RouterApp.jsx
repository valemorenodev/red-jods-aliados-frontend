import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../components/Login/Login'
import AlliesList from '../components/AlliesList/AlliesList'
import Ally from '../components/Ally/Ally'
//import { PrivateRoute } from './PrivateRoute'

const RouterApp = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/AlliesList' element={<AlliesList />} />
            <Route path='/Ally' element={<Ally />} />
        </Routes>
    )
}

export default RouterApp
