import React from "react";

const TextField = ({ onChange, label, type, field }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={field}
      >
        {label}
      </label>
      <input
        required
        onChange={(e) => onChange(field, e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={field}
        type={type}
        placeholder={label}
      />
    </div>
  );
};

export default TextField;
