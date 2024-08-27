import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import AnimatedInput from './AnimatedInput'; 
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../slices/authSlice';
import { sendOtp } from '../../Servies/operations/auth';

function SignupForm() {
  const { register, getValues, setValue, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm(); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state)=>state.auth);

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
      email: "", firstName: "", lastName: "", confirmPassword: "", password: "",
    });
    console.log('Signup values submitted successfuly',signupData.email);
    dispatch(setUser(signupData))
    dispatch(sendOtp(signupData.email, navigate))
    console.log('Signup values submitted',user);

    console.log(signupData);
  }

  return (
    <div className='flex flex-col gap-6'>
      <div className='text-[2rem] font-semibold '>
        Join the millions learning Taxation for free
      </div>
      <div className='text-[#456297] text-xl'>
      Upgrade Yourself for today, tomorrow, and beyond. {" "}
      </div>
      <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col gap-3'>
        <div className='flex flex-row w-[100%] gap-4'>
          <AnimatedInput errors={errors} type="text" label="First Name" name="firstName" register={register} required={true} />
          <AnimatedInput errors={errors} type="text" label="Last Name" name="lastName" register={register} required={true} />
        </div>
        <AnimatedInput errors={errors} type="text" label="Email Address" name="email" register={register} required={true} />
        
        <div className='flex flex-row w-[100%] gap-4'>
          <div className='flex flex-col w-[50%] relative'>
          <AnimatedInput errors={errors} type="true" label="Create Password" name="password" register={register} required={true} />
          </div>
          <div className='flex flex-col w-[50%] relative'>
          <AnimatedInput errors={errors} type="true" label="Confirm Password" name="confirmPassword" register={register} required={true} />
          </div>
        </div>
        <div className='flex flex-col -translate-y-2 gap-4'>
          <div className='flex flex-row gap-1 '>
            <p className='text-[#2d4064]'>Already have an account?</p> 
            <NavLink to={"/login"} className="text-blue-500 underline">
              Login
            </NavLink>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded shadow-md mr-4 transition-transform hover:scale-95"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
