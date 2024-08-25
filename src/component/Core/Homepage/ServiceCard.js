import React from 'react';
import { BsPinAngle } from "react-icons/bs";

function ServiceCard({ heading, subHeading, features, image }) {
  return (
    <div className='group bg-white flex px-14 pt-16 pb-16 gap-4 flex-row w-full max-h-[400px] shadow-xl hover:background3 transition-all duration-300'>
      <div className='w-[16rem]'>
        <img src={image} alt="Service" className=''/>
      </div>
      <div className='flex flex-col gap-4'>
        <h1 className='text-xl font-bold'>{heading}</h1>
        <p className='text-richblack-400 tracking-wide text-sm leading-loose'>{subHeading}</p>
        {
          features.map((feature, index) => (
            <div key={index} className='flex flex-row gap-4 items-center'>
              <div>
                <BsPinAngle />
              </div>
              <p className='text-richblack-300 font-semibold'>
                {feature}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default ServiceCard;
