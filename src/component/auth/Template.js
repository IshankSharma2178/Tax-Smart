import React, { useState } from 'react'
import SignupForm from "./SignupForm"
import LoginForm from './LoginForm'
import StaticNavbar from '../common/StaticNavbar'

function Template({img1, img2,heading,subheading1,subheading2,formType}) {

  const [loading , setLoading] = useState(false)

  return (
    <>
    <div className='max-w-[1360px] w-[95%] m-auto relative z-[11]'>
        <StaticNavbar margin={"8"} />
      </div>
    <div className="w-screen  bg-richblack-400 m-auto">
      
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className='min-h-[calc(100vh-3.5rem)] m-auto w-11/12 max-w-[1260px] '> 
          <div className="mx-auto flex  md:flex-row flex-col justify-between  ">
            <div className=" w-full md:w-[50%] ">
              <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
                {heading}
              </h1>
              <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
                <span className="text-richblack-100">{subheading1}</span>{" "}
                <span className="font-edu-sa font-bold italic text-blue-100">
                  {subheading2}
                </span>
              </p>
              <div className="relative md:block hidden place-content-center mx-auto w-11/12 max-w-[500px] md:mx-0">        
                <img  
                  alt='logo-image'
                  width={800}
                  loading="lazy"
                  height={504}
                  src={img1}
                />
              </div>
            </div>
            <div className= 'w-full md:w-[50%]'>
              {formType === "signup" ? <SignupForm /> : <LoginForm />}
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default Template