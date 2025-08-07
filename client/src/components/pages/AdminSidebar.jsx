import React from "react";
import { NavLink } from "react-router-dom";
import "../../Stylesheets/adminSidebar.css";
import { CiUser } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { RiHome9Line } from "react-icons/ri";

const AdminSidebar = () => {
  return (
    <>
    <div className="main-container">
 <div className="side-container">
        <div className="nav-icon">
          <CiUser className="icon" />
          <NavLink to="/admin/users">Users</NavLink>
        </div>
        <div className="nav-icon">
          <FaRegMessage className="icon service" />
          <NavLink to="/admin/contacts">Contacts</NavLink>
        </div>
        <div className="nav-icon">
          <MdOutlineMessage className="icon" />
          <NavLink to="/admin/services">Services</NavLink>
        </div>
        <div className="nav-icon">
          <RiHome9Line className="icon" />
          <NavLink to="/">Home</NavLink>
        </div>
      </div>
    </div> 
    </>
  );
};

export default AdminSidebar;
