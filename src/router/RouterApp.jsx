import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../components/Login/Login'
import AlliesList from '../Views/AlliesList'
import NewAlly from '../Views/NewAlly'
import Ally from '../Views/Ally'
import NewEvent from '../Views/NewEvent'
// import Ally from '../components/Ally/Ally'
//import { PrivateRoute } from './PrivateRoute'

const RouterApp = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/AlliesList' element={<AlliesList />} />
            <Route path='/NewAlly' element={<NewAlly />} />
            <Route path='/Ally' element={<Ally />} />
            <Route path='/NewEvent' element={<NewEvent />} />
        </Routes>
    )
}

export default RouterApp
