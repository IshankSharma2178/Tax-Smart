import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import AnimatedInput from './AnimatedInput'; // Import the AnimatedInput component

function LoginForm() {

  const { register, getValues, setValue, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm(); 
  const [passwordVisibility, setPasswordVisibility] = useState({ password: true, confirmPassword: true });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        emailAddress: "", password: "",
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
        Log In here, and continue your journey on taxation and financial management.
      </div>
      <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col gap-4'>
        <AnimatedInput errors={errors} type="text" label="Email Address" name="emailAddress" register={register} required={true} />
        
          <div className='flex flex-col  relative'>
          <AnimatedInput errors={errors} type="password" label="Enter Password" name="password" register={register} required={true} />
          </div>

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
      </form>
    </div>
  )
}

export default LoginForm