import React, { useEffect, useRef } from 'react'
import { NavbarLinks } from '../../data/NavbarLinks';
import { matchPath, NavLink, useLocation } from 'react-router-dom';
import logo from "../../assets/img/logo.png"
import { LuChevronFirst } from "react-icons/lu";
import threeDot from "../../assets/img/shape/threeDot.svg"

function Sidebar({showSidebar , setShowSidebar}) {
    const sidebarRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setShowSidebar(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [sidebarRef]);

    function closeHandler(){
        console.log("hii")
        setShowSidebar(false)
    }

    const matchRoute = (route) => {
        return matchPath({path:route},location.pathname)
    }

  return (
    <div>
        <div className={`fixed top-0 left-0 h-screen  z-[1000000] transition-transform duration-300  ease-in ${showSidebar ? "translate-x-0" : "-translate-x-full"} w-[75vw] bg-opacity-95 bg-white text-black`} ref={sidebarRef}>
            <div className="flex flex-col h-full p-4">
            <div className="flex flex-row justify-between  items-center">
                    <img src={threeDot} loading="lazy" alt="Logo" />
                    <button onClick={() => closeHandler()} className="text-lg ">
                        <LuChevronFirst className={`text-black text-3xl ${showSidebar ? "rotate-0 " : " rotate-180"} transition-all duration-100  `} />
                    </button>
                </div>
                <div className='mt-2 flex flex-row justify-between gap-3 items-center relative min-h-[100px]'>
                        <img src={logo} loading="lazy" alt="Logo" className="w-fit h-fit " />

                    </div>

                <div className='flex flex-col gap-4'>
                    {
                        NavbarLinks.map((link,index)=>(
                            <div key={index} >
                                <NavLink to={link.path} >
                                    <div  className={`flex rounded-md flex-row gap-4 items-center py-2 pl-3 ${matchRoute(link.path) ? "bg-yellow-25 text-richblue-900 text-[17px]" : "text-[17px] text-richblack-200"}`}>
                                        <p  className='text-xl font-semibold'
                                        >
                                            {link.title}
                                        </p>
                                    </div>
                                </NavLink>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    </div>
  )
}

export default Sidebar