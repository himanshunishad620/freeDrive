import React from "react";
import IconButton from "./IconButton";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function DashboardHeader() {
  const navigate = useNavigate();
  return (
    <h1 className="flex items-center px-3 pt-3 text-2xl font-semibold text-[#5b5b5b]">
      <IconButton
        icon={<FaArrowLeft />}
        // disabled={visitedFolders.length < 2}
        onClick={() => navigate(-1)}
      />
      Dashboard
    </h1>
  );
}
