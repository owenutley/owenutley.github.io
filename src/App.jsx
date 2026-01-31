import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navber from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navber />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
