import React from 'react'
import './styles/navbar.css'
import { Link } from 'react-router-dom'
function navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Quiz App</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>        
        <li><a href="#">Leaderboard</a></li>
        <li><a href="#">Profile</a></li>
      </ul>
    </nav>
  )
}

export default navbar
