import React, { useState } from "react";
import { Outlet } from "react-router-dom";

export default function DasboardLayout() {
  return (
    <div>
      <h1 className="text-3xl">Dashboard</h1>
      <Outlet />
    </div>
  );
}
