import React from "react";

const Button = ({ text, onClick, className }) => {
  return (
    <button
      className={`px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
