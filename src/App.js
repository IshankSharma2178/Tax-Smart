import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/common/Navbar';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Ai from './AI/Ai';
import TaxCalculator from './pages/TaxCalculator';
import Modules from './pages/Modules';
import About from './pages/About';

function App() {
  return (
    <div className='w-screen min-h-screen  flex flex-col font-inter overflow-x-hidden overflow-y-auto'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<Ai />} />
        <Route path="/Tax-calculator" element={<TaxCalculator />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      
    </div>
  );
}

export default App;