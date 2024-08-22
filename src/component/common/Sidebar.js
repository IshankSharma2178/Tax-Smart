import React, { useEffect, useRef } from 'react'
import { NavbarLinks } from '../../data/NavbarLinks';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/img/logo.png"
import { LuChevronFirst } from "react-icons/lu";
import threeDot from "../../assets/img/shape/threeDot.svg"

function Sidebar({showSidebar , setShowSidebar}) {
    const sidebarRef = useRef(null);

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

  return (
    <div>
        <div className={`fixed top-0 left-0 h-screen Sidebar-bg z-[1000000] transition-transform duration-300  ease-in ${showSidebar ? "translate-x-0" : "-translate-x-full"} w-[75vw] bg-opacity-95 bg-white text-black`} ref={sidebarRef}>
            <div className="flex flex-col h-full p-4">
            <div className="flex flex-row justify-between  items-center">
                    <img src={threeDot} loading="lazy" alt="Logo" />
                    <button onClick={() => closeHandler()} className="text-lg ">
                        <LuChevronFirst className={`text-black text-3xl ${showSidebar ? "rotate-0 " : " rotate-180"} transition-all duration-100  `} />
                    </button>
                </div>
                <div>
                    <img src={logo} />
                </div>

                <div className='mx-auto text-2xl flex flex-col'>
                    {
                        NavbarLinks.map((link,index)=>(
                            <div key={index}>
                                <NavLink to={link.path} >
                                    <div>{link.title}</div>
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