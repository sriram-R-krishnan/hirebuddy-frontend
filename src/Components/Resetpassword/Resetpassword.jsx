import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3000/api/reset-password/${token}`)
      .then(response => {
        if (response.data.error) {
          setMessage(response.data.error);
        }
      })
      .catch(error => {
        setMessage(error.message);
      });
  }, [token]);

  console.log(token);

  const handleSubmit = event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    axios.put(`https://auth-p9mw.onrender.com/api/reset-password/${token}`, { password })
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        setMessage(error.message);
      });
  };

  return (
    <div>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Password:
          <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
        </label>
        <br />
        <label>
          Confirm Password:
          <input type="password" value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)} />
        </label>
        <br />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
