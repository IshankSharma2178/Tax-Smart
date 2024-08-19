import React, { useState, useEffect } from 'react';
import { NavbarLinks } from '../../data/NavbarLinks';
import { NavLink } from 'react-router-dom';
import StickyNavbar from "react-sticky-navbar";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='fixed  z-50 flex justify-center items-center'>
      {showNavbar && (
        <StickyNavbar>
          <div className=" h-[50px]  max-w-[1360px] w-11/12 mx-auto w-full bg-gradient-to-r from-purple-300 via-pink-400 to-red-400 flex items-center justify-between  px-4 py-1 rounded-md shadow-lg">
            {/* Logo */}
            <span className=" text-white text-2xl ">TaxSmart Logo</span>

            {/* navbar-links */}
            <div className='flex flex-row gap-10'>
              {NavbarLinks.map((links, key) => (
                <div>
                  <NavLink to={links.path}>
                    <div>
                      {links.title}
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>

            <div className='flex flex-row gap-10 mr-4'>
              <NavLink to="/sign-up">
                <div>Sign Up</div>
              </NavLink>
              <NavLink to="/login">
                <div>Login</div>
              </NavLink>
            </div>
          </div>
        </StickyNavbar>
      )}
    </div>
  );
}

export default Navbar;