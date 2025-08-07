import React, { useEffect, useState } from 'react'
import '../../Stylesheets/adminUsers.css'
import { useAuth } from '../../store/auth'
import { Link } from 'react-router-dom'
const AdminUsers = () => {
const [users,setUsersData] = useState([])

const {authorizationToken} = useAuth()
    const getData = async ()=>{
        try {
          const res =await fetch("http://localhost:4000/api/v1/users",{
              headers:{
                  Authorization:authorizationToken
              }
          })
       if(res.ok){
          const data = await res.json()
      if(data.users.length > 0){
          setUsersData(data.users)
      }
       }  
        } catch (error) {
          console.log("error",error)
        }
    }

  
    useEffect(()=>{
        getData()
    },[])

     const deleteUser = async (id)=>{
    try {
       const res = await fetch(`http://localhost:4000/api/v1/users/delete/${id}`,{
        method:"DELETE",
        headers:{
          Authorization:authorizationToken
        }
       })
 if(res.ok){
  getData()
 }
    } catch (error) {
      console.log("error",error)
    }
 }

    // console.log(users)
  return (
    <div  className='user-container'>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Update</th>
          <th>isAdmin</th>
          <th>Delete</th>
        </tr>
      </thead>
   <tbody>
  {
  
  users.length > 0 ?
  
  users?.map((curElem) => {
    return (
      <tr key={curElem._id}>
        <td>{curElem.username}</td>
        <td>{curElem.email}</td>
        <td>{curElem.phone || 'N/A'}</td>
        <td>{curElem.isAdmin ? 'Yes' : 'No'}</td>
        <td>
        <Link to={`/admin/update/${curElem._id}`} ><button className="btn-edit">Edit</button>  </Link>  
        </td>
        <td>
          <button className="btn-delete" onClick={()=> deleteUser(curElem._id)}>Delete</button> 
        </td>
      </tr>
    );
  }): <h1>No Data Available </h1>} 
</tbody>

    </table>
    </div>
  )
}

export default AdminUsers
