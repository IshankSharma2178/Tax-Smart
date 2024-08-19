import React from 'react'
import { NavbarLinks } from '../../data/NavbarLinks'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='fixed w-full z-50'>
      <div className=" h-[50px] bg-gradient-to-r from-purple-300 via-pink-400 to-red-400 flex items-center justify-between my-6 mx-4 px-4 py-1 rounded-md shadow-lg">
      
        {/* Logo */}
        <span className=" text-white text-2xl ">TaxSmart Logo</span>

        {/* navbar-links */}
        <div className='flex flex-row gap-10'>
            {
                NavbarLinks.map((links,key)=>(
                    <div>
                        <NavLink to={links.path}>
                            <div>
                                {links.title}
                            </div>
                        </NavLink>
                    </div>
                ))
            }
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
    </div>

  )
}

export default Navbar