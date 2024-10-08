import React from 'react';
import Card from './Card';
import blackBall from "../../../assets/img/shape/anim-2.png";
import reviewImg from "../../../assets/img/reviews.png";

function ReviewSlider() {
  return (
    <>
      <div className="relative">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1000 150" // Further reduced viewBox height to 150
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="wavepath"
              d="M 0 300 0 75 Q 150 60 300 75 t 300 0 300 0 300 0 300 0 300 0 v225 z" // Further reduced wave height
            />
            <path id="motionpath" d="M -600 0 0 0" />
          </defs>
          <g>
            <use xlinkHref="#wavepath" y="54" fill="#0c5adb">
              <animateMotion dur="5s" repeatCount="indefinite">
                <mpath xlinkHref="#motionpath" />
              </animateMotion>
            </use>
          </g>
        </svg>
      </div>
      <div className="background1 relative">
        <div className="max-w-[1260px] w-11/12 mx-auto h-[900px] md:h-[550px]  relative pt-[4rem]">
          <div className='absolute size-[4.75rem] left-4 transition-all top-6 scale-animation'>
            <img src={reviewImg} />
          </div>
          <div className="flex flex-col md:flex-row items-center md:pt-0 pt-[5rem] h-[100%] md:h-[80%] md:justify-between gap-12 md:gap-8">
            <div className= "w-[100%] md:w-[32%]">
              <h1 className="text-[2.75rem] font-bold font-sans text-white leading-tight">
                What customers feedback about us
              </h1>
              <p className='text-richblack-5' >Based on 1,258 reviews</p>
            </div>
            <div className="w-[100%] md:w-[60%] mx-auto flex items-center relative">
              <Card />
              <div className='size-[6rem] animate-bounce2 -right-8 -bottom-16 z-[1] absolute'>
                <img src={blackBall} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewSlider;
