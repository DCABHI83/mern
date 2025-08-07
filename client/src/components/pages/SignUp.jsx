import React, { useState } from "react";
import '../../Stylesheets/signup.css'
import register from '../../assets/register.jpg'
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const SignUp = () => {
   const [user,setuser] = useState({
    username:"",
    email:"",
    phone:"",
    password:""
   })

   const navigate = useNavigate()

   const handleInput = (e)=>{
    let name = e.target.name
    let value = e.target.value
 
    setuser({
        ...user,
        [name] :value, 
    })

   }

   const handleSubmit = async (e)=>{
 try {
    e.preventDefault()
    const response = await fetch("http://localhost:4000/api/v1/register",{
     method:"POST",
     headers :{
       "Content-Type" : "application/json"
     },
     body:JSON.stringify(user)
    })
   if(response.ok){
     setuser({
      username:"",
      email:"",
      phone:"",
      password:""
     })
     toast.success("user registerd successfully")
     navigate('/login')
   }
 } catch (error) {
  toast.error("user cant be created")
 }
   }

 if(user.phone.length > 10){
  alert("phone number cant receed 10 digits")
  setuser({
    phone:""
  })

 }


  return (
    <>
      <div className="register-container">
        <div className="left">
          <div className="image-container">
          <img src={register} alt="image" width="700" height="600" />
          </div>
        </div>
        <div className="right">
          <h1>Registration Form</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">username</label>
            <input type="text" name="username" value={user.username} required onChange={handleInput} maxLength="15"/>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={user.email} required onChange={handleInput} />
            <label htmlFor="phone">Phone</label>
            <input type="number" name="phone" value={user.phone} required onChange={handleInput}  maxLength="10" />
            <label htmlFor="password">Password</label>
            <input type="text" name="password" value={user.password} required onChange={handleInput} minLength="8" maxLength="15" pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}"
  title="Must contain at least 8 characters, including uppercase, lowercase, a number, and a special character."/>
            <button className="signup-btn" type="submit" >Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
