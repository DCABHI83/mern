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

            <div className="stats-container">
          <div className="registered">
            <div className="text">
              <h1>50+</h1>
              <p>Registered Companies</p>
            </div>
            <div className="line"></div>
          </div>
          <div className="registered">
            <div className="text">
              <h1>150+</h1>
              <p>Project Done</p>
            </div>
            <div className="line"></div>
          </div>
          <div className="registered">
            <div className="text">
              <h1>250+</h1>
              <p>Happy Clients</p>
            </div>
            <div className="line"></div>
          </div>
          <div className="registered">
            <div className="text">
              <h1>650k+</h1>
              <p>Youtube Subscribers</p>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default About;
