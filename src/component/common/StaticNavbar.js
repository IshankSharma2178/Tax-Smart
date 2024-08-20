import React from 'react'
import { NavbarLinks } from '../../data/NavbarLinks' 
import { NavLink } from 'react-router-dom'
import logo from "../../assets/img/logo.png"
import Button from '../../ui/Button1'

function StaticNavbar({margin,width}) {
  return (
        <div className={`max-w-[1260px] w-[${width}] flex flex-row  justify-center items-center h-fit z-50 mt-${margin}`} >
            {/* logo */}
            <div className='flex flex-row w-full m-auto items-center justify-between'>
                <div className='w-[230px]  hover:cursor-pointer h-12'>
                    <img src={logo}/>
                </div>


                <div className='flex flex-row gap-6 ml-6'>
                {NavbarLinks.map((links, key) => (
                    <div key={key}>
                    <NavLink to={links.path}>
                        <div className='cursor-pointer text-xl text-richblack-700 font-medium'>
                        {links.title}
                        </div>
                    </NavLink>
                    </div>
                ))}
                </div>
                 {/* Authentication Buttons */}
                 <div className='flex flex-row gap-4 mr-4'>
                    <NavLink to="/sign-up" className="">
                        <Button text={"Sign Up"}/>

                    </NavLink>
                    <NavLink to="/login">
                        <Button text={"Log In"}/>
                    </NavLink>
                </div>
    </div>
    </div>

  )
}

export default StaticNavbar