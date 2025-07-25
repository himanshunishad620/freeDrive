import React from "react";
import { LuFolderGit2 } from "react-icons/lu";
import { LuFolder } from "react-icons/lu";
import { useBreadcrumbs } from "../../contexts/BreadcrumbsContext";
// import ListedFolder from "./ListedFolder";
export default function Breadcrumbs() {
  const { visitedFolders } = useBreadcrumbs();
  return (
    <span className="flex items-center rounded-full p-2 text-[13px] font-medium">
      {/* <p className="flex items-center rounded-full bg-amber-100 px-3 py-1 text-[13px] font-medium"> */}
      {visitedFolders.map((folder, ind) => (
        <p
          className="flex items-center gap-1 text-[15px] text-[#5b5b5b]"
          key={ind}
        >
          <LuFolder />
          {folder.toLowerCase()}
        </p>
      ))}
      {/* </p> */}
    </span>
  );
}
