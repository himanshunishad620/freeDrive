import React from "react";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div className="w-full md:w-3/4">
      <Outlet />
    </div>
  );
}
