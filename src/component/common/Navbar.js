import React, { useState, useEffect } from 'react';
import { NavbarLinks } from '../../data/NavbarLinks';
import { matchPath, NavLink, useLocation } from 'react-router-dom';
import StickyNavbar from "react-sticky-navbar";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if ( window.scrollY < 303.9199981689453 & window.scrollY >= 0) {
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
    <div className='fixed md:flex hidden  z-[2000] flex justify-center items-center'>
      {showNavbar && (
        <StickyNavbar>
          <div className=" h-[50px] z-[1000] max-w-[1360px] w-11/12 mx-auto w-fit  px-16 bg-gradient-to-r from-[rgb(214,188,250)] via-[rgb(244,114,182)] to-[rgb(248,113,113)] flex items-center justify-between  px-4 py-1 rounded-md shadow-lg">

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
          </div>
        </StickyNavbar>
      )}
    </div>
  );
}

export default Navbar;