import React from "react";
import Spinner from "./Spinner";

export default function Button({ label, isLoading, type, onClick, disabled }) {
  return (
    <button
      type={type}
      disabled={isLoading || disabled}
      onClick={onClick}
      className="h-10 w-full cursor-pointer rounded-lg border-2 border-[#037bfc] bg-gradient-to-t from-[#037bfc] to-[#8bc3ff] px-4 font-semibold text-white duration-200 hover:opacity-80"
    >
      {isLoading ? <Spinner /> : label}
    </button>
  );
}
