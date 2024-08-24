import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function SignupForm() {

  const { register, getValues, setValue, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm(); 
  const [passwordVisibility, setPasswordVisibility] = useState({ password: true, confirmPassword: true });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        emailAddress: "", firstname: "", lastname: "", confirmPassword: "", password: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  const togglePasswordVisibility = (field) => {
    setPasswordVisibility(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const submitHandler = (values) => {
    console.log('submitHandler');
    console.log(values);
  }

  return (
    <div className='flex flex-col gap-6'>
      <div className='text-[#456297] text-xl'>
        Sign Up Now, and start your journey on taxation and financial management.
      </div>
      <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col gap-4'>
        <div className='flex flex-row w-[100%] gap-4'>
          <div className='flex flex-col w-[50%]'>
            <label htmlFor='firstname' className='text-[#456297] pb-2'>First Name <sup className='text-pink-200'>*</sup></label>
            <input 
              type='text'
              name='firstname'
              id='firstname'
              placeholder='Enter first name'
              className="w-full rounded-[0.5rem] outline-none shadow-custom bg-richblack-800 focus:shadow-none p-[12px] text-richblack-5"
              {...register("firstname", { required: true })}
            />
            {errors.firstname && (
              <span className='text-pink-200 text-sm'>*Please Enter First Name</span>
            )}
          </div>
          <div className='flex flex-col w-[50%]'>
            <label htmlFor='lastname' className='text-[#456297] pb-2'>Last Name <sup className='text-pink-200'>*</sup></label>
            <input 
              type='text'
              name='lastname'
              id='lastname'
              placeholder='Enter last name'
              className="w-full rounded-[0.5rem] outline-none shadow-custom bg-richblack-800 p-[12px] focus:shadow-none text-richblack-5"
              {...register("lastname", { required: true })}
            />
            {errors.lastname && (
              <span className='text-pink-200 text-sm'>Please Enter Last Name</span>
            )}
          </div>
        </div>
        <div className='flex flex-col w-[100%]'>
          <label htmlFor='emailAddress' className='text-[#456297] pb-2'>Email Address <sup className='text-pink-200'>*</sup></label>
          <input 
            type='email'
            name='emailAddress'
            id='emailAddress'
            placeholder='Enter Email Address'
            className="w-full rounded-[0.5rem] outline-none shadow-custom bg-richblack-800 focus:shadow-none p-[12px] text-richblack-5"
            {...register("emailAddress", { required: true })}
          />
          {errors.emailAddress && (
            <span className='text-pink-200 text-sm'>*Please Enter Email Address</span>
          )}
        </div>

        <div className='flex flex-row w-[100%] gap-4'>
          <div className='flex flex-col w-[50%] relative'>
            <label htmlFor='password' className='text-[#456297] inp pb-2'>Create Password <sup className='text-pink-200'>*</sup></label>
            <input 
              type={passwordVisibility.password ? 'password' : 'text'}
              name='password'
              id='password'
              placeholder='Enter Password'
              className="w-full rounded-[0.5rem] inp pr-10 outline-none shadow-custom bg-richblack-800 focus:shadow-none p-[12px] text-richblack-5"
              {...register("password", { required: true })}
            />
            

            <div className='absolute text-richblack-25 right-2  cursor-pointer bottom-3  text-2xl'
              onClick={() => togglePasswordVisibility("password")}>
              {passwordVisibility.password ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </div>
            {errors.password && (
              <span className='text-pink-200 text-sm'>*Please Enter Password</span>
            )}
          </div>
          <div className='flex flex-col w-[50%] relative'>
            <label htmlFor='confirmPassword' className='text-[#456297] pb-2'>Confirm Password <sup className='text-pink-200'>*</sup></label>
            <input 
              type={passwordVisibility.confirmPassword ? 'password' : 'text'}
              name='confirmPassword'
              id='confirmPassword'
              placeholder='Confirm Password'
              className="w-full rounded-[0.5rem] pr-10 outline-none shadow-custom bg-richblack-800 p-[12px] focus:shadow-none text-richblack-5"
              {...register("confirmPassword", { required: true })}
            />
            <div className='absolute text-richblack-25 right-2 cursor-pointer bottom-3 text-2xl'
              onClick={() => togglePasswordVisibility("confirmPassword")}>
              {passwordVisibility.confirmPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </div>
            {errors.confirmPassword && (
              <span className='text-pink-200 text-sm'>Please Confirm Password</span>
            )}
          </div>
        </div>

        <div className='flex flex-row gap-1'>
          <p className='text-[#2d4064]'>Already have an account?</p> 
          <NavLink to={"/login"} className="text-blue-500 underline">
            Login
          </NavLink>
        </div>

        <button
          type="submit"
          className={`text-center text-[20px] font-medium text-nowrap px-5 py-2 rounded-md bg-yellow-50 w-full text-richblack-900 
                        shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] hover:shadow-none hover:scale-95 transition-all duration-200`}
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
