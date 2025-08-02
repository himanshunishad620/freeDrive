import React, { useRef } from "react";
import { IoFolderOpen, IoFolderSharp } from "react-icons/io5";

import { useNavigate } from "react-router-dom";
import { useBreadcrumbs } from "../../contexts/BreadcrumbsContext";

export default function Folder({ folder }) {
  const navigate = useNavigate();
  const { addVisitedFolder, select, setDisabled, selected } = useBreadcrumbs();
  // select(null);
  const clickTimeout = useRef(null);

  const handleClick = () => {
    clickTimeout.current = setTimeout(() => {
      setDisabled(false);
      select({
        _id: folder._id,
        folderName: folder.folderName,
        type: "folder",
      });
    }, 200);
  };
  // const handleClick = () => {
  //   setTimeout(() => {
  //     setDisabled(false);
  //     select(folder._id);
  //   }, [200]);
  // };
  // const handleClick = setTimeout(() => {
  //   alert("Ex");
  //   setDisabled(false);
  //   select(folder._id);
  // }, [200]);
  return (
    <div
      className={`flex aspect-square w-full cursor-pointer flex-col items-center justify-evenly pt-2 duration-200 ${selected._id === folder._id ? "bg-[#f3f3f3] shadow-md shadow-[#d6d6d6]" : "hover:bg-[#f3f3f3]"}`}
      // className={`flex cursor-pointer flex-col items-center justify-start duration-200 ${selected?._id === folder._id ? "bg-[#f3f3f3] shadow-md shadow-[#d6d6d6]" : "hover:bg-[#f3f3f3]"}`}
      onDoubleClick={() => {
        clearTimeout(clickTimeout.current);
        setDisabled(true);
        addVisitedFolder(folder.folderName);
        navigate("../fileManager", { state: { _id: folder._id } });
      }}
      key={folder._id}
      onClick={handleClick}
    >
      <IoFolderOpen className="text-5xl text-[#8bc3ff] md:text-7xl" />
      <p
        className="w-full truncate text-center text-[10px] font-medium text-[#5b5b5b] md:text-[12px]"
        title={folder.folderName}
      >
        {folder.folderName}
      </p>
    </div>
  );
}
