import React, { useEffect, useState } from 'react'
import { NavbarLinks } from '../../data/NavbarLinks' 
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import logo from "../../assets/img/logo.png"
import UnderlineAnimation from '../../ui/UnderlineAnimation'
import Button from '../../ui/Button1'
import { IoReorderThree } from "react-icons/io5";
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import ProfileDropDown from './ProfileDropDown'
import { getCoins } from '../../Servies/operations/module'
import { setCoins } from '../../slices/ModuleSlice'

function StaticNavbar({margin, width,height}) {

  const {token,user} = useSelector((state)=>state.auth);
  const {coins} = useSelector((state)=>state.module)
  const [showSidebar,setShowSidebar] = useState(false)
  const [loading,setLoading] = useState(false)
  const dispatch = useDispatch();

  useEffect(()=>{
    const getUserCoins = async () =>{
      console.log('getUserCoins',user.email);
      const result = await getCoins(user.email);
      dispatch(setCoins(result))
    }
    setLoading(true)
    if(token){
      getUserCoins();

    }
    setLoading(false);
  },[])

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
                  <UnderlineAnimation  text={links.title} />
                </NavLink>
              </div>
            ))}
          </div>
          
          {/* Authentication Buttons */}
          {
            token === null &&
            <div className='flex flex-row gap-4 mr-0 md:mr-4'>
            <NavLink to="/signup" className="">
              <Button text={"Sign Up"} />
            </NavLink>
            <NavLink to="/login" className="md:flex hidden">
              <Button text={"Log In"} />
            </NavLink>
          </div>}

            {/* Coins */}

            {/* profile Drop Down */}
            
              {
              token !== null &&
            <div className='w-auto text-right min-w-[180px]'>
              <div className='flex items-end justify-end gap-4'>
                <div>{coins}</div>
                <ProfileDropDown />
              </div>
            </div>
            }

        </div>
      </div>
    );
  }
  
  export default StaticNavbar;
  
