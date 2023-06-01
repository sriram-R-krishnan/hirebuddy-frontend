import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/login/Login'
import Signup from './Components/signup/Signup'
import Forgotpassword from './Components/Forgotpassword/Forgotpassword';
import ResetPassword from './Components/Resetpassword/Resetpassword';
import UserDashboard from './Components/Dashboard/UserDashboard';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import Postjobs from './Components/Postjobs/Postjobs';
import Alljobs from './Components/Alljobs/Alljobs';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route  path='/dashboard' element={<AdminDashboard />}></Route>
        <Route  path='/alljobs' element={<Alljobs/>}></Route>
        <Route path='/home' element={<UserDashboard />}></Route>
        <Route path='/forgotpassword' element={<Forgotpassword />}></Route>
        <Route path='/reset-password/:token' element={<ResetPassword />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App