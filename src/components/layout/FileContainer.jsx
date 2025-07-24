import React from "react";
import FileControls from "../UI/FileControls";
import { useNavigate, useLocation, useBeforeUnload } from "react-router-dom";
import { useReadDirectoryQuery } from "../../api/directoryApi";
import { IoFolderOpen } from "react-icons/io5";
import Folder from "../UI/Folder";
import File from "../UI/File";
import { useBreadcrumbs } from "../../contexts/BreadcrumbsContext";
import Breadcrumbs from "../UI/Breadcrumbs";

export default function FileContainer() {
  const location = useLocation();
  const navigate = useNavigate();
  const { _id } = location.state || {};
  const { data, isLoading } = useReadDirectoryQuery(_id);
  // const { select, setDisabled } = useBreadcrumbs();
  // const handleClick = () => {
  //   select("");
  //   setDisabled(true);
  // };
  // console.log(_id);
  return (
    <div
      // onClick={handleClick}
      className="relative m-3 flex-1 overflow-scroll rounded-xl bg-white"
    >
      <FileControls />
      <Breadcrumbs />
      <div className="grid min-h-0 w-full grid-cols-12 gap-3 p-3">
        {data?.result.childFolders.map((item) => (
          <Folder key={item._id} folder={item} />
        ))}
        {data?.result.dataFiles.map((item) => (
          <File key={item._id} file={item} />
        ))}
      </div>
    </div>
  );
}
