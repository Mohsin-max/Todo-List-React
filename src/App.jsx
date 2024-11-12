import React from 'react'
import Signup from './pages/Signup'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Tasks from './pages/Tasks'
import CreateTask from './pages/CreateTask'
import UpdateTask from './pages/UpdateTask'
import Header from './components/Header'

const App = () => {



  return (
    <div className='w-full h-[100vh] bg-slate-100'>

      <Header />
      <Routes>

        <Route path='/sign-up' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/' element={<Navigate to={"/tasks"} />} />
        <Route path='/create-task' element={<CreateTask />} />
        <Route path='/update-task' element={<UpdateTask />} />
      </Routes>

    </div>
  )
}

export default App