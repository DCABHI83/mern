import React from 'react'
import '../../Stylesheets/adminDashboard.css'
import { Outlet } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'

const AdminDashboard = () => {
  return (
 <>
<Outlet/>
 </>
  )
}

export default AdminDashboard
