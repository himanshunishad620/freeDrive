import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function DasboardLayout() {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="h-full w-3/4 bg-red-100">
        <Outlet />
      </div>
    </div>
  );
}
