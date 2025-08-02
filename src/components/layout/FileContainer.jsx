import FileControls from "../UI/FileControls";
import { useLocation } from "react-router-dom";
import { useReadDirectoryQuery } from "../../api/directoryApi";
import Folder from "../UI/Folder";
import File from "../UI/File";
import Spinner from "../UI/Spinner";
// import FileUploader from "./AddFile";
import { useState } from "react";
import AddFile from "./AddFile";
import CreateFolder from "./CreateFolder";
import DeleteFileandFolder from "./DeleteFileandFolder";
import UpdateFolderAndFileName from "./UpdateFolderAndFileName";
import EmptyFallBack from "../UI/EmptyFallBack";

export default function FileContainer() {
  const location = useLocation();
  const { _id } = location.state || {};
  const { data, isLoading } = useReadDirectoryQuery(_id);
  // console.log("State", data);
  // console.log(isLoading);
  const [fileUplaodPoppup, setFileUploadPopup] = useState(false);
  const [createFolderPopup, setCreateFolderPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const [updateFolderAndFileNamePopup, setUpdateFolderAndFileNamePopup] =
    useState(false);

  // const folderList = () => data?.result.childFolders;
  // const dataList = () => data?.result.dataFiles;
  const handleDeleteToggle = () => {
    setDeletePopup((pre) => !pre);
  };
  const handleAddFileToggle = () => {
    setFileUploadPopup((pre) => !pre);
  };
  const handleCreateFolderToggle = () => {
    setCreateFolderPopup((pre) => !pre);
  };
  const handleUpdateFolderAndFileNameToggle = () => {
    // console.log("Woring");
    setUpdateFolderAndFileNamePopup((pre) => !pre);
  };
  // const data = [];
  // console.log("Route", _id);
  return (
    <div className="relative m-3 mb-18 flex-1 overflow-scroll bg-white md:mb-0">
      <FileControls
        handleAddFileToggle={handleAddFileToggle}
        handleDeleteToggle={handleDeleteToggle}
        handleCreateFolderToggle={handleCreateFolderToggle}
        handleUpdateFolderAndFileNameToggle={
          handleUpdateFolderAndFileNameToggle
        }
      />
      {isLoading ? (
        <div className="p-3">
          <Spinner isBlack={true} />
        </div>
      ) : null}
      <div className="grid min-h-0 w-full grid-cols-6 gap-3 p-3 md:grid-cols-9">
        {data?.result.childFolders.map((item) => (
          <Folder key={item._id} folder={item} />
        ))}
        {data?.result.dataFiles.map((item) => (
          <File key={item._id} file={item} />
        ))}
      </div>
      {data?.result.childFolders.length <= 0 &&
      data?.result.dataFiles.length <= 0 ? (
        <EmptyFallBack />
      ) : null}
      {fileUplaodPoppup && (
        <AddFile _id={_id} handleAddFileToggle={handleAddFileToggle} />
      )}
      {createFolderPopup && (
        <CreateFolder
          _id={_id}
          handleCreateFolderToggle={handleCreateFolderToggle}
        />
      )}
      {deletePopup && (
        <DeleteFileandFolder
          _id={_id}
          handleDeleteToggle={handleDeleteToggle}
        />
      )}
      {updateFolderAndFileNamePopup && (
        <UpdateFolderAndFileName
          _id={_id}
          handleUpdateFolderAndFileNameToggle={
            handleUpdateFolderAndFileNameToggle
          }
        />
      )}
      {/* <DeleteFileandFolder /> */}
    </div>
  );
}
