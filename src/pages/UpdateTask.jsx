import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateTask = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    // Fetch all tasks from localStorage
    const allTask = JSON.parse(localStorage.getItem("tasks"));

    // Find the specific task to update
    const task = allTask.find((task) => task.id === id);

    // Redirect if task not found
    useEffect(() => {
        if (!task) {
            alert("Task not found!");
            navigate("/tasks");
        }
    }, [task, navigate]);

    // Set initial state with the found task
    const [updateTask, setUpdateTask] = useState(task ? task.task : "");

    // Handle update logic
    const handleUpdate = (e) => {
        e.preventDefault();

        const updatedTask = allTask.map((elem) =>
            elem.id === id ? { ...elem, task: updateTask } : elem
        );

        localStorage.setItem("tasks", JSON.stringify(updatedTask));

        navigate("/tasks");
    };

    return (
        <div className="w-full h-[89%] flex justify-center items-center">
            <form
                onSubmit={handleUpdate}
                className="bg-white shadow-lg w-fit flex flex-col items-center px-10 py-5 rounded-lg"
            >
                <h2 className="text-2xl font-medium mb-5">Update Title</h2>
                <input
                    value={updateTask}
                    onChange={(e) => setUpdateTask(e.target.value)}
                    type="text"
                    placeholder="Update task title..."
                    className="w-[270px] h-9 ps-2 border-2 border-purple-400 rounded-md outline-none focus:border-purple-700"
                />
                <button className="px-5 py-2 bg-purple-600 rounded-lg font-mono text-white mt-5 hover:bg-purple-800">
                    Update Task
                </button>
                <p className="text-[13px] mt-4">
                    go to{" "}
                    <Link to={"/tasks"} className="text-purple-600 font-medium">
                        Home
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default UpdateTask;
