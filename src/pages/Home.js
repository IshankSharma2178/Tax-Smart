import React from 'react';
import heroImg from "../assets/img/illustration/8.png"
import banner from "../assets/img/shape/banner.jpg";
import arrow from "../assets/img/shape/17.png";
import { FaArrowRight } from "react-icons/fa";
import cloudsIcon from "../assets/img/icon/5.png"
import greenDots from "../assets/img/shape/6.png"
import { NavbarLinks } from '../data/NavbarLinks';
import { NavLink } from 'react-router-dom';
import clouds from "../assets/img/illustration/cloud.png"
 
function Home() {
  return (
    <div className='overflow-x-hidden '>

    {/* Section - 1 */}
      <div
        className="bg-cover bg-no-repeat bg-center   pb-[100px] mx-auto relative"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="max-w-[1260px] w-11/12 mx-auto flex flex-col items-center   justify-center">

            {/* Header */}
            <div className='flex flex-row py-10 w-full m-auto items-center justify-between'>
                <div>
                    logo
                </div>

            {/* navbar-links */}
                <div>
                    <div className='flex flex-row gap-10 ml-8'>
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
            {/* Authentication Buttons */}
                <div className='flex flex-row gap-10 mr-4'>
                    <NavLink to="/sign-up">
                        <div>Sign Up</div>
                    </NavLink>
                    <NavLink to="/login">
                        <div>Login</div>
                    </NavLink>
                </div>
            </div>

            {/* Hero Section */}
          <div className="flex flex-wrap justify-between mx-auto pt-[70px]">
            <div className="w-full lg:w-[50%] mt-1 relative">
              <div className="pr-8">
                <h2 className="text-4xl flex flex-row  roboto-thin text-[70px] font-bold leading-tight mb-10">
                  <p className='text-blue-950'>#</p>Level Up Your  Financial Rizz 
                </h2>
                <p className="mt-4 text-lg text-gray-500 leading-[30px] tracking-wide">
                    A beginner guide to Indian taxation system ,three structured progression and interactive learning
                </p>
                <div className="mt-8">
                  <a className=" bg-gradient-to-r from-[#0c5adb] to-[#3f1399] after:bg-gradient-to-r after:from-[#0c5adb] after:to-[#3f1399] text-white py-4 px-10 rounded-lg hover:cursor-pointer shadow-2xl text-xl transform hover:scale-105 transition duration-300 ease-in-out flex flex-row items-center w-fit gap-2 justify-center">
                    <p>Explore Now</p> 
                    <FaArrowRight />
                  </a>
                </div>
              </div>
              <div className='absolute -top-10 -translate-y-2'>
  <img src={clouds} className='border-image' />
</div>


            </div>

            <div className="max-w-[50%] mt-12 lg:mt-0 relative ">
              <div className="flex flex-wrap space-x-4 animate-bounce1"> 
                <img className=" " src={heroImg} alt="Thumb 3" />
              </div>
              {/* <div className='absolute top-0 w-[500px]'>
                <img src={greenDots}/>
              </div> */}
            </div>
          </div>
        </div>

        {/* Clouds Image */}
        <div className='absolute bottom-0 w-screen w-full'>
            <img  src={cloudsIcon} />
        </div>

      </div>
    </div>
  );
}

export default Home;
