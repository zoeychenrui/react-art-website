import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Teaching from './components/pages/Teaching';
import Originals from './components/pages/Originals';
import Pinterest from './components/pages/Pinterest';
import About from './components/pages/About';

function App() {
  return (

   <>
   <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teaching" element={<Teaching/>} />
      <Route path="/originals" element={<Originals/>} />
      <Route path="/pinterest" element={<Pinterest/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
   </Router>
   
   </>
    
   
  );
}

export default App;
