import React from 'react'
import { Link } from 'react-router-dom'

const Tasks = () => {
  return (
    <div className='w-full h-[89%] flex justify-center items-center'>

      <div className='min-w-[420px] h-[500px] bg-white shadow-xl rounded-lg'>

        <div className='w-full h-[15%] border-b-2 flex items-center justify-between px-4'>
          <h1 className='text-xl font-mono'>All Tasks</h1>
          <Link to={"/create-task"} className='px-3 py-2 font-mono bg-purple-600 rounded-lg text-white hover:bg-purple-700'>Create Task</Link>
        </div>

        <div className='w-full h-[85%] py-5 px-5 flex flex-col gap-6 overflow-y-auto'>

          <div className='border-b-2 border-t-2 flex justify-between py-4'>

            <div className='flex gap-5'>
              <input type="checkbox" className='w-4 cursor-pointer' />
              <div>
                <h2 className='font-semibold'>Make a youtube video</h2>
                <p className='text-[13px]'>11/9/2024</p>
              </div>
            </div>

            <div className='flex items-center gap-3'>
              <Link to={"/update-task"}><i class="ri-pencil-line text-blue-500 text-xl cursor-pointer rounded-md p-1 hover:bg-slate-100"></i></Link>
              <i className="ri-delete-bin-line text-red-500 text-xl cursor-pointer rounded-md p-1 hover:bg-slate-100"></i>
            </div>
          </div>



        </div>

      </div>

    </div>
  )
}

export default Tasks