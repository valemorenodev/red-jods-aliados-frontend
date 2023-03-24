import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../components/Login/Login'
import AlliesList from '../Views/AlliesList'
import NewAlly from '../Views/NewAlly'
import Ally from '../Views/Ally'
import NewEvent from '../Views/NewEvent'
import Error404 from '../Views/Page404'
import { PrivateRoute } from './PrivateRoute'
import UserList from '../Views/UserList'


const RouterApp = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
             <Route
                path='nameroute'
                element={

                        <AlliesList />

                }
            />
            {/* <Route
                path='Ally'
                element={
                    <PrivateRoute>
                        <Ally />
                    </PrivateRoute>
                }
            />
            <Route
                path='NewAlly'
                element={
                    <PrivateRoute>
                        <NewAlly />
                    </PrivateRoute>
                }
            />
            <Route
                path='NewEvent'
                element={
                    <PrivateRoute>
                        <NewEvent />
                    </PrivateRoute>
                }
            /> */}
            <Route path="*" element={<Error404 />} />
            <Route path='/nameroute' element={<AlliesList />} />
            <Route path='/NewAlly' element={<NewAlly />} />
            <Route path='/Ally' element={<Ally />} />
            <Route path='/NewEvent' element={<NewEvent />} />
            <Route path='/Usuarios' element={<UserList />} />
        </Routes>
    )
}

export default RouterApp
