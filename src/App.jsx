import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ProgramDetails from './pages/ProgramDetails';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <ReactLenis root options={{
        lerp: 0.1,
        duration: 1.5,
        smoothWheel: true
      }}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/program-details/:slug" element={<ProgramDetails />} />
          </Routes>
          <Footer />
        </div>
      </ReactLenis>
    </Router>
  );
}

export default App;
