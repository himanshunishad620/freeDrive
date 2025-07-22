import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoFolderOpen } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";
import {
  // useReadDirectoryMutation,
  useReadDirectoryQuery,
  // useReadDirectoryQuery,
} from "../../api/directoryApi";

export default function Directory() {
  const { _id } = useParams();
  const navigate = useNavigate();
  const numericId = parseInt(_id); // Ensure it's a number
  const { data, isLoading } = useReadDirectoryQuery(_id);
  // useEffect(() => {
  //   readFolder();
  // }, []);
  console.log(data);
  if (isLoading) return <h1>Loading....</h1>;
  return (
    <div>
      <h2>Current Directory ID: {_id}</h2>
      <div className="flex w-full flex-row gap-2">
        {data?.result.childFolders.map((i) => (
          <div>
            <IoFolderOpen className="text-7xl text-amber-500" />
            <p className="text-center text-sm font-semibold">{i.folderName}</p>
          </div>
        ))}
      </div>
      <div className="flex w-full flex-row gap-2">
        {data?.result.dataFiles.map((i) => (
          <div>
            <FaFileAlt className="text-7xl text-gray-200" />
            <p className="text-center text-sm font-semibold">{i.fileName}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "1rem" }}>
        {/* History navigation */}
        <button onClick={() => navigate(1)}>Forward</button>
        <button onClick={() => navigate(-1)}>Backward</button>

        {/* Navigate to next directory */}
        <button
          onClick={() => navigate(`../rootDirectory/${numericId + 1}`)}
          disabled={isNaN(numericId)}
        >
          Increment
        </button>
      </div>
    </div>
  );
}
