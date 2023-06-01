import React, { useState } from 'react'
import axios from 'axios'
import './login.css'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [name , setUserName] = useState('')
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  const submitHandler = (e) =>{
    e.preventDefault();
    console.log(name,email,password);
    

    axios.post( 'https://hirebuddy.onrender.com/signup' , {
      name,email,password,role
    } )  .then(function (response) {
      
      console.log(response);
      if(response.status === 200 || response.status === 201 ){
        navigate('/');
      }
    })
    .catch(function (error) {
      console.log(error);
    });
    // setEmail('')
    // setPassword('')
    // setUserName('')
  } 

  return (
    <div className='login'>
      <h3>HireBuddy</h3>
      <p>Lets Connect the Candidates With Corporates </p>
      <input type="text" placeholder='username' value={name} onChange={(e)=>{setUserName(e.target.value)}} />
      <br/>
      <input type="email" placeholder='email'  value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      <br/>
      <input type="password" placeholder='password'  value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      <br/>
      <div>
        <label>
          <input
            type='radio' value='user' checked={role === 'user'} onChange={(e) => setRole(e.target.value)}
          />
          User
        </label>
        <label>
          <input type='radio' value='corporate' checked={role === 'corporate'}onChange={(e) => setRole(e.target.value)}
          />
          Corporate
        </label>
      </div>
      <br/>
      <button type='submit' onClick={ (e)=>{submitHandler(e)}} className='login-btn'> Register </button>
    </div>
  )
}

export default Signup