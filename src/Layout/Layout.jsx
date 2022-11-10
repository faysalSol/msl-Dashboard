import React from 'react'
import { Routes,BrowserRouter, Route } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard/Dashboard'
import Login from '../Pages/Login/Login'

const Layout = () => {
  return (
    <div>
        <BrowserRouter >
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
        {/* <Dashboard /> */}
    </div>
  )
}

export default Layout