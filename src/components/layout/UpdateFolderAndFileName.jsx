import Input from "../UI/Input";
import Button from "../UI/Button";
import useHandleForm from "../../hooks/useHandleForm";
import IconButton from "../UI/IconButton";
import { LuFolderPen } from "react-icons/lu";
import { MdCancel } from "react-icons/md";
import {
  useUpdateFileNameMutation,
  useUpdateFolderNameMutation,
} from "../../api/directoryApi";
import { useBreadcrumbs } from "../../contexts/BreadcrumbsContext";
import { LuFilePen } from "react-icons/lu";
import { toast } from "react-toastify";

export default function UpdateFolderAndFileName({
  handleUpdateFolderAndFileNameToggle,
  _id,
}) {
  const [updateFolderName, { isLoading: folderNameUpdateLoader }] =
    useUpdateFolderNameMutation();
  const [updateFileName, { isLoading: fileNameUpdateLoader }] =
    useUpdateFileNameMutation();
  const { selected, select, setDisabled } = useBreadcrumbs();
  const { value, handleChange } = useHandleForm({
    newName: selected.fileName ?? selected.folderName,
    folderIdAndFileId: selected._id,
    parentFolderId: _id,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      selected.type === "folder"
        ? await updateFolderName(value)
        : await updateFileName(value);
      select("");
      setDisabled(true);
      toast.success("Renamed successfuly!");
    } catch (error) {
      toast.error("Something Went Wrong!");
    } finally {
      handleUpdateFolderAndFileNameToggle((pre) => !pre);
    }
  };
  return (
    <div className="fixed top-0 left-0 z-30 flex h-full w-full items-center justify-center bg-black/40">
      <form
        onSubmit={handleSubmit}
        className="relative flex w-90 flex-col items-center gap-2 bg-white px-10 py-5 md:w-100"
      >
        <h1 className="mb-3 flex w-full justify-between text-2xl font-bold text-blue-500">
          {selected.type === "folder" ? " Rename Folder" : " Rename File"}{" "}
          <IconButton
            icon={<MdCancel />}
            type={"button"}
            onClick={handleUpdateFolderAndFileNameToggle}
          />
        </h1>
        <Input
          type={"text"}
          value={value.newName}
          name="newName"
          placeholder={"New Name"}
          required={true}
          onChange={handleChange}
          icon={selected.type === "folder" ? <LuFolderPen /> : <LuFilePen />}
        />
        <Button
          type={"Submit"}
          label={selected.type === "folder" ? "Rename Folder" : "Rename File"}
          isLoading={folderNameUpdateLoader || fileNameUpdateLoader}
        />
      </form>
    </div>
  );
}
