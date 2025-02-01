import { useState } from 'react'
import Quiz from './components/quiz'
import './App.css'
import React from 'react'
import  {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from './components/navbar'
import Home from './pages/Home'
function App() {
  return (
    <>
    <Router> 
        <Navbar/>       
        <Routes>        
        <Route path="/" element={<Home/>} />  
        <Route path="/quiz" element={<Quiz/>} />        
      </Routes>
      </Router>      
    </>
  )
}

export default App
