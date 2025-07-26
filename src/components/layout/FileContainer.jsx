import FileControls from "../UI/FileControls";
import { useLocation } from "react-router-dom";
import { useReadDirectoryQuery } from "../../api/directoryApi";
import Folder from "../UI/Folder";
import File from "../UI/File";
import Spinner from "../UI/Spinner";
import FileUploader from "./FileUploader";
import { useState } from "react";

export default function FileContainer() {
  const location = useLocation();
  const { _id } = location.state || {};
  const { data, isLoading } = useReadDirectoryQuery(_id);
  const [fileUplaodPoppup, setFileUploadPopup] = useState(false);
  const handleAddFileToggle = () => {
    setFileUploadPopup((pre) => !pre);
  };
  return (
    <div className="relative m-3 mb-18 flex-1 overflow-scroll bg-white md:mb-0">
      <FileControls handleAddFileToggle={handleAddFileToggle} />
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
      {fileUplaodPoppup && (
        <FileUploader handleAddFileToggle={handleAddFileToggle} />
      )}
    </div>
  );
}
