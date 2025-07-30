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
  handleUpdateFolderAndFileNameToggle,
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
    <div className="items-left sticky top-0 left-0 flex w-full flex-col-reverse justify-between bg-white p-2 shadow-md md:flex-row md:items-center">
      <div className="my-2 flex items-center gap-3 md:my-0 md:gap-2 md:pr-0">
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
          disabled={selected?.type !== "file"}
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
          onClick={handleUpdateFolderAndFileNameToggle}
        />
      </div>
      <div className="flex justify-center">
        <Input
          type="text"
          icon={<FaMagnifyingGlass />}
          placeholder={"Search by name"}
        />
      </div>
    </div>
  );
}
