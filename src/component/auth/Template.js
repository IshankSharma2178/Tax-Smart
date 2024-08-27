import React, { useState } from 'react'
import SignupForm from "./SignupForm"
import StaticNavbar from "../common/StaticNavbar"
import LoginForm from './LoginForm'

function Template({img1, heading,subheading1,subheading2,formType}) {

  const [loading,setLoading] = useState(false)

  return (
    
    <div className="background4 min-h-[120vh] ">
      <div className='max-w-[1360px] w-[95%] m-auto relative z-[1100] mx-auto'>
        <StaticNavbar margin={"8"} />
      </div>
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="mx-auto flex w-11/12 max-w-[1360px] mx-auto flex-col justify-between gap-y-12 pt-4 pb-12 md:flex-row md:gap-y-0 md:gap-x-12">
          <div className="mx-auto w-full md:w-11/12 md:max-w-[450px] md:mx-0 ">
            <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
              {heading}
            </h1>
            <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
              <span className="text-richblack-100">{subheading1}</span>{" "}
              <span className="font-edu-sa font-bold italic text-blue-100">
                {subheading2}
              </span>
            </p>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>
          {
            formType === "signup" &&
            (<div className="relative md:flex hidden max-w-[600px] md:mx-0">
              <img  
                alt='logo-image'
                loading="lazy"
                src={img1}
              />
            </div>)
          }
          {
            formType === "login" &&
            (<div className="max-w-[550px] md:flex hidden">
              <img  
                alt='logo-image'
                loading="lazy"
                src={img1}
              />
            </div>)
          }
        </div>
      )}
    </div>
  )
}

export default Template