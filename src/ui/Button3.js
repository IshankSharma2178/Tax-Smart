import React from 'react';

const Button3 = ({ text }) => {
  return (
    <button
      className="inline-flex items-center justify-center h-12 px-4 text-lg font-mono text-[#36395A] bg-[#FCFCFD] rounded shadow-md shadow-[#2D2342] transition-transform transition-shadow duration-150 focus:shadow-inner focus:ring-0 hover:shadow-lg hover:translate-y-[-2px] active:shadow-inner active:translate-y-2"
      role="button"
    >
      {text}
    </button>
  );
};

export default Button3;
