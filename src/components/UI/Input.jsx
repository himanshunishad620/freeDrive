import React, { useState } from "react";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";

export default function Input({
  pattern,
  value,
  onChange,
  type,
  placeholder,
  name,
  icon,
  required,
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative w-80">
      <div className="absolute top-[50%] left-3 translate-y-[-50%] transform text-xl text-[#6a6a6a]">
        {icon}
      </div>
      <input
        className={`h-10 w-full rounded-md border-2 bg-[#fdfdfd] font-semibold text-[#6a6a6a] outline-none ${type === "password" ? "pr-10" : "pr-5"} font-semibold" pl-10`}
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        required={required}
        pattern={pattern}
      />
      {type === "password" ? (
        <div
          onClick={() => setShowPassword((pre) => !pre)}
          className="absolute top-[50%] right-3 translate-y-[-50%] transform cursor-pointer text-xl text-[#6a6a6a]"
        >
          {showPassword ? <BiSolidShow /> : <BiSolidHide />}
        </div>
      ) : null}
    </div>
  );
}
