import React, { useRef } from "react";
// import { useRef } from "next/router";

const OTPInput = ({ length, onChange }) => {
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    onChange(value, index);

    // Move to the next input field automatically
    if (index < length - 1 && value !== "") {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && e.target.value === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("text").trim();

    if (pastedData.length === length) {
      [...pastedData].forEach((char, index) => {
        onChange(char, index);
        if (index < length - 1) {
          inputRefs.current[index + 1].focus();
        }
      });
    }
  };

  return (
    <div className='flex md:gap-4 gap-2 justify-start items-center'>
      {Array.from({ length }).map((_, index) => (
        <input
          key={index.toString()}
          type='text'
          maxLength={1}
          className='w-10 h-10 md:w-12 md:h-12 bg-stone-50 border border-zinc-300 rounded-[5px] text-center mx-1 focus:outline-none'
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          ref={(el) => (inputRefs.current[index] = el)}
        />
      ))}
    </div>
  );
};

export default OTPInput;
