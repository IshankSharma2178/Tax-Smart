import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import 'swiper/css/navigation';
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules'
import icon1 from "../../../assets/img/icon/start-up.png"
import icon2 from "../../../assets/img/icon/start-up1.png"
import icon3 from "../../../assets/img/icon/start-up2.png"
import icon4 from "../../../assets/img/icon/start-up3.png"
import Shape1 from "../../../assets/img/shape/Shape1.svg" 
import circularShape from "../../../assets/img/shape/30.png"
import { MdArrowOutward } from "react-icons/md";

function ModuleCard() {

const details =[
    {
        title:"Intro to Taxation System",
        description:"Unlock the essentials of India's Taxation System and discover the key differences between the Old and New tax regimes."
    },
    {
        title:"Taxation Topics",
        description:"Master the key concepts of deductions, exemptions, and rebates across different tax regimes to optimize your tax savings"
    },
    {
        title:"Investment strategies",
        description:"Explore smart investment strategies that can secure your financial future, from pension schemes to mutual funds and beyond." 
    },
]

  return (
    <div>
        <Swiper
        slidesPerView={3}
        loop={true}
        spaceBetween={25}
        freeMode={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
              1024: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              400: {
                slidesPerView: 2,
              },
              100:{
                slidesPerView: 1,
              }
            }}
        
        modules={[FreeMode, Pagination, Autoplay]}
        className="w-full h-full "
      >
        {details?.map((data, i) => {
          return (
            <SwiperSlide key={i}>
            <div className="flex flex-col group hover:cursor-pointer rounded-lg px-8 pt-8 hover:h-[430px] transition-all duration-500 bg-white h-[400px] relative">
                
                <div className='opacity-0 group-hover:opacity-100 absolute transition-all duration-700 -right-2 group-hover:right-0'>
                    <img src={circularShape}/>
                </div>
                
                <div className='h-[130px]'>
                    { i === 0 &&
                        <div className='relative '>
                            <div className='absolute w-[7rem] '>
                                <img src={Shape1} /> 
                            </div>
                            <div className='w-[5.5rem] absolute p-4 left-3 top-2 rounded-full  '>
                                <img src={icon1} className='text-white w-[]'/>
                            </div>    
                        </div>
                    }
                    { i === 1 &&
                        <div className='relative '>
                            <div className='absolute w-[7rem] '>
                                <img src={Shape1} /> 
                            </div>
                            <div className='w-[5.5rem] absolute p-4 left-3 top-2 rounded-full  '>
                                <img src={icon1} className='text-white w-[]'/>
                            </div>    
                        </div>    
                    }
                    { i === 2 &&
                        <div className='relative '>
                            <div className='absolute w-[7rem] '>
                                <img src={Shape1} /> 
                            </div>
                            <div className='w-[5.5rem] absolute p-4 left-3 top-2 rounded-full  '>
                                <img src={icon1} className='text-white w-[]'/>
                            </div>    
                        </div> 
                    }
                </div>

                <div className='text-black font-bold text-lg h-[60px]'>
                    {data.title}
                </div>
                <div className='text-richblack-200 text-sm leading-loose'>
                    {data.description}
                </div>  
                <div className='mt-4 text-start'>
                    <button className='transform flex flex-row items-center gap-2 translate-x-0 opacity-0 group-hover:translate-x-4 group-hover:opacity-100 group-hover:underline transition-all duration-500 text-blue-500 mt-4'>
                        {"    "}Read more
                        <MdArrowOutward />
                    </button>
                </div>     
            </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default ModuleCard
