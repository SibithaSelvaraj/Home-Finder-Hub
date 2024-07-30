import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from './Login';
const Protect = ({login}) => {
    login = true 
    console.log("Login state:", login); // Log the login state to check if it's correctly passed

    return login? <Outlet/>:<Login/>

}

export default Protect