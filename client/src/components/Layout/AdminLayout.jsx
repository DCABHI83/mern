import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from '../pages/AdminSidebar'
import '../../Stylesheets/admin.css'
import AdminDashboard from '../pages/AdminDashboard'
const AdminLayout = () => {
  return (
    <div className='admin-container'>
     <AdminSidebar/>  
     <div className="admin-content">
      <AdminDashboard/>
     </div>
    </div>
  )
}

export default AdminLayout
