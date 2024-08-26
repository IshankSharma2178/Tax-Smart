import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import AnimatedInput from './AnimatedInput'; // Import the AnimatedInput component
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { login } from '../../Servies/operations/auth';

function LoginForm() {

  const { register, getValues, setValue, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm(); 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const submitHandler = (signupData) => {
    if (isValidEmail(signupData.email)) {
      console.log("Valid email address");
    } else {
      toast.error("Enter valid email address")
      console.log("Invalid email address");
      return 
    }
    reset({
      email: "", password: "",
    });
    dispatch(login(signupData.email,signupData.password,navigate)); 
  }

  return (
   <div className='flex flex-col gap-6'>
      <div className='text-[2rem] font-semibold '>
        Welcome Back
      </div>
      <div className='text-[#456297] text-xl'>      
        continue your journey on taxation and financial management.
      </div>
      <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col gap-4'>
        <AnimatedInput errors={errors} type="text" label="Email Address" name="email" register={register} required={true} />
        
          <div className='flex flex-col  relative'>
          <AnimatedInput errors={errors} type="password" label="Enter Password" name="password" register={register} required={true} />
          </div>
          <div className='flex flex-col -translate-y-2 gap-4'>
            <div className='flex flex-row gap-1'>
              <p className='text-[#2d4064]'>Don't have an account?</p> 
              <NavLink to={"/signup"} className="text-blue-500 underline">
                Register
              </NavLink>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded shadow-md mr-4 transition-transform hover:scale-95"
            >
              Sign In
            </button>
          </div>
      </form>
    </div>
  )
}

export default LoginForm