import React from 'react'

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
    <form className="w-80">
      <hr className="border-blue-500 mx-auto w-1/4 mb-8" />
      {['Name', 'Email', 'Password', 'Number', 'Message'].map((label, index) => (
        <div key={index} className="relative mb-12">
          <input
            type={label === 'Password' ? 'password' : label === 'Number' ? 'number' : label === 'Message' ? 'textarea' : 'text'}
            required
            className="bg-transparent text-gray-400 text-lg py-2 px-1 block w-full border-b border-gray-400 focus:outline-none focus:border-blue-500 peer"
          />
          <label className="absolute left-1 top-2 text-gray-400 transition-all duration-300 transform peer-placeholder-shown:top-2 peer-placeholder-shown:text-lg peer-focus:-translate-y-4 peer-focus:scale-90 peer-focus:text-blue-500">
            {label}
          </label>
          <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 peer-focus:w-full"></span>
        </div>
      ))}
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded shadow-md mr-4 transition-transform hover:scale-105"
        >
          Submit
        </button>

      </div>
    </form>
  </div>
  )
}

export default Login