import React, { useEffect, useState } from "react";
import "../../Stylesheets/contact.css";
import contactImage from "../../assets/contactImage.png";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";
const defaultContactFormData={
  username: "",
    email: "",
    message: "",
}
const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);
const {user} = useAuth()
useEffect(() => {
  if (user && user.userData) {
    setContact(prev => ({
      ...prev,
      username: user.userData.username || "",
      email: user.userData.email || "",
    }));
  }
}, [user.userData]);


  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setContact({
      ...contact,
      [name]: value,
    });
  };
  



  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/v1/contact",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(contact)
      })
if(response.ok){
  setContact(defaultContactFormData)
  toast.success("Thanks for the feedback we will connect with you asap")
}
    } catch (error) {
      console.log("somethig gone wrong :",error)
    }
  };





  return (
    <>
      <div className="contact-container">
        <div className="contact-left-container">
          <h1>Contact Us</h1>
          <div className="contact-image-container">
            <img className="contact-image" src={contactImage} alt="contact-image" />
          </div>
        </div>
        <div className="contact-right-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">username</label>
            <input
              type="text"
              name="username"
              required
              id="username"
              value={contact.username}
              onChange={handleInput}
            />
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              required
              id="email"
              value={contact.email}
              onChange={handleInput}
            />
            <label htmlFor="message">message</label>
            <textarea
              className="fixed-textarea"
              name="message"
              id="message"
              value={contact.message}
              onChange={handleInput}
            ></textarea>
            <button className="form-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
