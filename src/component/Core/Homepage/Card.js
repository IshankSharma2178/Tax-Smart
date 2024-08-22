import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import 'swiper/css/navigation';
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules'
import {data} from '../../../data/Review'
import image from "../../../assets/img/team/v5.jpg"

function Card() {

  return (
    <div className="text-white m-auto w-full z-[10] ">
    <div className=" m-auto h-[404px] w-full">
      <Swiper
        slidesPerView={2}
        loop={true}
        spaceBetween={25}
        freeMode={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
              1024: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 1,
              },
              400: {
                slidesPerView: 1,
              },
              100:{
                slidesPerView: 1,
              }
            }}
        
        modules={[FreeMode, Pagination, Autoplay]}
        className="w-full h-full "
      >
        {data?.map((review, i) => {
          return (
            <SwiperSlide key={i}>
                <div className=" flex flex-col items-stretch justify-between  hover:cursor-pointer rounded-md w-[320px] px-8 py-12 bg-white h-[400px] p-3  ">
                    
                    <p className='text-richblack-400 text-lg'>{review.description}</p>
                    <div className='flex flex-col'>
                        <div className='flex flex-row items-center justify-evenly '>
                            <div className='size-16 rounded-full'>
                                <img src={image} className='rounded-full'/>
                            </div>
                            <div className='felx flex-col'>                        
                                <p className='text-richblack-900 font-semibold text-lg'>{review.Post}</p>
                                <div className='flex flex-row'>
                                    <p className='text-[#0c5adb] text-md font-semibold'>{review.name}</p>
                                    <p className='text-richblack-300 text-md'>/ {review.Profession}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                
                </div>
            </SwiperSlide>
          )
        })}
        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
      </Swiper>
    </div>
  </div>
)
}


export default Card