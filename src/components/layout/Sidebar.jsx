import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="fixed bottom-0 left-0 z-10 h-15 w-full bg-amber-100 md:static md:block md:h-full md:w-1/4">
      <nav className="flex flex-row items-center justify-evenly md:flex-col">
        <NavLink className="m-3" to="../dashboard">
          File Manager
        </NavLink>

        <NavLink className="m-3" to="about">
          About
        </NavLink>
        <NavLink className="m-3" to="contact">
          Contact
        </NavLink>
      </nav>
    </div>
  );
}
