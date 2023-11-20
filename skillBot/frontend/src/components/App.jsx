import Home from "./Home"
import Dash from "./Dash"
import { Routes, Route } from "react-router-dom"
import ResumeForm from "./ResumeForm"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/resumeform" element={<ResumeForm />} />
      </Routes>
    </>
  )
}

export default App
