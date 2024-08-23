import React from 'react';
import { IoIosArrowUp } from "react-icons/io";

function TopNavigationButton() {

    const navigationHandler = () => {
        console.log('navigationHandler');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    

    return (
        <div className='fixed right-4 bottom-4 z-[2000000]'>
            <button 
                className='bg-white text-black shadow-lg border hover:animate-bounce border-richblack-200 p-3 rounded-full  hover:bg-gray-700 transition duration-300' 
                onClick={navigationHandler}>
                    <IoIosArrowUp className='text-xl'/>
            </button>
        </div>
    );
}

export default TopNavigationButton;
