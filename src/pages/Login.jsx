import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (

        <div className='w-full h-[89%] flex justify-center items-center'>

            <form className='bg-white w-fit flex flex-col items-center gap-5 px-10 py-5 rounded-lg shadow-lg'>
                <h2 className='font-mono text-2xl mb-4 font-medium text-purple-600'>Login</h2>

                <div>
                    <p className='mb-1'>Email</p>
                    <input type="email" placeholder='Enter email' className='w-[270px] h-9 ps-2 border-2 border-purple-400 rounded-md outline-none focus:border-purple-700' />
                </div>

                <div>
                    <p className='mb-1'>Password</p>
                    <input type="password" placeholder='Enter password' className='w-[270px] h-9 ps-2 border-2 border-purple-400 rounded-md outline-none focus:border-purple-700' />
                </div>


                <button className='w-full py-2 bg-purple-600 rounded-lg font-mono text-white mt-3 hover:bg-purple-800'>Login</button>

                <p className='text-[14px]'>Did'nt have an account? <Link to={"/sign-up"} className='text-purple-600 font-medium'>Sign up</Link></p>
            </form>

        </div>
    )
}

export default Login