import React, { useEffect } from 'react'
import './styles/quiz.css'
function Quiz() {
    const[ques,setquestions]=useState([]);
    const[options,setoptions]=useState([]);
    
  return (
    <div className='quiz'>
    <div className="quiz-container">
      <h2 className="question">What is the question?</h2>
      <ul className="options-list">
        <li className="option">Option 1</li>
        <li className="option">Option 2</li>
        <li className="option">Option 3</li>
        <li className="option">Option 4</li>
      </ul>
      <button className='next-button'>Next</button>
    </div>
    </div>
  )
}

export default Quiz;