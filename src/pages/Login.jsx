import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ApiContext } from '../context/ContextApi';
import { AuthContext } from '../context/AuthProvider';

const Login = () => {

    const { BASE_URL } = useContext(ApiContext);
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setusers] = useState([]);

    useEffect(() => {

        const getUserData = async () => {

            const response = await axios.get(`${BASE_URL}/users.json`);

            const userArray = Object.keys(response.data || {}).map((key) => {

                return { id: key, ...response.data[key] }

            });

            setusers(userArray);


        }

        getUserData();

    },)



    const handleLogin = async (e) => {

        try {
            e.preventDefault();

            const filterdUser = users.find((user) => user.email == email && user.password == password );

            if (filterdUser) {

                login(filterdUser.username);
                navigate("/tasks");


            } else {

                alert("user not found")
            }

            setEmail('');
            setPassword('');

        } catch (error) { console.error(error) };


    }

    return (

        <div className='w-full h-[89%] flex justify-center items-center'>

            <form onSubmit={(e) => handleLogin(e)} className='bg-white w-fit flex flex-col items-center gap-5 px-10 py-5 rounded-lg shadow-lg'>
                <h2 className='font-mono text-2xl mb-4 font-medium text-purple-600'>Login</h2>

                <div>
                    <p className='mb-1'>Email</p>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter email' className='w-[270px] h-9 ps-2 border-2 border-purple-400 rounded-md outline-none focus:border-purple-700' />
                </div>

                <div>
                    <p className='mb-1'>Password</p>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter password' className='w-[270px] h-9 ps-2 border-2 border-purple-400 rounded-md outline-none focus:border-purple-700' />
                </div>


                <button type='submit' className='w-full py-2 bg-purple-600 rounded-lg font-mono text-white mt-3 hover:bg-purple-800'>Login</button>

                <p className='text-[14px]'>Did'nt have an account? <Link to={"/sign-up"} className='text-purple-600 font-medium'>Sign up</Link></p>
            </form>

        </div>
    )
}

export default Login