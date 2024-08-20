import React from 'react';
import * as Icons from "react-icons/fa" 

const Button2 = ({text , icon=null , onClick=null}) => {
    const Icon =Icons[icon]
  return (
    <button
    onClick={onClick} 
      className="
        inline-flex items-center justify-center
        appearance-none
       bg-gradient-to-r from-[#0c5adb] to-[#3f1399]
        border-0 rounded-[6px]
shadow-[rgba(45,35,66,0.6)_0px_2px_4px,rgba(45,35,66,0.5)_0px_7px_13px_-3px,rgba(58,65,111,0.7)_0px_-3px_0px_inset]

        box-border text-white cursor-pointer
        font-mono h-12 pl-4 pr-4 text-left no-underline
        transition-shadow transition-transform
        select-none touch-manipulation whitespace-nowrap
        text-[18px] leading-[1] relative overflow-hidden
        focus:shadow-[rgba(60,79,224,0.4)_0px_0px_0px_1.5px_inset,rgba(45,35,66,0.4)_0px_2px_4px,rgba(45,35,66,0.3)_0px_7px_13px_-3px,rgba(60,79,224,0.4)_0px_-3px_0px_inset]
        hover:shadow-[rgba(45,35,66,0.4)_0px_4px_8px,rgba(45,35,66,0.3)_0px_7px_13px_-3px,rgba(60,79,224,0.4)_0px_-3px_0px_inset]
        hover:translate-y-[-2px]
        active:shadow-[rgba(60,79,224,0.4)_0px_3px_7px_inset]
        active:translate-y-[2px]
         flex flex-row items-center w-fit gap-2 justify-center
      "
      role="button"
    >
       {text}{" "} {icon && 
            <div className=''>
                <Icon />
            </div>
                }
    </button>
  );
};

export default Button2;
