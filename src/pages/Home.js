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
import StaticNavbar from '../component/common/StaticNavbar';
import Footer from "../component/common/Footer"
import Button2 from '../ui/Button2';

function Home() {

  const navigate = useNavigate();

  return (
    <div className='overflow-x-hidden'>

      {/* Section - 1 */}
      <div
        className="bg-cover bg-no-repeat bg-center pb-[100px] mx-auto relative"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="mx-auto flex flex-col items-center justify-center">

          {/* Static navbar */}
          <div className='max-w-[1360px] w-[95%] m-auto relative z-[1100] m-'>
            <StaticNavbar margin={"8"} />
          </div>
          
          {/* Hero Section */}
          <div className="flex flex-wrap justify-between relative mx-auto pt-[70px] max-w-[1260px] w-11/12">
            <div className="w-full lg:w-[50%] mt-1">
              <div className="pr-0 md:pr-8">
                <h2 className="text-4xl flex flex-row roboto-thin text-[3.2rem] md:text-[4.37rem] font-bold leading-tight mb-10">
                  <p className='text-[#00003f] dm-serif-text-regular'>Level Up Your Financial Rizz </p>
                </h2>
                <p className="mt-4 text-lg text-gray-500 leading-[30px] sedan-regular-italic text-richblack-400">
                  A beginner guide to Indian taxation system and finances, through structured progression and interactive learning
                </p>
                <div className="mt-8 z-50 relative">
                  <a>
                    <Button2 text={"Explore Now"} icon={"FaArrowRight"} />
                  </a>
                </div>
              </div>
            </div>

            {/* Cloud Image */}
            <div className='absolute -top-16 w-[70%] z-[1] -translate-x-[8rem] -translate-y-'>
              <img src={clouds} className='border-image opacity-60' alt="Clouds" />
            </div>

            <div className="md:max-w-[50%] w-full mt-12 lg:mt-0 relative z-0">
              <div className="flex flex-wrap space-x-4 animate-bounce1"> 
                <img className=" " src={heroImg} alt="Thumb 3" />
              </div>
            </div>
          </div>
        </div>

        {/* Clouds Icon */}
        <div className='absolute bottom-0 w-screen w-full md:flex hidden z-[900]'>
          <img src={cloudsIcon} alt="Clouds Icon" />
        </div>
        <div className='absolute bottom-0 w-[500px] h-[200px] flex md:hidden z-[900]'>
          <img src={cloudsIcon} alt="Clouds Icon" />
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Home;
