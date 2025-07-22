import React from "react";

export default function Button({ label }) {
  return (
    <button className="h-10 w-full cursor-pointer rounded-lg border-2 border-[#037bfc] bg-gradient-to-t from-[#037bfc] to-[#8bc3ff] px-4 font-semibold text-white duration-200 hover:opacity-80">
      {label}
    </button>
  );
}
