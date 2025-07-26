import React from "react";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { TbFolders } from "react-icons/tb";
import { MdOutlineContactSupport } from "react-icons/md";
import { SiGitconnected } from "react-icons/si";
import { useAuth } from "../../contexts/AuthContext";

export default function Sidebar() {
  const { _id } = useAuth();
  return (
    <div className="fixed bottom-0 left-0 z-10 h-11 w-full bg-white md:static md:block md:h-full md:w-1/4 md:p-3">
      <nav className="items-left flex flex-row justify-evenly md:flex-col">
        <h1 className="hidden items-center justify-center gap-2 py-10 text-3xl font-semibold md:flex">
          <RxDashboard className="font-bold" />
          Dabshboard
        </h1>
        <NavLink
          replace
          // className="text-md m-3 flex items-center gap-2 bg-red-200 p-4 font-semibold"
          to="./fileManager"
          className={({ isActive }) =>
            `text-md flex w-full items-start justify-center gap-2 p-3 pl-4 font-semibold duration-100 md:justify-start md:pl-15 ${isActive ? "bg-gradient-to-t from-[#037bfc] to-[#8bc3ff] text-white" : ""}`
          }
          // className={({ isActive }) =>
          //   isActive ? "font-bold text-blue-500" : "text-gray-500"
          // }
          state={{ _id }}
        >
          <TbFolders className="text-xl md:text-2xl" />
          <span className="hidden md:block"> File Manager</span>
        </NavLink>
        <NavLink
          replace
          // className="text-md m-3 flex items-center gap-2 bg-red-200 p-4 font-semibold"
          to="contact"
          className={({ isActive }) =>
            `text-md flex w-full items-start justify-center gap-2 p-3 pl-4 font-semibold duration-100 md:justify-start md:pl-15 ${isActive ? "bg-gradient-to-t from-[#037bfc] to-[#8bc3ff] text-white" : ""}`
          }
          // className={({ isActive }) =>
          //   isActive ? "font-bold text-blue-500" : "text-gray-500"
          // }
          // state={{ _id }}
        >
          <SiGitconnected className="text-xl md:text-2xl" />
          <span className="hidden md:block"> Contact Us</span>
        </NavLink>
        <NavLink
          replace
          // className="text-md m-3 flex items-center gap-2 bg-red-200 p-4 font-semibold"
          to="about"
          className={({ isActive }) =>
            `text-md flex w-full items-start justify-center gap-2 p-3 pl-4 font-semibold duration-100 md:justify-start md:pl-15 ${isActive ? "bg-gradient-to-t from-[#037bfc] to-[#8bc3ff] text-white" : ""}`
          }
          // className={({ isActive }) =>
          //   isActive ? "font-bold text-blue-500" : "text-gray-500"
          // }
          // state={{ _id }}
        >
          <MdOutlineContactSupport className="text-xl md:text-2xl" />
          <span className="hidden md:block"> About Us</span>
        </NavLink>

        {/* <NavLink
          // className="text-md m-3 flex items-center gap-2 bg-red-200 p-4 font-semibold"
          to="about"
          replace
          className={({ isActive }) =>
            `text-md mx-3 flex items-center gap-2 p-4 font-semibold duration-100 ${isActive ? "bg-blue-500 text-white" : ""}`
          }
          // className={({ isActive }) =>
          //   isActive ? "font-bold text-blue-500" : "text-gray-500"
          // }
          state={{ _id }}
        >
          <SiGitconnected className="text-2xl" />
          <span className="hidden md:block"> Contact Us</span>
        </NavLink> */}
        {/* <NavLink
          // className="text-md m-3 flex items-center gap-2 bg-red-200 p-4 font-semibold"
          to="contact"
          replace
          className={({ isActive }) =>
            `text-md m-3 flex items-center gap-2 p-4 font-semibold duration-100 ${isActive ? "bg-blue-500 text-white" : ""}`
          }
          // className={({ isActive }) =>
          //   isActive ? "font-bold text-blue-500" : "text-gray-500"
          // }
          state={{ _id }}
        >
          <TbFolders className="text-2xl" />
          <span className="hidden md:block">About Us</span>
        </NavLink> */}
      </nav>
    </div>
  );
}
