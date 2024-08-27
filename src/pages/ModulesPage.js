import React from 'react'
import banner from "../assets/img/banner/8.jpg"
import { FaArrowRight } from 'react-icons/fa6'
import Button1 from '../component/common/UI/Button1'

function ModulesPage({ModuleName,Description,noOfModules , index}) {
  return (
    <div className=''>
       <div className="max-w-[22rem] rounded-lg m-auto mt-10  overflow-hidden shadow-sm border border-richblack-25">
            <div className='p-4'>
              <img 
                  className="w-full h-48 object-cover" 
                  src={banner}
                  alt="Course"
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
                <div className="text-gray-800 flex flex-row gap-1 text-2xl  mt-1">
                  <div className='text-richblack-300'>0{index+1}</div> 
                  <div>{ModuleName}</div>  
                </div>
                <div className="flex items-center text-gray-600 mt-2">
                    <span className="mr-2">📚 Course</span>
                    <span className="mr-2">⏰ {noOfModules} Topics</span>
                    <span>🌟 Introductory</span>
                </div>
                <p className="text-richblack-600 mt-4 tracking-wide text-sm">
                    {Description}
                </p>
                <div className='mt-6'>
                  <Button1 icon={"FaArrowRight"} text={"Start course"} >
                  </Button1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModulesPage