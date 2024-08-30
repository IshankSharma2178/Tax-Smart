import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import TaxCalculator from './pages/TaxCalculator';
import Modules from './pages/Modules';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import TopNavigationButton from './component/common/TopNavigationButton';
import VerifyEmail from './pages/VerifyEmail';
import ViewModules from './pages/ViewModules';
import ViewModuleData from './component/Core/ViewModules/ViewModuleData';
import Taxbot from './pages/Taxbot';
import Mentor from './pages/Mentor';

function App() {
  return (
    <div className='w-screen min-h-screen  flex flex-col font-inter overflow-x-hidden overflow-y-auto'>
      <TopNavigationButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tax-bot" element={<Taxbot />} />
        <Route path="/Tax-calculator" element={<TaxCalculator />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/about" element={<About />} />
        <Route path='/verify-email' element={<VerifyEmail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mentor" element={<Mentor />} />

      <Route
          element={
              <ViewModules />
          }>
          {
              <>
                <Route
                  path="view-Modules/:module"
                  element={<ViewModuleData />}
                />
           
              </>
          }
        </Route>
      
      </Routes>
    </div>
  );
}

export default App;