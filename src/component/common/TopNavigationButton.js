import React from 'react';

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
                className='bg-richblack-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition duration-300' 
                onClick={navigationHandler}>
                Top
            </button>
        </div>
    );
}

export default TopNavigationButton;
