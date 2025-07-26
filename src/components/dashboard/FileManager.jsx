import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { IoFolderOpen } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";
import {
  // useReadDirectoryMutation,
  useReadDirectoryQuery,
  // useReadDirectoryQuery,
} from "../../api/directoryApi";
import Records from "../layout/Records";
import RootDirectory from "../layout/FileContainer";
import FileContainer from "../layout/FileContainer";
import BreadcrumbProvider from "../../contexts/BreadcrumbsContext";

import FileManagerHeader from "../UI/FileManagerHeader";

export default function FileManager() {
  // const { _id } = useParams();
  // const numericId = parseInt(_id); // Ensure it's a number
  const location = useLocation();
  const { _id } = location.state || {};
  // console.log(_id);
  const navigate = useNavigate();
  const { data, isLoading } = useReadDirectoryQuery(_id);
  // if (isLoading) return <h1>Loading....</h1>;
  return (
    // <div className="rounded-xl bg-red-300 p-3">
    //   <h2>Current Directory ID: {_id}</h2>
    //   <div className="flex w-full flex-row gap-10">
    //     {data?.result.childFolders.map((i) => (
    //       <div
    //         key={i._id}
    //         onClick={() =>
    //           navigate("../rootDirectory", { state: { _id: i._id } })
    //         }
    //       >
    //         <IoFolderOpen className="text-7xl text-amber-500" />
    //         <p className="text-center text-sm font-semibold">{i.folderName}</p>
    //       </div>
    //     ))}
    //   </div>
    //   <div className="flex w-full flex-row gap-2">
    //     {data?.result.dataFiles.map((i) => (
    //       <div key={i._id}>
    //         <FaFileAlt className="text-7xl text-gray-200" />
    //         <p className="text-center text-sm font-semibold">{i.fileName}</p>
    //       </div>
    //     ))}
    //   </div>
    //   {/* <div style={{ marginTop: "1rem" }}>
    //     <button onClick={() => navigate(1)}>Forward</button>
    //     <button onClick={() => navigate(-1)}>Backward</button>

    //     <button
    //       onClick={() => navigate(`../rootDirectory/${numericId + 1}`)}
    //       disabled={isNaN(numericId)}
    //     >
    //       Increment
    //     </button>
    //   </div> */}
    // </div>
    <div className="flex h-full w-full flex-col bg-[#f2f2f2]">
      <FileManagerHeader />
      <Records />
      <BreadcrumbProvider>
        <FileContainer />
      </BreadcrumbProvider>
    </div>
  );
}
