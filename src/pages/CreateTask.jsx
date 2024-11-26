import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

const CreateTask = () => {

    const navigate = useNavigate();

    const [taskTitle, setTaskTitle] = useState('');
    const [tasks, setTasks] = useState([]);

    useEffect(() => {

        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

        setTasks(storedTasks);

    }, [])


    const handleTask = (e) => {

        e.preventDefault();

        const newTask = {

            id: uuidv4(),
            task: taskTitle,
            dateAndTime: new Date().toLocaleString()

        }

        const updatedTasks = [...tasks,newTask];
        setTasks(updatedTasks)
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));

        setTaskTitle('');

        navigate("/tasks")

    }

    return (
        <div className='w-full h-[89%] flex justify-center items-center'>

            <form onSubmit={handleTask} className='bg-white shadow-lg w-fit flex flex-col items-center px-10 py-5 rounded-lg'>
                <h2 className='text-2xl font-medium mb-5'>Task Title</h2>

                <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} type="text" placeholder='Task title...' className='w-[270px] h-9 ps-2 border-2 border-purple-400 rounded-md outline-none focus:border-purple-700' required/>

                <button type='submit' className='px-5 py-2 bg-purple-600 rounded-lg font-mono text-white mt-5 hover:bg-purple-800'>Create Task</button>
                <p className='text-[13px] mt-4'>go to <Link to={"/tasks"} className='text-purple-600 font-medium'>Home</Link></p>
            </form>

        </div>
    )
}

export default CreateTask