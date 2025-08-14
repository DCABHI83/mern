import React from "react";
import "../../Stylesheets/about.css";
import about from '../../assets/about.png'
import { NavLink } from "react-router-dom";
import { useAuth } from "../../store/auth";
const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="hero-container">
          <div className="about-left-container">
          <p>
            At Nexora Solutions, we believe that technology should work for your
            business — not against it. Founded with a vision to simplify digital
            transformation, we offer end-to-end business services that blend
            strategy, creativity, and technical expertise. Whether you're
            launching a new venture or scaling an existing one, our solutions
            are built to grow with you. From intuitive websites and scalable
            backend systems to process automation and data-driven insights,
            we’re here to deliver custom solutions that get real results. Our
            team of developers, designers, and business experts work closely
            with clients to understand their challenges, align with their goals,
            and deliver innovative products — on time and on point. Driven by
            innovation. Powered by collaboration. Focused on you.
          </p>
          <div className="about-btn">
            <NavLink to='/contact'> <button className="connect">Connect Now</button> </NavLink>
            <NavLink to='/'> <button className="learn">Learn More</button> </NavLink>
          </div>
        </div>
        <div className="about-right-container">
          <img className="about-image" src={about} alt="about-image" />
        </div>
        </div>

            <div className="stat-container">
          <div className="about-registered">
            <div className="about-text">
              <h1 style={{color:'black'}}>50+</h1>
              <p style={{color:'black'}}>Registered Companies</p>
            </div>
            <div className="about-line"></div>
          </div>
          <div className="about-registered">
            <div className="about-text">
              <h1 style={{color:'black'}}>150+</h1>
              <p style={{color:'black'}}>Project Done</p>
            </div>
            <div className="about-line"></div>
          </div>
          <div className="about-registered">
            <div className="about-text">
              <h1 style={{color:'black'}}>250+</h1>
              <p style={{color:'black'}}>Happy Clients</p>
            </div>
            <div className="about-line"></div>
          </div>
          <div className="about-registered">
            <div className="about-text">
              <h1 style={{color:'black'}}>650k+</h1>
              <p style={{color:'black'}}>Youtube Subscribers</p>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default About;
