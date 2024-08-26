import React, { useState } from 'react'
import SignupForm from "./SignupForm"
import StaticNavbar from "../common/StaticNavbar"
import LoginForm from './LoginForm'

function Template({img1, img2,heading,subheading1,subheading2,formType}) {

  const [loading,setLoading] = useState(false)

  return (
    
    <div className="w-11/12 max-w-[1260px] mx-auto">
      <StaticNavbar />
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="mx-auto flex   flex-col justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
          <div className="mx-auto w-full md:w-11/12 md:max-w-[450px] md:mx-0">
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
          <div className="relative  max-w-[600px] md:mx-0">
            {/* <img
              src={img2}
              alt="Pattern"
              width={558}
              height={504}
              loading="lazy"
            />
            <img
              src={img1}
              alt="Students"
              width={558}
              height={504}
              loading="lazy"
              className="absolute -top-4 right-4 z-10"
            /> */}

            <img  
              alt='logo-image'
              loading="lazy"
              src={img1}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Template