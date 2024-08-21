import React from 'react';
import * as Icons from "react-icons/fa" 

const Button2 = ({text , icon=null , onClick=null}) => {
  const Icon =Icons[icon]
  return (
    <button
      className="
        inline-flex items-center justify-center 
        h-12 px-4 text-white 
        bg-[radial-gradient(100%_100%_at_100%_0,#381da3_0%,#5468ff_100%)] 
        rounded-lg shadow-[rgba(45,35,66,0.4)_0px_2px_4px,rgba(45,35,66,0.3)_0px_7px_13px_-3px,rgba(58,65,111,0.5)_0px_-3px_0px_inset]
        transition-shadow transition-transform transform-gpu
        font-mono text-[18px] cursor-pointer 
        user-select-none touch-manipulation 
        whitespace-nowrap will-change-[box-shadow,transform]
        focus:outline-none focus:shadow-[rgba(45,35,66,0.4)_0px_2px_4px,rgba(45,35,66,0.3)_0px_7px_13px_-3px,#3c4fe0_0px_0px_0px_1.5px_inset,#3c4fe0_0px_-3px_0px_inset]
        hover:shadow-[rgba(45,35,66,0.4)_0px_4px_8px,rgba(45,35,66,0.3)_0px_7px_13px_-3px,#3c4fe0_0px_-3px_0px_inset] hover:-translate-y-0.5
        active:shadow-[#3c4fe0_0px_3px_7px_inset] active:translate-y-0.5
        gap-2
      "
    >
      {text} {" "} {icon && <Icon/>}
    </button>
  );
};

export default Button2;
