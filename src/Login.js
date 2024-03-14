 
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './login.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }
    // Dummy authentication logic
    if (username === 'admin' && password === 'pass') {
      // Redirect to Homepage 
      console.log('Login successful');
      history('/homepage')
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className='home'>
      <h2>Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit} style={{textAlign:"center",margin:"2%"}}>
        <div className="form-group" style={{display:"flex"}}>

          <label className='pt-2 m-2'>Username:</label>
          <input 
            type="text"
            className="form-control"
            value={username}
            placeholder='Enter usename as admin'
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group m-4" style={{display:"flex"}}>
          <label className='pt-2 mt-2'>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            placeholder='Enter password as pass'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button  style={{margin:"2%"}}  type="submit" className="border border-primary border-2">Login</button>
      </form>
    </div>
  );
};

export default Login;


