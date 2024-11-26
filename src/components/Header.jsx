import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Link } from 'react-router-dom';

const Header = ({ toggleBtn }) => {

    const { logout } = useContext(AuthContext);

    const [username, setusername] = useState("");

    useEffect(() => {

        setusername(JSON.parse(localStorage.getItem("username")));

    },)


    const handleLogout = () => {

        if (confirm("are you sure want to logout")) {

            logout();

        }

    }

    return (
        <div className='w-full h-16 px-5 border-b-2 flex items-center justify-between' id='header'>

            <Link className='text-2xl text-purple-500 font-mono' to={"/tasks"}>ToDo List App</Link>

            <h2 style={{display: toggleBtn ? "block":"none"}} className='text-2xl md:text-xl'>Hey <span className='font-medium capitalize text-purple-600'>{username}</span> 👋</h2>

            <button style={{ display: toggleBtn ? "block" : "none" }}
                className='px-4 py-2 bg-red-600 rounded-lg font-mono text-white mt-3 hover:bg-red-700'
                onClick={handleLogout}
            >Logout</button>
        </div>
    )
}

export default Header