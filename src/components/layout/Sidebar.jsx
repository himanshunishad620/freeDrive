import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="h-full w-1/4 bg-amber-100">
      <nav className="flex flex-col items-center">
        <NavLink className="m-3" to="../dashboard">
          Root Directory
        </NavLink>
        <NavLink className="m-3" to="storage">
          Storage
        </NavLink>
        <NavLink className="m-3" to="about">
          About
        </NavLink>
        <NavLink className="m-3" to="contact">
          Contact
        </NavLink>
        <NavLink className="m-3" to="settings">
          Setting
        </NavLink>
      </nav>
    </div>
  );
}
