import React from 'react'
import Image from "../../../assets/img/gallery/Image1.png"
import CircularShape from "../../../assets/img/shape/20.png"

function AboutTaxSmart() {
  return (
    <div className=' flex flex-row relative max-w-[1260px] w-11/12 m-auto'>
        <div className='absolute right-0 -top-8'>
            <img src={CircularShape} />
        </div>
        <div className='w-[50%] pt-8 m-auto'>
            <img src={Image}/>
        </div>
        <div className='w-[50%] m-auto flex  flex-col gap-6'>
            <div className='text-[3rem] text-[#3f1399] font-bold'>About TaxSmart…</div>
            <div className='text-richblack-500 text-lg '>TaxSmart is an innovative platform designed to empower individuals and businesses to 
                master Indian taxations and optimize their financial well-being. Our mission is to 
                provide comprehensive tax knowledge, expert insights, and practical tools to help users 
                navigate the complex world of taxation with confidence </div>
        </div>
    </div>
  )
}

export default AboutTaxSmart