import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../Stylesheets/header.css'
import { useAuth } from '../../store/auth'
const Header = () => {
const {isLoggedIn} = useAuth()
  return (
   <>
  <div className="main">
    <nav>
        <div className="logo">Logo</div>
        <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Services">Services</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
            <NavLink to="/login" className={isLoggedIn ? "disable" : "show"}>Login</NavLink>
            <NavLink to="/SignUp" className={isLoggedIn ? "disable" : "show"}>SignUp</NavLink>
            <NavLink to='/logout' className={isLoggedIn ? "show" : "disable"}>LogOut</NavLink>
        </ul>
    </nav>
  </div>
   </>
  )
}

export default Header
