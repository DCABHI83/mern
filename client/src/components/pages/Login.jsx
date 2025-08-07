import React, { useState } from "react";
import login from "../../Assets/login.jpg";
import "../../Stylesheets/login.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { storeTokenLocally } = useAuth();
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        toast.success("you have logged in properly");
        navigate("/");
      } else {
        toast.error("invalid credentials");
      }
      const res_data = await response.json();
      storeTokenLocally(res_data.token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="login-container">
        <div className="left">
          <img className="login-image" src={login} alt="image" />
        </div>
        <div className="right">
          <form onSubmit={handleSubmit}>
            <h1>Login Form</h1>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              required
              value={user.email}
              onChange={handleInput}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              required
              value={user.password}
              onChange={handleInput}
            />
            <button className="login-btn" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
