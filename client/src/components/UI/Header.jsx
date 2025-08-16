import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import '../../Stylesheets/header.css';
import { useAuth } from '../../store/auth';

const Header = () => {
  const { isLoggedIn, user } = useAuth();
  const isAdmin = user?.userData?.isAdmin;
  
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="logo">Logo</div>

        {/* Desktop Menu */}
        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Services">Services</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
          {!isLoggedIn && <NavLink to="/login">Login</NavLink>}
          {!isLoggedIn && <NavLink to="/SignUp">SignUp</NavLink>}
          {isLoggedIn && <NavLink to="/logout">LogOut</NavLink>}
          {isAdmin && <NavLink to="/admin">Admin</NavLink>}
        </nav>

      
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <GiHamburgerMenu />
        </div>

    
        <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/About" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/Services" onClick={() => setMenuOpen(false)}>Services</NavLink>
          <NavLink to="/Contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
          {!isLoggedIn && <NavLink to="/login" onClick={() => setMenuOpen(false)}>Login</NavLink>}
          {!isLoggedIn && <NavLink to="/SignUp" onClick={() => setMenuOpen(false)}>SignUp</NavLink>}
          {isLoggedIn && <NavLink to="/logout" onClick={() => setMenuOpen(false)}>LogOut</NavLink>}
          {isAdmin && <NavLink to="/admin" onClick={() => setMenuOpen(false)}>Admin</NavLink>}
        </div>
      </header>
    </>
  );
};

export default Header;
