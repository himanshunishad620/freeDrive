import React from "react";
import Spinner from "./Spinner";

export default function LightButton({
  label,
  isLoading,
  type,
  onClick,
  disabled,
}) {
  return (
    <button
      type={type}
      disabled={isLoading || disabled}
      onClick={onClick}
      className="h-10 w-full cursor-pointer rounded-lg border-2 border-blue-500 bg-[#e3effc] px-4 font-semibold text-blue-500 duration-200 hover:bg-[#d2e3f6]"
    >
      {isLoading ? <Spinner /> : label}
    </button>
  );
}
