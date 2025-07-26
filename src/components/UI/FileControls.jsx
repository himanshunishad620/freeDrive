import React from "react";
import Input from "./Input";

import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { RiFileDownloadLine } from "react-icons/ri";
import {
  RiDeleteBin6Line,
  RiFileAddLine,
  RiFolderAddLine,
} from "react-icons/ri";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { BiRename } from "react-icons/bi";
import { MdOutlineAddBox } from "react-icons/md";
import IconButton from "./IconButton";
import { useNavigate } from "react-router-dom";
import { useBreadcrumbs } from "../../contexts/BreadcrumbsContext";

export default function FileControls({
  handleAddFileToggle,
  handleCreateFolderToggle,
  handleDeleteToggle,
}) {
  const navigate = useNavigate();
  const {
    visitedFolders,
    removerVisitedFolder,
    disabled,
    setDisabled,
    select,
    selected,
  } = useBreadcrumbs();
  // console.log(visitedFolders);
  // console.log(selected);
  return (
    <div className="sticky top-0 left-0 flex w-full items-center justify-between bg-white p-2 shadow-md">
      <div className="flex items-center gap-0 pr-3 md:gap-2 md:pr-0">
        <IconButton
          icon={<FaArrowLeft />}
          // disabled={visitedFolders.length < 2}
          onClick={() => {
            select("");
            setDisabled(true);
            removerVisitedFolder(visitedFolders[visitedFolders.length - 1]);
            navigate(-1);
          }}
          toolTip={"Back"}
        />

        <IconButton
          icon={<RiFileAddLine />}
          toolTip={"Add file"}
          onClick={handleAddFileToggle}
        />
        <IconButton
          icon={<RiFolderAddLine />}
          toolTip={"Add folder"}
          onClick={handleCreateFolderToggle}
        />
        <IconButton
          icon={<RiFileDownloadLine />}
          disabled={selected.type !== "file"}
          toolTip={"Download"}
        />
        <IconButton
          disabled={disabled}
          icon={<RiDeleteBin6Line />}
          toolTip={"Delete"}
          onClick={handleDeleteToggle}
        />
        <IconButton
          disabled={disabled}
          icon={<BiRename />}
          toolTip={"Rename"}
        />
      </div>
      <Input
        type="text"
        icon={<FaMagnifyingGlass />}
        placeholder={"Search by name"}
      />
    </div>
  );
}
