import Home from "./Home"
import Dash from "./Dash"
import { Routes, Route } from "react-router-dom"
import ResumeForm from "./ResumeForm"
import ChatBot from "./ChatBot"
import Download from "./Download"
import SignUp from "../auth/SignUp"
import SignIn from "../auth/SignIn";
import Dashboard from "./Dashboard";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resume" element={<ResumeForm />} />
        <Route path="/resume/download" element={<Download />} />
      </Routes>
    </>
  )
}

export default App
