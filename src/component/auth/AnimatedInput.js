import React, { useState } from 'react';

const AnimatedInput = ({ label, name, register, required, errors,type }) => {

    const [password,setPassword] = useState(false);
  return (
    <div className="relative mb-12">
      <input
        type={type}
        name={name}
        id={name}
        autoComplete="off"
        required={required}
        {...register(name, { required })}
        className="bg-transparent text-gray-400 text-lg py-2 px-1 block w-full border-b border-gray-400 focus:outline-none focus:border-blue-500 peer"
      />
      <label
        htmlFor={name}
        className={`absolute cursor-text left-1 top-2 text-gray-400 transition-all duration-300 transform 
        peer-placeholder-shown:top-2 peer-placeholder-shown:text-lg 
        peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-blue-500
        peer-valid:-translate-y-6 peer-valid:scale-90 peer-valid:text-blue-500`}
      >
        {label}
      </label>
      <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 peer-focus:w-full"></span>
      {errors[name] && (
        <span className="text-pink-200 text-sm">{errors[name]?.message || `Please enter ${label}`}</span>
      )}
    </div>
  );
};

export default AnimatedInput;
