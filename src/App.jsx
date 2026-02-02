import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navber from './components/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navber />
      <div className="nav-spacer"></div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
