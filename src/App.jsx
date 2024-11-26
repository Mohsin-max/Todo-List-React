import React, { useContext } from 'react'
import Signup from './pages/Signup'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Tasks from './pages/Tasks'
import CreateTask from './pages/CreateTask'
import UpdateTask from './pages/UpdateTask'
import Header from './components/Header'
import ProtectedRoutes from './routes/ProtectedRoutes'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const {isLoggedIn} = useContext(AuthContext);

  return (
    <div className='w-full h-[100vh] bg-slate-100'>

      <Header toggleBtn={isLoggedIn}/>
      <Routes>

        <Route path='/sign-up' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/tasks' element={<ProtectedRoutes><Tasks /></ProtectedRoutes>} />
        <Route path='/' element={<Navigate to={"/tasks"} />} />
        <Route path='/create-task' element={<ProtectedRoutes><CreateTask /></ProtectedRoutes>} />
        <Route path='/update-task/:id' element={<ProtectedRoutes><UpdateTask /></ProtectedRoutes>} />
      </Routes>

    </div>
  )
}

export default App