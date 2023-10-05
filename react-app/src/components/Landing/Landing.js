import React from 'react'
import "./Landing.css"
import image from './img.jpg';

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="text-container">
        <h1>[OH{'\u207B'}] forum app</h1>
      </div>

      <div className="image-container">
          <img src={image} alt = "landing img"/>
      </div>

      <div className="landing-buttons">
        <a href="http://localhost:3000/signup"><button>Signup</button></a>
        <a href="http://localhost:3000/login"><button >Login</button></a>
      </div>

    </div>
    
  )
}

export default Landing
