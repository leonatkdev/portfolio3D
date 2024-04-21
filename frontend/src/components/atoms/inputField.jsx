// InputField.js

import React from 'react';

const InputField = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="container mx-auto">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="inputField">
        {label}
      </label>
      <input
        className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
        id="inputField"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
