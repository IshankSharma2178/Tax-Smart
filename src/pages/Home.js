import React from 'react';
import heroImg from "../assets/img/illustration/8.png"
import banner from "../assets/img/shape/banner.jpg";
import arrow from "../assets/img/shape/17.png";
import { FaArrowRight } from "react-icons/fa";

function Home() {
  return (
    <div className='overflow-x-hidden '>
      <div
        className="bg-cover bg-no-repeat bg-center  pt-[50px] pb-10 mx-auto"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="max-w-[1260px] w-11/12 mx-auto flex items-center pt-16  justify-center">
          <div className="flex flex-wrap justify-between mx-auto">
            <div className="w-full lg:w-[45%] mt-1">
              <div className="pr-8">
                <h2 className="text-4xl flex flex-row  roboto-thin text-[70px] font-bold leading-tight mb-10">
                  <p className='text-blue-950'>#</p>Level Up Your  Financial Rizz 
                </h2>
                <p className="mt-4 text-lg text-gray-500 leading-[30px]">
                    A beginner guide to Indian taxation system ,three structured progression and interactive learning
                </p>
                <div className="mt-8">
                  <a className=" bg-gradient-to-r from-[#0c5adb] to-[#3f1399] after:bg-gradient-to-r after:from-[#0c5adb] after:to-[#3f1399] text-white py-4 px-10 rounded-lg hover:cursor-pointer shadow-2xl text-xl transform hover:scale-105 transition duration-300 ease-in-out flex flex-row items-center w-fit gap-2 justify-center">
                    <p>Explore Now</p> 
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>

            <div className="max-w-[55%] mt-12 lg:mt-0 relative">
              <div className="flex flex-wrap space-x-4"> 
                <img className=" " src={heroImg} alt="Thumb 3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
