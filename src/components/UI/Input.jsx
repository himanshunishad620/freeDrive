import React from "react";

export default function Input({
  value,
  handleChange,
  type,
  placeholder,
  name,
  icon,
  required,
}) {
  return (
    <div className="relative w-80">
      <div className="absolute top-[50%] left-3 translate-y-[-50%] transform text-xl">
        {icon}
      </div>
      <input
        className="h-10 w-full rounded-md border-2 pr-5 pl-10 font-semibold"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        name={name}
        required={required}
      />
    </div>
  );
}
