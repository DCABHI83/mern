import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "../../store/auth";
import '../../Stylesheets/adminContacts.css'
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const AdminContacts = () => {
  const { authorizationToken } = useAuth();

  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:4000/api/v1/contacts", {
        headers: {
          Authorization: authorizationToken,
        },
      });
      
      const data = await res.json();
      // console.log(Array.isArray(data.userContacts));
      
      if(res.ok && data.userContacts.length > 0){
        setContacts(data.userContacts);
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authorizationToken) {
      fetchData();
    }
  }, [authorizationToken]);


  const deleteContact = async(id)=>{
  try {
    console.log(id)
      const res = await fetch(`http://localhost:4000/api/v1/admin/contacts/${id}`,{
        method:"DELETE",
        headers:{
          Authorization:authorizationToken
        }
      })
      if(res.ok){
        toast.success("message deleted successfully")
        fetchData()
      }
  } catch (error) {
    console.log(error)
  }
  }

  if (loading) {
    return (
      <div className="adminContact-container">
        <div className="loading-spinner">Loading contacts...</div>
      </div>
    );
  }

  

  return (
    <div className="adminContact-container">
      <div className="admin-header">
        <h1>Admin Contact Data</h1>
        <p className="contacts-count">Total Contacts: {contacts.length}</p>
      </div>
      
      <div className="contacts-data">
        {contacts.length > 0 ? (
          contacts.map((curElem, index) => (
            <div className="contact-card" key={curElem._id || index}>
              <div className="contact-header">
                <h3 className="contact-name">{curElem.username}</h3>
                <span className="contact-badge">#{index + 1}</span>
              </div>
              <div className="contact-info">
                <p className="contact-email">
                  <i className="icon-email"></i>
                  {curElem.email}
                </p>
                <div className="contact-message">
                  <strong>Message:</strong>
                  <p>{curElem.message}</p>
                </div>
              </div>
              <div className="contact-actions">
                <button className="btn-del" onClick={()=>deleteContact(curElem._id)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-contacts">
            <h3>No contacts found</h3>
            <p>No contact submissions available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminContacts;
