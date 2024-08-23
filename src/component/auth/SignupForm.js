import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

function SignupForm() {

  const{register,getValues,setValue , handleSubmit ,reset , formState:{errors , isSubmitSuccessful} } =useForm(); 

  useEffect(()=>{
    if(isSubmitSuccessful){
        reset({
            emialAddress:"",firstname:"",lastname:"",confirmPassword:"",password:"",
        })
    }
},[reset,isSubmitSuccessful])

  const submitHandler = (values) =>{
    console.log('submitHandler');
    console.log(values);

  }

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className='flex flex-row  w-[100%] gap-4'>
        <div  className='flex flex-col w-[50%]' >
                    <label htmlFor='firstname' className='text-richblack-100 pb-2'>First Name <sup className='text-pink-200'>*</sup></label>
                        <input 
                            type='text'
                            name='firstname'
                            id='firstname'
                            placeholder='Enter first name'
                            className="w-full rounded-[0.5rem] outline-none shadow-custom bg-richblack-800 focus:shadow-none  p-[12px] text-richblack-5"
                            {...register("firstname",{required:true})}
                        />
                        {
                            errors.firstname && (
                                <span className='text-pink-200 text-sm'>*Please Enter First Name </span>
                            )
                        }
          </div>
          <div className='flex flex-col w-[50%]'>
            <label htmlFor='lastname' className='text-richblack-100  pb-2'>Last Name <sup className='text-pink-200'>*</sup></label>
              <input 
                type='text'
                name='lastname'
                id='lastname'
                placeholder='Enter last name'
                className="w-full rounded-[0.5rem] outline-none shadow-custom bg-richblack-800 p-[12px] focus:shadow-none text-richblack-5"
                {...register("lastname",{required:true})}
              />
              {
                errors.lastname && (
                    <span className='text-pink-200 text-sm'>Please Enter Last Name </span>
                )
              }
          </div>
        </div>
        <div  className='flex flex-col w-[100%]' >
          <label htmlFor='emialAddress' className='text-richblack-100 pb-2'>Email Address <sup className='text-pink-200'>*</sup></label>
              <input 
                  type='email'
                  name='emialAddress'
                  id='emialAddress'
                  placeholder='Enter Email Address'
                  className="w-full rounded-[0.5rem] outline-none shadow-custom bg-richblack-800 focus:shadow-none  p-[12px] text-richblack-5"
                  {...register("emialAddress",{required:true})}
              />
              {
                  errors.emialAddress && (
                      <span className='text-pink-200 text-sm'>*Please Email Address </span>
                  )
              }
          </div>

          <div className='flex flex-row  w-[100%] gap-4'>
        <div  className='flex flex-col w-[50%]' >
                    <label htmlFor='password' className='text-richblack-100 pb-2'>Create Password <sup className='text-pink-200'>*</sup></label>
                        <input 
                            type='password'
                            name='password'
                            id='password'
                            placeholder='Enter Password'
                            className="w-full rounded-[0.5rem] outline-none shadow-custom bg-richblack-800 focus:shadow-none  p-[12px] text-richblack-5"
                            {...register("password",{required:true})}
                        />
                        {
                            errors.password && (
                                <span className='text-pink-200 text-sm'>*Please Enter Password </span>
                            )
                        }
          </div>
          <div className='flex flex-col w-[50%]'>
            <label htmlFor='confirmPassword' className='text-richblack-100  pb-2'>Confirm Password <sup className='text-pink-200'>*</sup></label>
              <input 
                type='text'
                name='confirmPassword'
                id='confirmPassword'
                placeholder='Confirm Password'
                className="w-full rounded-[0.5rem] outline-none shadow-custom bg-richblack-800 p-[12px] focus:shadow-none text-richblack-5"
                {...register("confirmPassword",{required:true})}
              />
              {
                errors.confirmPassword && (
                    <span className='text-pink-200 text-sm'>Please Confirm Password </span>
                )
              }
          </div>
        </div>
        
        <div className='flex flex-row gap-1'>
          <p className='text-white'>Already have an account?</p> 
          <NavLink to={"/login"} className="text-blue-500 underline">
              Login
          </NavLink>
        </div>
        
        <button
          type="submit"
          className={`text-center text-[20px] font-medium  text-nowrap px-5 py-2 rounded-md bg-yellow-50 w-full text-richblack-900 
                        shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] hover:shadow-none hover:scale-95 transition-all duration-200 `}
        >
          Create Account
        </button>
      </form>
    </div>
  )
}

export default SignupForm