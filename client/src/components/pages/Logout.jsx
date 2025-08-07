import React, { useEffect } from 'react'
import { useAuth } from '../../store/auth'
import '../../Stylesheets/logout.css'
const Logout = () => {
const {LogoutUser} = useAuth()
useEffect(()=>{
    LogoutUser()
},[LogoutUser])


  return (
    <div className='logout-container'>
      <h1>You have been logged out succesfully</h1>
    </div>
  )
}

export default Logout
