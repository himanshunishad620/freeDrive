// src/components/OtpInput.jsx
import React, { useRef } from "react";

const OtpInput = ({ length = 6, onChange }) => {
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");

    if (!value) return;

    e.target.value = value;
    if (index < length - 1 && value) {
      inputRefs.current[index + 1].focus();
    }

    const otp = inputRefs.current.map((input) => input?.value || "").join("");
    onChange(otp);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (!e.target.value && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  return (
    <>
      <label className="block text-sm font-medium text-gray-700">
        Enter OTP
      </label>
      <div className="flex justify-between">
        {Array.from({ length }).map((_, index) => (
          <input
            key={index}
            max={9}
            type="number"
            required={true}
            className="h-12 w-12 rounded-lg border-2 border-black text-center text-xl font-semibold focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none md:h-10 md:w-10"
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputRefs.current[index] = el)}
          />
        ))}
      </div>
    </>
  );
};

export default OtpInput;
