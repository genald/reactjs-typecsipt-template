
import React, { memo } from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

import Home from 'app/pages/Home'
import Login from 'app/pages/Login'
import SignUp from 'app/pages/SignUp'
import Dashboard from 'app/pages/Dashboard'

const Router = memo(() => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <PrivateRoute path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    )
})

export default Router