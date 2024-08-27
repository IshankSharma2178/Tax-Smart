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
import Login from './pages/Login';
import Signup from './pages/Signup';
import TopNavigationButton from './component/common/TopNavigationButton';
import VerifyEmail from './pages/VerifyEmail';
import ModulesPage from './pages/ModulesPage';

function App() {
  return (
    <div className='w-screen min-h-screen  flex flex-col font-inter overflow-x-hidden overflow-y-auto'>
      <TopNavigationButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<Ai />} />
        <Route path="/Tax-calculator" element={<TaxCalculator />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="*" element={<Error />} /> */}
        <Route path='/verify-email' element={<VerifyEmail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      
    </div>
  );
}

export default App;