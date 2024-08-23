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
    <div className='fixed md:flex hidden  z-[20] flex justify-center items-center'>
      {showNavbar && (
        <StickyNavbar>
          <div
            style={{
    background: 'linear-gradient(90deg, rgba(221, 218, 215, 1) 0%, rgba(130, 206, 238, 1) 34%, rgba(23, 61, 133, 1) 87%)',
  }}
           className=" h-[50px] z-[10] max-w-[1360px] w-11/12 mx-auto w-fit  px-16  flex items-center justify-between  px-4 py-1 rounded-md shadow-lg">

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