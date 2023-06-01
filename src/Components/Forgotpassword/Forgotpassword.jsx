import React, { useState } from 'react'
import axios from 'axios';

const Forgotpassword = () => {

    const [email,setEmail] = useState('')
    // const [password, setPassword] = useState('');

    const handleResetPassword = async e => {
        e.preventDefault();
        try {
            await axios.post('https://auth-p9mw.onrender.com/api/forgotpassword', { email });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleResetPassword}>
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <button type="submit">Reset password</button>
        </form>
    );
};


export default Forgotpassword