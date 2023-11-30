import { useEffect, useState } from 'react'
import Home from "./Home"
import Dash from "./Dash"
import { Routes, Route } from "react-router-dom"
import ResumeForm from "./ResumeForm"
import Navbar from "./Navbar"
import ChatBot from "./ChatBot"
import Download from "./Download"
import Signin from './Signin';
import Signup from './Signup';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/features" element={<Dash />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/resume" element={<ResumeForm />} />
        <Route path="/resume/download" element={<Download />} />
      </Routes>
    </>
  )
}

export default App
