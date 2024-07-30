import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Protect from './Protect';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [login, setLogin] = useState(false); // Initialize login state to false

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation - For simplicity, I'm just checking if the username and password match
    if (formData.username === 'admin' && formData.password === 'admin') {
      setLogin(true); // Set login state to true upon successful login
      navigate(`/add`);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className='body'>
      <div className="container" id="container">
        <div className="form-container sign-in">
          <form onSubmit={handleSubmit}>
            <h1>Admin Login</h1>
            <input 
              type="text" 
              name="username" 
              placeholder="Username" 
              value={formData.username} 
              onChange={handleInputChange} 
            />
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              value={formData.password} 
              onChange={handleInputChange} 
            />
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-right">
              <h1>Hello, Admin!</h1>
              <p>Click here to login and add, update, delete all of site features</p>
            </div>
          </div>
        </div>
      </div>
      <Protect login={login} />
    </div>
  );
};

export default Login;
