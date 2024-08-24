import React, { useState } from 'react'
import { NavbarLinks } from '../../data/NavbarLinks' 
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import logo from "../../assets/img/logo.png"
import UnderlineAnimation from '../../ui/UnderlineAnimation'
import Button from '../../ui/Button1'
import { IoReorderThree } from "react-icons/io5";
import Sidebar from './Sidebar'

function StaticNavbar({margin, width,height}) {

  const [showSidebar,setShowSidebar] = useState(false)

  const navigate = useNavigate()
    return (
      <div className={`max-w-[1360px] flex flex-row justify-center items-center z-[15] h-${height}       md:h-[15.15vh] md:mt-${margin}`}>
        <div className='flex flex-row w-full mx-auto items-center justify-between'>
          
          {/* sidebar for sm screen */}
          <div className='size-10 md:hidden flex ' onClick={() => setShowSidebar(true)}>
            <IoReorderThree className='w-full text-richblack-800 h-full md:hidden flex'/>
          </div>
          <div className='md:hidden flex'>
            <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
          </div>

          {/* Navbar  */}
          <div onClick={()=>navigate("/")} className='w-[180px] pt-2 md:w-[230px] hover:cursor-pointer h-full'>
            <img src={logo} alt="Logo" />
          </div>
  
          <div className='md:flex flex-row gap-6 ml-6 hidden '>
            {NavbarLinks.map((links, key) => (
              <div key={key}>
                <NavLink to={links.path}>
                  <UnderlineAnimation text={links.title} />
                </NavLink>
              </div>
            ))}
          </div>
          
          {/* Authentication Buttons */}
          <div className='flex flex-row gap-4 mr-0 md:mr-4'>
            <NavLink to="/signup" className="">
              <Button text={"Sign Up"} />
            </NavLink>
            <NavLink to="/login" className="md:flex hidden">
              <Button text={"Log In"} />
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
  
  export default StaticNavbar;
  
