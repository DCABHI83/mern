import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import AdminSidebar from '../pages/AdminSidebar'
import '../../Stylesheets/admin.css'
import AdminDashboard from '../pages/AdminDashboard'
import { useAuth } from '../../store/auth'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
const AdminLayout = () => {
  const navigate = useNavigate()
  const  {user,token} = useAuth()
  const isAdmin = user?.userData?.isAdmin
    useEffect(() => {
    if (!token) {
      toast.error('Please log in first');
      navigate('/login', { replace: true });
    } else if (isAdmin === false) {
      toast.error('Unauthorized Access');
      navigate('/', { replace: true });
    }
  }, [isAdmin, token, navigate]);

  if (!token || isAdmin === false || isAdmin === undefined) {
    return null; 
  }
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
