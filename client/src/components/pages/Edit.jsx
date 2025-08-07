import React from 'react'
import { useState } from 'react'
import '../../Stylesheets/edit.css'
import { toast } from 'react-toastify'
import { useAuth } from '../../store/auth'
import { useParams } from 'react-router-dom'


const Edit = () => {
    const {authorizationToken} = useAuth()
    const params = useParams()
    const [inputValue,setInputValue] = useState({
        username:"",
        email:"",
        phone:""
    })

   const handleInput = (e)=>{
    let name = e.target.name
    let value = e.target.value

    setInputValue({
        ...inputValue,
        [name]:value
    })
   }

const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
        const res = await fetch(`http://localhost:4000/api/v1/admin/update/${params.id}`,{
            method:"PATCH",
            headers:{
               "Content-Type": "application/json",
               Authorization:authorizationToken
            },
            body:JSON.stringify(inputValue)
        })
        if(res.ok){
         toast.success("user updated successfully",inputValue)
        }
    } catch (error) {
        console.log(error)
    }
}
    
  return (
  <>
  <div className="edit-container">
    <h1>Update User Data</h1>
    <form onSubmit={handleSubmit} className='form'>
        <label htmlFor="username">Username</label>
        <input type="text" name='username' value={inputValue.username} onChange={handleInput} className='form-input'/>
        <label htmlFor="email">email</label>
        <input type="email" name='email' value={inputValue.email} onChange={handleInput} className='form-input' />
        <label htmlFor="phone">phone</label>
        <input type="number" name='phone' value={inputValue.phone} onChange={handleInput} className='form-input' />
        <button type='submit' className='submit-btn'>Submit</button>
    </form>
  </div>
  
  </>
  )
}

export default Edit
