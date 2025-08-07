import IconButton from "./IconButton";
import useFileDownload from "../../hooks/useFileDownload";
import { FaArrowLeft } from "react-icons/fa6";
import {
  RiDeleteBin6Line,
  RiFileAddLine,
  RiFolderAddLine,
  RiFileDownloadLine,
} from "react-icons/ri";
import { BiRename } from "react-icons/bi";
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
  const { downloadFile, isLoading } = useFileDownload();
  return (
    <div className="items-left sticky top-0 left-0 z-29 flex w-full flex-col-reverse justify-between bg-white p-2 shadow-md md:flex-row md:items-center">
      <div className="my-2 flex items-center gap-3 md:my-0 md:gap-2 md:pr-0">
        <IconButton
          icon={<FaArrowLeft />}
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
          toolTip={"Download file"}
          onClick={() => downloadFile(selected.fileDownloadId)}
          isLoading={isLoading}
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
    </div>
  );
}
