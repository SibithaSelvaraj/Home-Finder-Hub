import React from 'react'
import { Link } from 'react-router-dom'

const UserReg = () => {
  return (
    <>
        <div className="user-register" id='user-register'>
        <div className='body'>
      <div className="container" id="container">
        <div className="form-container sign-in">
        {/* onSubmit={handleSubmit} */}
          <form >
            <h1>User Register</h1>
            <input 
              type="text" 
              name="username" 
              placeholder="Username" 
            //   value={formData.username} 
            //   onChange={handleInputChange} 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
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
            <button type="submit">Register</button>
            <span style={{marginTop:"15px"}}>Already have an account <b><Link to={'/user-login'} style={{color:"#0E2E50"}}>Login</Link></b></span>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-right">
              <h1>Hello, User!</h1>
              <p>Please register and login, so that you can utilize our features. </p>
            </div>
          </div>
        </div>
      </div>

    </div>

        </div>
    </>
  )
}

export default UserReg