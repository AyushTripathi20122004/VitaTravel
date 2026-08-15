import React from 'react'
import { Routes, Route } from "react-router-dom";
import LandingPage from './Components/LandingPage';
import Navbar from './Components/NavSection/Navbar';
import Footer from './Components/FooterSection/Footer';
import Contacts from './Components/Contacts/Contacts';
import OurCoaches from './Components/OurCoaches/OurCoaches';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/coaches" element={<OurCoaches />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
