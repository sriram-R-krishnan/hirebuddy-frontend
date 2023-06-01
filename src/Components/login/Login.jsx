import React, { useState, useContext } from 'react'
import axios from 'axios'
import './login.css'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/Authcontext';



const Login = () => {

  const [email, setEmail] = useState('sriramr@guvi.in')
  const [password, setPassword] = useState('123')
  const navigate = useNavigate();
  const { setIsAuthenticated, setCurrentUser , setToken } = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/login', {
      email, password
    }).then(function (response) {
      setIsAuthenticated(true)
      if (response.status === 200 || response.status === 201) {

        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', response.data.role);
        localStorage.setItem('name', response.data.name);
        setCurrentUser(response.data.name)
       

        if (response.data.role === 'user') {
          navigate('/home');
        }
        else {
          navigate('/dashboard');
        }
      


      }
    })
      .catch(function (error) {
        console.log(error);
      });

  }

  return (
    <div className='login'>
      <h3>HireBuddy</h3>
      <p>Lets Connect the Candidates With Corporates </p>
      <input type="email" placeholder='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
      <br />
      <input type="password" placeholder='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
      <br />
      <button type='submit' onClick={(e) => { submitHandler(e) }} className='login-btn'> Login </button>
    </div>
  )
}

export default Login