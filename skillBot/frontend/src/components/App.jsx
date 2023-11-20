import Home from "./Home"
import Dash from "./Dash"
import { Routes, Route } from "react-router-dom"
import ResumeForm from "./ResumeForm"
import Navbar from "./Navbar"
import ChatBot from "./ChatBot"
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/features" element={<Dash />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/resume" element={<ResumeForm />} />
      </Routes>
    </>
  )
}

export default App
