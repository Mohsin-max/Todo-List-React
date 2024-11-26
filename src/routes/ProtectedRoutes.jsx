import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {

    const { isLoggedIn } = useContext(AuthContext);

    if (!isLoggedIn) {

        return <Navigate to={"/login"} />

    }

    return children 
}

export default ProtectedRoutes