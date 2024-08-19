import React from 'react';
import heroImg from "../assets/img/illustration/8.png"
import banner from "../assets/img/shape/banner.jpg";
import arrow from "../assets/img/shape/17.png";
import { FaArrowRight } from "react-icons/fa";
import IconButton from '../component/common/IconButton';
import cloudsIcon from "../assets/img/icon/5.png"
import greenDots from "../assets/img/shape/6.png"
import { NavbarLinks } from '../data/NavbarLinks';
import { NavLink, useNavigate } from 'react-router-dom';
import clouds from "../assets/img/illustration/CLouds1.png"
import logo from "../assets/img/logo.png"

function Home() {

  const navigate = useNavigate();

  return (
    <div className='overflow-x-hidden '>

    {/* Section - 1 */}
      <div
        className="bg-cover bg-no-repeat bg-center   pb-[100px] mx-auto relative"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className=" mx-auto flex flex-col items-center  justify-center">
          
          {/* Header */}
          <div className=' max-w-[1260px] w-[95%] flex flex-row mt-8 justify-center items-center h-fit z-50'>
            {/* logo */}
            <div className='flex flex-row w-full m-auto items-center justify-between'>
                <div className='w-[230px]  hover:cursor-pointer h-12'>
                    <img src={logo}/>
                </div>

            {/* navbar-links */}
                <div>
                    <div className='flex flex-row gap-6 ml-8'>
                    {NavbarLinks.map((links, key) => (
                        <div key={key}>
                        <NavLink to={links.path}>
                            <div className='cursor-pointer text-xl font-medium'>
                            {links.title}
                            </div>
                        </NavLink>
                        </div>
                    ))}
                    </div>
                </div>

            {/* Authentication Buttons */}
                <div className='flex flex-row gap-10 mr-4'>
                    <NavLink to="/sign-up" className="">
                    <button class="gradient-border-button px-4 py-2 rounded-xl">
                      Sign up
                    </button>


                    </NavLink>
                    <NavLink to="/login">
                        <div>Login</div>
                    </NavLink>
                </div>
            </div>

          </div>
            
            {/* Hero Section */}
          <div className="flex flex-wrap justify-between relative mx-auto pt-[70px] max-w-[1260px] w-11/12">
            <div className="w-full lg:w-[50%] mt-1 ">
              <div className="pr-8">
                <h2 className="text-4xl flex flex-row  roboto-thin text-[70px] font-bold leading-tight mb-10">
                  <p className='text-[#00003f]'>Level Up Your Financial Rizz </p>
                </h2>
                <p className="mt-4 text-lg text-gray-500 leading-[30px] tracking-wide">
                    A beginner guide to Indian taxation system, three structured progression and interactive learning
                </p>
                <div className="mt-8 z-20 relative">
                  <a>
                  <IconButton icon="FaArrowRight" text="Explore Now" onClick={()=>navigate("/signup")}/> 
                  </a>
                </div>
              </div>
            </div>

            {/* Cloud Image */}
            <div className='absolute -top-16 -translate-y-[10%] w-[70%] z-10 -translate-x-16'>
              <img src={clouds} className='border-image opacity-60' />
            </div>

            <div className="max-w-[50%] mt-12 lg:mt-0 relative z-0">
              <div className="flex flex-wrap space-x-4 animate-bounce1"> 
                <img className=" " src={heroImg} alt="Thumb 3" />
              </div>
            </div>
          </div>
        </div>

        {/* Clouds Icon */}
        <div className='absolute bottom-0 w-screen w-full z-0'>
            <img  src={cloudsIcon} />
        </div>

      </div>
    </div>
  );
}


export default Home;
