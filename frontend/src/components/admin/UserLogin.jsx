import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserLogin = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: '',
//     password: ''
//   });
//   const [login, setLogin] = useState(false); // Initialize login state to false

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform validation - For simplicity, I'm just checking if the username and password match
//     if (formData.username === 'admin' && formData.password === 'admin') {
//       setLogin(true); // Set login state to true upon successful login
//       navigate(`/add`);
//     } else {
//       alert('Invalid username or password');
//     }
//   };

  return (
    <div className='body'>
      <div className="container" id="container">
        <div className="form-container sign-in">
        {/* <form onSubmit={handleSubmit}> */}

          <form >
            <h1>Admin User</h1>
            <input 
              type="text" 
              name="username" 
              placeholder="Username" 
            //   value={formData.username} 
            //   onChange={handleInputChange} 
            />
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
            //   value={formData.password} 
            //   onChange={handleInputChange} 
            />
            <button type="submit">Login</button>
            <span style={{marginTop:"15px"}}>Don't have an account <b><Link to={'/user-register'} style={{color:"#0E2E50"}}>Register</Link></b></span>

          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-right">
              <h1>Hello, User!</h1>
              <p>Please login, so that you can utilize our features.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
