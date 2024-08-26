import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import AnimatedInput from './AnimatedInput'; // Import the AnimatedInput component

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
          <AnimatedInput errors={errors} type="text" label="First Name" name="firstname" register={register} required={true} />
          <AnimatedInput errors={errors} type="text" label="Last Name" name="lastname" register={register} required={true} />
        </div>
        <AnimatedInput errors={errors} type="email" label="Email Address" name="emailAddress" register={register} required={true} />
        
        <div className='flex flex-row w-[100%] gap-4'>
          <div className='flex flex-col w-[50%] relative'>
          <AnimatedInput errors={errors} type="password" label="Create Password" name="password" register={register} required={true} />
          </div>
          <div className='flex flex-col w-[50%] relative'>
          <AnimatedInput errors={errors} label="Confirm Password" name="confirmPassword" register={register} required={true} />
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
