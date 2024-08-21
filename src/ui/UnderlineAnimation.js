import React from 'react';

const UnderlineAnimation = ({text}) => {
  return (
    <ul className="cursor-pointer text-xl text-richblack-700 font-medium ">
      <li className="">
        <a
          href="#0"
          className="relative block py-[0.2em] overflow-hidden before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[0.1em] before:bg-pink-200 before:opacity-100 before:translate-x-[-100%] before:transition before:duration-300 hover:before:translate-x-0"
        >
          {text}
        </a>
      </li>
    </ul>
  );
};

export default UnderlineAnimation;
