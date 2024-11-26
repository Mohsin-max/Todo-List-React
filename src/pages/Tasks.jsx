import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Tasks = () => {

    const [allTasks, setallTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

    const handleDelete = (id) => {

        const data = [...allTasks];

        data.splice(id, 1);

        localStorage.setItem("tasks", JSON.stringify(data));

        setallTasks(data);




    }

    const handleCheckBox = (id) => {

        const updatedTask = allTasks.map((task) => {

            if (task.id === id) {

                return { ...task, isChecked: !task.isChecked}

            }

            return task;

        })

        localStorage.setItem("tasks",JSON.stringify(updatedTask));

        setallTasks(updatedTask)

    }

    return (
        <div className='w-full h-[89%] flex justify-center items-center'>

            <div className='min-w-[500px] h-[500px] bg-white shadow-xl rounded-lg' id='taskContainer'>

                <div className='w-full h-[15%] border-b-2 flex items-center justify-between px-4'>
                    <h1 className='text-xl font-mono'>All Tasks</h1>
                    <Link to={"/create-task"} className='px-3 py-2 font-mono bg-purple-600 rounded-lg text-white hover:bg-purple-700'>Create Task</Link>
                </div>

                <div className='w-full h-[85%] py-5 px-5 flex flex-col gap-6 overflow-y-auto'>

                    <h1 style={{ display: allTasks.length > 0 ? "none" : "block" }} className='text-center font-mono text-gray-400'>No task available, Add your task</h1>

                    {allTasks.map((elem, idx) => {

                        return <div key={elem.id} className='flex justify-between py-4'>

                            <div className='flex gap-5'>
                                <input
                                    onChange={() => handleCheckBox(elem.id)}
                                    type="checkbox"
                                    checked={elem.isChecked || false}
                                    className='w-4 cursor-pointer' />

                                <div>
                                    <h2 className='font-semibold'>{elem.task}</h2>
                                    <p className='text-[13px]'>{elem.dateAndTime}</p>
                                </div>

                            </div>

                            <div className='flex items-center gap-3'>
                                <Link to={`/update-task/${elem.id}`}><i className="ri-pencil-line text-blue-500 text-xl cursor-pointer rounded-md p-1 hover:bg-slate-100"></i></Link>
                                <i onClick={() => handleDelete(idx)} className="ri-delete-bin-line text-red-500 text-xl cursor-pointer rounded-md p-1 hover:bg-slate-100"></i>
                                <span className='text-xs bg-green-500 py-1 px-2 rounded-md font-medium text-white' style={{display : elem.isChecked ? "block" : "none"}}>complete</span>
                            </div>
                        </div>


                    })}


                </div>

            </div>

        </div>
    )
}

export default Tasks