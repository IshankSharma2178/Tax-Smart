import React from 'react'

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
    <form className="w-80">
      <h1 className="text-3xl font-light text-center text-blue-500 mb-4">Material Inputs</h1>
      <h5 className="text-center text-gray-400 uppercase mb-8">
        Inspired by Google's Material Design guidelines for text fields
      </h5>
      <div className="text-center mb-8">
        <a
          className="inline-block py-2 px-4 bg-blue-500 text-white rounded shadow-md transition-transform hover:scale-105"
          href="https://material.google.com/components/text-fields.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Design Docs
        </a>
      </div>
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
        <button
          type="button"
          className="bg-gray-200 text-gray-800 py-2 px-4 rounded shadow-md transition-transform hover:scale-105"
        >
          Cancel
        </button>
        <h5 className="text-gray-400 mt-4">
          *these buttons do nothing <span className="text-lg">😉</span>
        </h5>
      </div>
    </form>
  </div>
  )
}

export default Login