import React, { useState, useContext } from 'react'
import './postjobs.css'
import axios from 'axios'
import { AuthContext } from '../Context/Authcontext';
import { Container,Row,Col } from 'react-bootstrap';
import SideNav from '../SideNav/Sidenav';
import { useNavigate } from 'react-router-dom';



const Postjobs = () => {
  const { token } = useContext(AuthContext);

  const [jobName, setJobName] = useState('dev');
  const [jobDesc, setJobDesc] = useState('dev job ');
  const [salary, setSalary] = useState('1.5k');
  const [vacancy, setVacancy] = useState('3');

  const navigate = useNavigate()

  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };

  const postJob = () => {
    console.log(token);
    axios.post('http://localhost:3000/createjobs', {
      title: jobName,
      description: jobDesc,
      salary, vacancy
    }, config).then(function (response) {
      console.log(response);
      navigate('/dashboard')
    })
      .catch(function (error) {
        console.log(error);
      });

  }


  return (
    <Container>
     <Row>
     <Col lg='12'>
      <SideNav/>
     <div className='post-input'>
        <h3 className='m-3'>Post Jobs</h3>
        <div className="div-1">
          <input type="text" placeholder='Job Name' value={jobName} onChange={(e) => { setJobName(e.target.value) }} />
          <br />
          <input type="text" placeholder='Job Description' value={jobDesc} onChange={(e) => { setJobDesc(e.target.value) }} />
          <br />
        </div>
        <div className='div-1'>
          <input type="text" placeholder='Salary' value={salary} onChange={(e) => { setSalary(e.target.value) }} />
          <br />
          <input type="text" placeholder='Vacancies' value={vacancy} onChange={(e) => { setVacancy(e.target.value) }} />
          <br />
        </div>
        <div>
          <button onClick={postJob} className='btn btn-primary btn-w'>Post Job</button>
        </div>
      </div>
     </Col>
     </Row>
    </Container>
  )
}

export default Postjobs