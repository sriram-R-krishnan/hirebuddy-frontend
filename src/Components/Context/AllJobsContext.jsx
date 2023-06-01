import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const JobsContext = createContext();

const JobsProvider = ({ children }) => {

  const [jobs, SetJobs] = useState([])
  useEffect( () => {
    axios.get('http://localhost:3000/alljobs')
      .then(
        function (response) {
          console.log(response.data);          
          SetJobs(response.data)
        }
      )
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  return (
    <JobsContext.Provider value={{ jobs, SetJobs }}>
      {children}
    </JobsContext.Provider>
  );
};

export default JobsProvider;
