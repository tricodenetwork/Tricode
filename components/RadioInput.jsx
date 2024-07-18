// components/RadioInput.js

import React from 'react';

const RadioInput = ({ name, value, label, checked, onChange, className }) => {
  return (
    <label className="member gap-4 text-sm md:text-lg">
      <input
        type="radio"
        className={className}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {" "}{label}
    </label>
  );
};

export default RadioInput;
