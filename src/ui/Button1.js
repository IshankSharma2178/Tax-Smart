import React from 'react';

const Button = ({text}) => {
  return (
    <button
      className="
        flex items-center justify-center
        appearance-none bg-gradient-to-br from-[#5adaff] to-[#5468ff]
        border-0 rounded-lg shadow-[rgba(45,35,66,0.4)_0px_2px_4px,rgba(45,35,66,0.3)_0px_7px_13px_-3px,rgba(58,65,111,0.5)_0px_-3px_0px_inset]
        box-border text-white cursor-pointer
        font-mono h-11 px-4 text-left no-underline
        transition-shadow transition-transform
        select-none touch-manipulation whitespace-nowrap
        text-[18px] leading-[1]
        focus:shadow-[rgba(45,35,66,0.4)_0px_2px_4px,rgba(45,35,66,0.3)_0px_7px_13px_-3px,rgba(45,35,66,0.3)_0px_-3px_0px_inset,rgba(60,79,224,0.4)_0px_0px_0px_1.5px_inset]
        hover:shadow-[rgba(45,35,66,0.4)_0px_4px_8px,rgba(45,35,66,0.3)_0px_7px_13px_-3px,rgba(60,79,224,0.4)_0px_-3px_0px_inset]
        hover:translate-y-[-2px]
        active:shadow-[rgba(60,79,224,0.4)_0px_3px_7px_inset]
        active:translate-y-[2px]
      "
      role="button"
    >
      {text}
    </button>
  );
};

export default Button;
