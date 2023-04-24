import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../compo/Home'
import Orders from '../compo/Orders'
import Cart from '../compo/Cart'
import Profile from '../compo/Profile'
import MyNavbar from './MyNavbar'
import { Container } from 'react-bootstrap'
import Register from '../compo/Register'
import Login from '../compo/Login'
import ProtectedRoute from './ProtectedRoute'

const AppRoutes = () => {
    return (
        <div>
            <MyNavbar />
            <Container fluid>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/orders' element={<Orders />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </Container>
        </div>
    )
}

export default AppRoutes