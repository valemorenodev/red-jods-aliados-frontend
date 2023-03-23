import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../components/Login/Login'
import AlliesList from '../Views/AlliesList'
import NewAlly from '../Views/NewAlly'
import Ally from '../Views/Ally'
import NewEvent from '../Views/NewEvent'
import Error404 from '../Views/Page404'
import { PrivateRoute } from './PrivateRoute'

const RouterApp = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            {/* <Route
                path='nameroute'
                element={
                    <PrivateRoute>
                        <AlliesList />
                    </PrivateRoute>
                }
            /> */}
            <Route
                path='Aliado'
                element={
                    <PrivateRoute>
                        <Ally />
                    </PrivateRoute>
                }
            />
            <Route
                path='Nuevo'
                element={
                    <PrivateRoute>
                        <NewAlly />
                    </PrivateRoute>
                }
            />
            <Route
                path='NuevoEvento'
                element={
                    <PrivateRoute>
                        <NewEvent />
                    </PrivateRoute>
                }
            />
            <Route path="*" element={<Error404 />} />
            <Route path='/nameroute' element={<AlliesList />} />
            <Route path='/NewAlly' element={<NewAlly />} />
            <Route path='/Ally' element={<Ally />} />
            <Route path='/NewEvent' element={<NewEvent />} /> 
        </Routes>
    )
}

export default RouterApp
