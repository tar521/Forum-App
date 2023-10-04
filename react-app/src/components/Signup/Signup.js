import React from 'react'
import { useState } from 'react'
import "./Signup.css"
import image from './img.jpg';

const Signup = () => {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {

    const requestObject =
    {
      "username": username,
      "password": password,
    }

    if(!username || !password) {
      setSuccessMessage("");
      setErrorMessage("Sign up failed. Please check your information.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestObject),
      });

      if (response.ok) {
        setSuccessMessage("Sign up successful. You can now log in.");
        setErrorMessage("");
      } else if(response.status === 400){
        setSuccessMessage("");
        setErrorMessage("Sign up failed. User already exists in database.");
      } else {
        setSuccessMessage("");
        setErrorMessage("Sign up failed. Please check your information.");
      }
    } catch (error) {
      setSuccessMessage("");
      setErrorMessage("An error occurred. Please try again later.");
    }

  }

  return (
    <div className="signup-container">

      <div className="left-bar">

        <h1>Create an Account</h1>

        <div className="labelbox">
          <label for="username">Username</label><br/>
          <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)}/>
        </div>

        <div className="labelbox">
          <label for="password" >Password</label><br/>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
       
        <div className="buttonsection">
        <button onClick={handleSubmit}>Sign Up</button>
        <a href="http://localhost:3000/"><button style={{}}> Back to Home</button></a>  
        </div>  

        <div className="signup-image">
          <img src={image} alt = "signup img"/>
        </div>

        {successMessage && <p style={{color: "green", marginTop:"20px"}}>{successMessage}</p>}
        {errorMessage && <p style={{color: "red", marginTop:"20px"}}>{errorMessage}</p>}
      </div>

    </div>
  )
}

export default Signup
