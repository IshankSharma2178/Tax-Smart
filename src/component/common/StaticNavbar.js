import React from 'react'
import { NavbarLinks } from '../../data/NavbarLinks' 
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import logo from "../../assets/img/logo.png"
import UnderlineAnimation from '../../ui/UnderlineAnimation'
import Button from '../../ui/Button1'

function StaticNavbar({margin, width}) {
    const navigate = useNavigate()
    return (
      <div className={`max-w-[1360px] flex flex-row justify-center items-center z-[1100] h-fit mt-${margin}`}>
        {/* logo */}
        <div className='flex flex-row w-full m-auto items-center justify-between'>
          <div onClick={()=>navigate("/")} className='w-[230px] hover:cursor-pointer h-12'>
            <img src={logo} alt="Logo" />
          </div>
  
          <div className='flex flex-row gap-6 ml-6'>
            {NavbarLinks.map((links, key) => (
              <div key={key}>
                <NavLink to={links.path}>
                  <UnderlineAnimation text={links.title} />
                </NavLink>
              </div>
            ))}
          </div>
          
          {/* Authentication Buttons */}
          <div className='flex flex-row gap-4 mr-4'>
            <NavLink to="/sign-up" className="">
              <Button text={"Sign Up"} />
            </NavLink>
            <NavLink to="/login">
              <Button text={"Log In"} />
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
  
  export default StaticNavbar;
  
