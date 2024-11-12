import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e) => {

        e.preventDefault();

        console.log(username,email,password);
        

        setUsername("");
        setEmail("");
        setPassword("")


    }

    return (
        <div className='w-full h-[89%] flex justify-center items-center'>

            <form onSubmit={(e) => handleSignup(e)} className='bg-white w-fit flex flex-col items-center gap-5 px-10 py-5 rounded-lg shadow-lg'>
                <h2 className='font-mono text-2xl mb-4 font-medium text-purple-600'>Create Account</h2>

                <div>
                    <p className='mb-1'>Username</p>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        placeholder='Enter username'
                        className='w-[270px] h-9 ps-2 border-2 border-purple-400 rounded-md outline-none focus:border-purple-700' />
                </div>

                <div>
                    <p className='mb-1'>Email</p>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder='Enter email'
                        className='w-[270px] h-9 ps-2 border-2 border-purple-400 rounded-md outline-none focus:border-purple-700' />
                </div>

                <div>
                    <p className='mb-1'>Password</p>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder='Enter password'
                        className='w-[270px] h-9 ps-2 border-2 border-purple-400 rounded-md outline-none focus:border-purple-700' />
                </div>


                <button type='submit' className='w-full py-2 bg-purple-600 rounded-lg font-mono text-white mt-3 hover:bg-purple-800'>Create Account</button>

                <p className='text-[14px]'>Already have an account? <Link to={"/login"} className='text-purple-600 font-medium'>Login</Link></p>
            </form>

        </div>
    )
}

export default Signup