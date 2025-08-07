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
        <h1 className="hidden items-center justify-center gap-2 py-10 text-3xl font-semibold text-[#363636] md:flex">
          <RxDashboard className="font-bold text-blue-500" />
          Dabshboard
        </h1>
        <NavLink
          replace
          to="./fileManager"
          className={({ isActive }) =>
            `text-md flex w-full items-start justify-center gap-2 p-3 pl-4 font-semibold duration-100 md:justify-start md:pl-15 ${isActive ? "bg-gradient-to-t from-[#037bfc] to-[#8bc3ff] text-white" : ""}`
          }
          state={{ _id }}
        >
          <TbFolders className="text-xl md:text-2xl" />
          <span className="hidden md:block"> File Manager</span>
        </NavLink>
        <NavLink
          replace
          to="contact"
          className={({ isActive }) =>
            `text-md flex w-full items-start justify-center gap-2 p-3 pl-4 font-semibold duration-100 md:justify-start md:pl-15 ${isActive ? "bg-gradient-to-t from-[#037bfc] to-[#8bc3ff] text-white" : ""}`
          }
        >
          <SiGitconnected className="text-xl md:text-2xl" />
          <span className="hidden md:block"> Contact Us</span>
        </NavLink>
        <NavLink
          replace
          to="about"
          className={({ isActive }) =>
            `text-md flex w-full items-start justify-center gap-2 p-3 pl-4 font-semibold duration-100 md:justify-start md:pl-15 ${isActive ? "bg-gradient-to-t from-[#037bfc] to-[#8bc3ff] text-white" : ""}`
          }
        >
          <MdOutlineContactSupport className="text-xl md:text-2xl" />
          <span className="hidden md:block"> About Us</span>
        </NavLink>
      </nav>
    </div>
  );
}
