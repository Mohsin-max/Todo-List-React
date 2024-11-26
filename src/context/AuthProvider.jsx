import React, { createContext, useState } from 'react'
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [isLoggedIn, setisLoggedIn] = useState(localStorage.getItem("isLoggedIn"));

    const login = (username) => {

        setisLoggedIn(true);
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("username",JSON.stringify(username));
        
    }
    
    const logout = () => {
        
        setisLoggedIn(false);
        localStorage.removeItem("isLoggedIn");

    }

    return (

        <div>
            <AuthContext.Provider value={{ login, logout, isLoggedIn }}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider