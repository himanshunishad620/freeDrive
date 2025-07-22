// src/components/Spinner.jsx
import React from "react";

const Spinner = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div
        className={`h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent`}
      ></div>
    </div>
  );
};

export default Spinner;
