import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Login.css"
import image from './img.jpg';

const Login = () => {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  
  const handleLogin = async () => {
    //logic will be updated when the back end is ready.
    if (username != "" && password != "") {
      localStorage.setItem("username", username);
      navigate( "/directory");
    } else {
      setSuccessMessage("");
      setErrorMessage("Login failed. Please check your information.");
    }  

  }

  return (
    <div className="login-container">
     
     <div className="login-text-container">
      <h1>Login to your Account</h1>
      
      <div className="loginbox">
        <label for="username">Username</label><br/>
        <input type="text" id="Username" onChange={(e) => setUsername(e.target.value)}/>
      </div>
        
      <div className="loginbox">
        <label for="password">Password</label><br/>
        <input type="password" id="Password" onChange={(e) => setPassword(e.target.value)}/>
      </div>

        <div className="login">
          <button onClick={handleLogin}>Login</button>
          <a href="http://localhost:3000/"><button>Back to Home</button></a>
        </div>
      </div>

      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      <div className="login-image-container">
          <img src={image} alt = "login img"/>
      </div>

    </div>
  )
}

export default Login
