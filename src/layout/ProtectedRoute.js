import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ isSignin, children }) => {
    if (!isSignin) {
        return <Navigate to="/login" replace />
    }
    return children
}

export default ProtectedRoute