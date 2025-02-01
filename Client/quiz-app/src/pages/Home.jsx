import React from 'react'
import './styles/Home.css'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className="home-container">      
      <div className="hero-section">
        <h1>Welcome to the Quiz App</h1>
        <p>Test your knowledge and challenge yourself with fun quizzes!</p>
        <Link to="/quiz"><button className="start-button">Start Quiz</button></Link>
      </div>
    </div>
  )
}

export default Home
