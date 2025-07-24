import React from "react";
import { LuFolderGit2 } from "react-icons/lu";

export default function ListedFolder({ folder }) {
  return (
    <>
      <p className="flex bg-amber-100 text-[12px] font-medium">
        {/* <span className="flex items-center justify-center gap-1 rounded-full bg-red-400 px-2 py-0.5"> */}
        <LuFolderGit2 />
        <p className="rounded-full text-[12px] font-medium">{folder}</p>
        {/* </span> */}
      </p>
    </>
  );
}
