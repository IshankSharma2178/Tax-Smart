import React from 'react'
import * as Icons from  "react-icons/fa6";

function Button1({text,icon}) {
  const Icon =Icons[icon]
  return (
    <div>
  <button
    class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-[#1a73e8] uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 active:outline-blue-200  disabled:shadow-none disabled:pointer-events-none bg-[#e8f1fd] hover:bg-[#e0eafc] active:bg-[#cbd6f8]"
    type="button">
        {text}
        {
                icon && <Icon />
        }
  </button>
    </div>
  )
}

export default Button1