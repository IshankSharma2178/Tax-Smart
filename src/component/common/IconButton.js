import React from 'react'
import * as Icons from "react-icons/fa" 

function IconButton({text , icon=null , onClick=null}) {
    const Icon =Icons[icon]

  return (
    <div onClick={onClick} className=" bg-gradient-to-r from-[#0c5adb] to-[#3f1399] after:bg-gradient-to-r after:from-[#0c5adb] after:to-[#3f1399] text-white py-4 px-10 rounded-lg hover:cursor-pointer shadow-2xl text-xl transform hover:scale-105 transition duration-300 ease-in-out flex flex-row items-center w-fit gap-2 justify-center">
        {text}{" "} {icon && <Icon />}
    </div>
  )
}

export default IconButton