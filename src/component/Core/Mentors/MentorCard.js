import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';
import { makePayment } from '../../../Servies/operations/Payment';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

function MentorCard({data}) {

    const {token ,user:userDetails} = useSelector((state)=>state.auth)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const totalAmount = 100; 

    const connectHandler = async() => {
        const result = await makePayment(token, totalAmount, userDetails, navigate, dispatch)
    }

  return (
    <div className="min-w-[20rem] bg-white border border-richblack-100 rounded-lg shadow-md overflow-hidden">
    {/* Course Image */}
    <div className="h-60 bg-purple-300 p-4">
      <img
        src={data.image}
        alt="Course"
        className="h-full w-full object-cover"
      />
    </div>

    {/* Course Details */}
    <div className="p-4">
      {/* Course Title */}
      <h3 className="text-lg font-semibold text-gray-800">{data.title}</h3>

      {/* Instructor Name */}
      <p className="text-sm text-richblack-400 mb-2">{data.description}</p>

      {/* Rating */}
      <div className="flex items-center mb-2">
        <span className="text-yellow-500 flex items-center">
          <FaStar className="mr-1" />
          <FaStar className="mr-1" />
          <FaStar className="mr-1" />
          <FaStar className="mr-1" />
          <FaStar className="mr-1 text-gray-300" />
        </span>
        <span className="ml-2 text-sm text-richblack-600">(275,171)</span>
      </div>

      {/* Price Section */}
      <div className="flex items-center mb-8">
        <span className="text-xl font-bold text-gray-800">₹{data.price}</span>
      </div>
      <button className='button-66 ' onClick={()=>connectHandler()}>
        Connect Now
      </button>
    </div>
  </div>
  )
}

export default MentorCard