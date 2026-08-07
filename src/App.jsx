import React from 'react'
import { Routes, Route } from "react-router-dom";
import LandingPage from './Components/LandingPage';
import Navbar from './Components/NavSection/Navbar';
import Footer from './Components/FooterSection/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
