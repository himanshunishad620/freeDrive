import FIleAndFolderSpinner from "./FIleAndFolderSpinner";
import GetFileType from "./GetFileType";
import { useBreadcrumbs } from "../../contexts/BreadcrumbsContext";
import { useFetchFileUrlQuery } from "../../api/fileApi";
import { useState } from "react";

export default function File({ file }) {
  const extension = file.fileName.split(".").pop().toLowerCase();
  const { select, selected, setDisabled } = useBreadcrumbs();
  const [previousSelect, setPreviousSelect] = useState({});
  const { data, isLoading } = useFetchFileUrlQuery(file.fileDownloadId);

  const handleClick = () => {
    const fileArr = file.fileName.split(".");
    setPreviousSelect({
      _id: file._id,
      fileName: fileArr[0],
      type: "file",
      fileSize: file.fileSize,
      ext: "." + `${fileArr[fileArr.length - 1]}`,
      fileDownloadId: file.fileDownloadId,
    });
    select({
      _id: file._id,
      fileName: fileArr[0],
      type: "file",
      fileSize: file.fileSize,
      ext: "." + `${fileArr[fileArr.length - 1]}`,
      fileDownloadId: file.fileDownloadId,
    });
    setDisabled(false);
  };

  const handleDoubleClick = () => {
    if (data && previousSelect._id === selected._id)
      window.open(data.file_path, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={`relative flex aspect-square w-full cursor-pointer flex-col items-center justify-evenly pt-2 duration-200 ${selected._id === file._id ? "bg-[#f3f3f3] shadow-md shadow-[#d6d6d6]" : "hover:bg-[#f3f3f3]"}`}
      key={file._id}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      {isLoading ? (
        <FIleAndFolderSpinner />
      ) : file.fileType.startsWith("image/") ? (
        <img className="aspect-square w-2/3" src={data.file_path} alt="" />
      ) : (
        <GetFileType extension={extension} />
      )}
      <p
        className="w-full truncate text-center text-[10px] font-medium text-[#5b5b5b] md:text-[12px]"
        title={file.fileName}
      >
        {file.fileName}
      </p>
    </div>
  );
}
