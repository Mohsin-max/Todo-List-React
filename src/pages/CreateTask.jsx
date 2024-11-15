import React from 'react'
import { Link } from 'react-router-dom'

const CreateTask = () => {
    return (
        <div className='w-full h-[89%] flex justify-center items-center'>

            <form className='bg-white shadow-lg w-fit flex flex-col items-center px-10 py-5 rounded-lg'>
                <h2 className='text-2xl font-medium mb-5'>Task Title</h2>
                <input type="text" placeholder='Task title...' className='w-[270px] h-9 ps-2 border-2 border-purple-400 rounded-md outline-none focus:border-purple-700' />
                <button className='px-5 py-2 bg-purple-600 rounded-lg font-mono text-white mt-5 hover:bg-purple-800'>Create Task</button>
                <p className='text-[13px] mt-4'>go to <Link to={"/tasks"} className='text-purple-600 font-medium'>Home</Link></p>
            </form>

        </div>
    )
}

export default CreateTask