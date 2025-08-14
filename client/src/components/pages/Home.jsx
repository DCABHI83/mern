import React from "react";
import "../../Stylesheets/home.css";
import home from "../../assets/home.png";
import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="hero-section">
          <div className="home-left-container">
            <h1>Welcome to Nexora Solutions</h1>
            <p>
              Empowering Businesses with Smart Solutions Welcome to [Your
              Company Name], where innovation meets efficiency. We specialize in
              delivering tailored business services that help you streamline
              operations, boost productivity, and scale confidently. From web
              development and digital transformation to data-driven solutions
              and technical consulting, our team is committed to helping you
              stay ahead in a rapidly changing market. ✅ Custom Solutions ✅
              Scalable Technologies ✅ Results-Driven Strategies Let’s turn your
              business challenges into opportunities. Partner with us — and
              build smarter.
            </p>
            <div className="buttons">
            <NavLink to="/contact"><button className="connect-now">Connect Now</button></NavLink> 
             <NavLink to="/"><button className="learn-more">Learn More</button></NavLink> 
            </div>
          </div>
          <div className="home-right-container">
            <img src={home} alt="" className="home-image" />
          </div>
        </div>
        <div className="statistics-container">
          <div className="home-registered">
            <div className="home-text">
              <h1 style={{color:'black'}}>50+</h1>
              <p style={{color:'black'}}>Registered Companies</p>
            </div>
            <div className="home-line"></div>
          </div>
          <div className="home-registered">
            <div className="home-text">
              <h1 style={{color:'black'}}>100,000+</h1>
              <p style={{color:'black'}}>Happy Clients</p>
            </div>
            <div className="home-line"></div>
          </div>
          <div className="home-registered">
            <div className="home-text">
              <h1 style={{color:'black'}}>500+</h1>
              <p style={{color:'black'}}>Well Known Developers</p>
            </div>
            <div className="home-line"></div>
          </div>
          <div className="home-registered">
            <div className="home-text">
              <h1 style={{color:'black'}}>24/7</h1>
              <p style={{color:'black'}}>Service</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
