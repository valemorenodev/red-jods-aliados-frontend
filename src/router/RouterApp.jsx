import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header/Header'
import Login from '../components/Login/Login'
import Allies from '../components/AlliesList/AlliesList'

const RouterApp = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
        </Routes>
    )
}

export default RouterApp
