import React from "react";
import FileControls from "../UI/FileControls";
import { useNavigate, useLocation, useBeforeUnload } from "react-router-dom";
import { useReadDirectoryQuery } from "../../api/directoryApi";
import { TfiFaceSad } from "react-icons/tfi";
import { IoFolderOpen } from "react-icons/io5";
import Folder from "../UI/Folder";
import File from "../UI/File";
import { useBreadcrumbs } from "../../contexts/BreadcrumbsContext";
import Breadcrumbs from "../UI/Breadcrumbs";
import Spinner from "../UI/Spinner";

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
  // if (data) return <h2 className="text-xl text-black">NOT FOUND</h2>;
  return (
    <div
      // onClick={handleClick}
      className="relative m-3 mb-18 flex-1 overflow-scroll rounded-xl bg-white md:mb-0"
    >
      <FileControls />
      {/* <Breadcrumbs /> */}
      {isLoading ? (
        <div className="p-3">
          <Spinner isBlack={true} />
        </div>
      ) : null}
      <div className="grid min-h-0 w-full grid-cols-6 gap-3 p-3 md:grid-cols-12">
        {data?.result.childFolders.map((item) => (
          <Folder key={item._id} folder={item} />
        ))}
        {data?.result.dataFiles.map((item) => (
          <File key={item._id} file={item} />
        ))}
      </div>

      {/* <div className="m-[-24px] flex h-full w-full grow-1 items-center justify-center">
        {data?.result?.childFolders.length || isLoading ? null : (
          <p className="flex items-center gap-2 text-xl font-semibold text-[#5b5b5b]">
            Empty
            <TfiFaceSad className="text-2xl font-bold" />
          </p>
        )}
      </div> */}
    </div>
  );
}

{
}
