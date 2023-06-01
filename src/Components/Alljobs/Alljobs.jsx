import React, { useContext, useEffect, useState } from 'react'
import './jobs.css'
import { JobsContext } from '../Context/AllJobsContext';



const Alljobs = () => {

  const { jobs } = useContext(JobsContext);
  const [name, setName] = useState([])

  return (

    <div className='jobs'>
      {
        jobs.map(li =>  {      

        return <div key={li._id} className='jobcard'>
            <p>{li.title}</p>
            <p>{li.description}</p>
            <p>{li.salary}</p>
            <p>{li.createdBy.name}</p>
          
           
          </div>
  })
      }
    </div>
  )
}

export default Alljobs