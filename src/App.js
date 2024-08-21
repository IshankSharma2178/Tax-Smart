import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/common/Navbar';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Ai from './AI/Ai';

function App() {
  return (
    <div className='w-screen min-h-screen  flex flex-col font-inter overflow-x-hidden overflow-y-auto'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<Ai />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      
    </div>
  );
}

export default App;