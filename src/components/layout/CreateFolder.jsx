import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { RiFolderAddLine } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import IconButton from "../UI/IconButton";
import { useCreateFolderMutation } from "../../api/directoryApi";
import useHandleForm from "../../hooks/useHandleForm";

export default function CreateFolder({ handleCreateFolderToggle, _id }) {
  const [createFolder, { isLoading }] = useCreateFolderMutation();
  // const [folderName,setFolderName]=useState("")
  const { value, handleChange } = useHandleForm({
    folderName: "",
    parentFolderId: _id,
  });
  console.log(value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createFolder(value);
    handleCreateFolderToggle((pre) => !pre);
  };
  return (
    <div className="fixed top-0 left-0 z-30 flex h-full w-full items-center justify-center bg-black/40">
      <form
        onSubmit={handleSubmit}
        className="relative flex w-90 flex-col items-center gap-2 bg-white px-10 py-5 md:w-100"
      >
        {/* <div className="absolute top-2 right-2 rounded-full bg-white">
          <IconButton icon={<MdCancel />} onClick={handleCreateFolderToggle} />
        </div> */}
        <h1 className="mb-3 flex w-full justify-between text-2xl font-bold text-blue-500">
          Create Folder{" "}
          <IconButton icon={<MdCancel />} onClick={handleCreateFolderToggle} />
        </h1>
        <Input
          type={"text"}
          name="folderName"
          placeholder={"Folder Name"}
          required={true}
          onChange={handleChange}
          icon={<RiFolderAddLine />}
        />
        <Button type={"Submit"} label={"Create Folder"} isLoading={isLoading} />
      </form>
    </div>
  );
}
