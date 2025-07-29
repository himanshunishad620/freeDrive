import Button from "../UI/Button";
import LightButton from "../UI/LightButton";
import {
  useDeleteFileMutation,
  useDeleteFolderMutation,
} from "../../api/directoryApi";
import { useBreadcrumbs } from "../../contexts/BreadcrumbsContext";

export default function DeleteFileandFolder({ handleDeleteToggle, _id }) {
  const { selected, select, setDisabled } = useBreadcrumbs();
  const [deleteFile, { isLoading: fileDeleteLoading }] =
    useDeleteFileMutation();
  const [deleteFolder, { isLoading: folderDeleteLoading }] =
    useDeleteFolderMutation();
  const handleDelete = async (e) => {
    e.preventDefault();
    const res =
      selected.type === "file"
        ? await deleteFile({
            folderId: _id,
            fileId: selected._id,
            fileSize: selected.fileSize,
          })
        : await deleteFolder({ parentFolderId: _id, _id: selected._id });
    handleDeleteToggle();
    select("");
    setDisabled(true);
    console.log(res);
  };
  return (
    <div className="fixed top-0 left-0 z-30 flex h-full w-full items-center justify-center bg-black/40">
      <div className="relative flex w-90 flex-col items-center gap-2 bg-white px-10 py-5 md:w-100">
        <h2 className="mb-3 text-2xl font-bold text-blue-500">Are you sure?</h2>
        <div className="flex w-full gap-4">
          <LightButton
            label={"Delete"}
            isLoading={folderDeleteLoading || fileDeleteLoading}
            onClick={handleDelete}
          />
          <Button label={"Cancel"} onClick={handleDeleteToggle} />
        </div>
      </div>
    </div>
  );
}
