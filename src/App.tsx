import './App.css'
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';

function App() {
  return (
    <Routes>
      <Navbar/>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}


export default App
