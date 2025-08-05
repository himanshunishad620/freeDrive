import React from "react";
import { FaSpinner } from "react-icons/fa";

export default function PageLoader() {
  return (
    <div className="fixed top-0 left-0 flex h-screen w-screen flex-col items-center justify-center bg-white/10">
      <FaSpinner className="animate-spin text-3xl" />
      <p className="text-lg">Loading....</p>
    </div>
  );
}
