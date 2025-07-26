import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import IconButton from "./IconButton";

export default function ContactHeader() {
  return (
    <h1
      onClick={() => navigate(-1)}
      className="absolute top-0 left-0 z-10 flex items-center p-3 text-2xl font-semibold text-[#5b5b5b]"
      // className="absolute top-0 left-0 z-10 flex items-center px-3 pt-3 text-2xl font-semibold text-[#5b5b5b]"
    >
      <IconButton type="button" icon={<FaArrowLeft />} />
      Contact Us
    </h1>
  );
}
