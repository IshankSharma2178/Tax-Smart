import React from 'react'
import ModuleCard from './ModuleCard'
import Wave from "../../../assets/img/shape/wave1.svg"
import RocketImg from "../../../assets/img/icon/rocket.png"

function Modules() {
  return (
    <div>
      <div className='relative'>
        <img src={Wave} />
        <div className='absolute w-[150px] right-16  top-[7rem] animate-bounce2'>
            <img src={RocketImg}/>
        </div>
      </div>
      <div className='background1'>
        <div className='max-w-[960px] w-11/12 relative m-auto pb-[10rem] '>
        <div className='flex flex-col gap-8'>
            <div className='text-center'>
                <p className='text-richblack-25 text-xl font-semibold'>What We Do</p>
                <p className='text-white text-[3rem] font-bold'>Discover Your Personalized Tax Solution</p>
            </div>
            <div className='flex flex-row w-full max-w-[100px] mx-auto gap-3'>
                <p className='w-1/4 border-b-[2px]  border-b-richblack-5'></p>
                <p className='w-3/4 border-b-[2px] border-b-richblack-5'></p>
            </div>
            <div className='h-[450px]'> 
                <ModuleCard />
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Modules
