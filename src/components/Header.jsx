import React from 'react'

const Header = () => {
    return (
        <div className='w-full py-2 border-b-2 flex px-5 items-center justify-between'>
            <h1 className='text-2xl text-purple-500 font-mono'>ToDo List App</h1>
            <button className='px-5 py-2 bg-red-500 rounded-lg font-mono text-white mt-3 hover:bg-red-600'>Logout</button>
        </div>
    )
}

export default Header