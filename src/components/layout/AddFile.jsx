import React, { useState } from "react";
import { MdOutlineUploadFile, MdCancel } from "react-icons/md";
import { LuFileAudio } from "react-icons/lu";
import Button from "../UI/Button";
import IconButton from "../UI/IconButton";
import useFileUpload from "../../hooks/useFileUpload";
import { useAddFileMutation } from "../../api/directoryApi";
import { toast } from "react-toastify";
import { AiOutlineFileUnknown } from "react-icons/ai";
import { LuFileCheck2 } from "react-icons/lu";
// import getFileType from "../../constant/getFileType";
export default function AddFile({ handleAddFileToggle, _id }) {
  const { uploadFile, isLoading } = useFileUpload();
  const [addFile] = useAddFileMutation();
  const [file, setFile] = useState(null);
  const [fileUploadLoading, setFileUploadLoading] = useState(false);
  const [url, setUrl] = useState(null);
  const handleFileChange = (e) => {
    // const upload=e.target.files[0]
    // console.log(e.target.files[0]);
    //     if (e?.target?.files[0]) return;
    setFile(e.target.files[0]);
    setUrl(URL.createObjectURL(e.target.files[0]));
  };
  const handleFileUpload = async (e) => {
    setFileUploadLoading(true);
    e.preventDefault();
    try {
      const uploadedFile = await uploadFile(file);
      // console.log(uploadedFile);
      const res = await addFile({
        fileDownloadId: uploadedFile.file_id,
        parentFolderId: _id,
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type,
      });
      // console.log(res.data.msg);
      handleAddFileToggle(false);
      toast.success("File Uploaded Successfuly!");
      // await uploadFile(file);
    } catch (error) {
      console.log(error);
    } finally {
      setFileUploadLoading(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 z-30 flex h-full w-full items-center justify-center bg-black/40">
      <form
        onSubmit={handleFileUpload}
        className="relative w-90 bg-white px-10 py-5 md:w-100"
      >
        <h1 className="mb-5 flex justify-between text-center text-2xl font-bold text-blue-500">
          Upload File{" "}
          <IconButton icon={<MdCancel />} onClick={handleAddFileToggle} />
        </h1>
        <label htmlFor="fileInput">
          <div className="mb-5 flex aspect-square flex-1 cursor-pointer flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-gray-400 p-2 duration-200 hover:bg-[#f3f3f3]">
            {file && (
              <p className="text-md flex items-center font-medium text-[#c6c6c6]">
                {" "}
                <LuFileCheck2 className="text-4xl text-[#c6c6c6]" /> File
                Uploaded
              </p>
            )}
            {!file && (
              <>
                <MdOutlineUploadFile className="text-8xl text-[#c6c6c6]" />
                <h2 className="font-bold text-[#c6c6c6]">Upload File</h2>
              </>
            )}
            {file?.type.startsWith("video/") && (
              <>
                <video src={url} controls className="h-2/3 rounded shadow" />
              </>
            )}
            {file?.type.startsWith("audio/") && (
              <>
                <LuFileAudio className="text-8xl text-[#c6c6c6]" />
                <audio src={url} controls className="w-4/5 rounded" />
              </>
            )}
            {file?.type.startsWith("image/") && (
              <>
                <img
                  src={url}
                  className="aspect-square w-7/10 rounded shadow"
                />
              </>
            )}

            {file?.type === "application/pdf" && (
              <iframe
                src={url}
                title="PDF Preview"
                className="h-2/3 w-full rounded border"
              />
            )}

            {/* {file?.type === "application/" && (
              <iframe
                src={url}
                title="PDF Preview"
                className="h-2/3 w-full rounded border"
              />
            )} */}

            {/* <AiOutlineFileUnknown className="text-4xl text-[#d0d0d0] md:text-6xl" /> */}
            {/* {getFileType(file?.fileName.spilt(".").pop())} */}
          </div>
        </label>
        <Button
          label={"Upload"}
          type={"Submit"}
          isLoading={fileUploadLoading}
        />
        <input
          id="fileInput"
          onChange={handleFileChange}
          type="file"
          className="hidden"
          required={true}
          // disabled={true}
        />
      </form>
    </div>
  );
}
// import React, { useState, useEffect } from "react";

// export default function FilePreview() {
//   const [file, setFile] = useState(null);
//   const [preview, setPreview] = useState(null);

//   const handleFileChange = (e) => {
//     const uploadedFile = e.target.files[0];
//     if (!uploadedFile) return;
//     setFile(uploadedFile);

//     // Create preview URL
//     const previewURL = URL.createObjectURL(uploadedFile);
//     setPreview(previewURL);
//   };

//   // Cleanup preview URL on unmount
//   useEffect(() => {
//     return () => {
//       if (preview) URL.revokeObjectURL(preview);
//     };
//   }, [preview]);

//   const renderPreview = () => {
//     if (!file) return null;

//     if (file.type.startsWith("image/")) {
//       return (
//         <img
//           src={preview}
//           alt="Preview"
//           className="max-w-sm rounded-md shadow"
//         />
//       );
//     }
//     if (file.type === "application/pdf") {
//       return (
//         <iframe
//           src={preview}
//           title="PDF Preview"
//           width="100%"
//           height="500"
//           className="rounded border"
//         />
//       );
//     }
//     if (file.type.startsWith("video/")) {
//       return (
//         <video src={preview} controls width="400" className="rounded shadow" />
//       );
//     }
//     return (
//       <p className="text-gray-600">
//         File selected: <strong>{file.name}</strong> (No preview available)
//       </p>
//     );
//   };

//   return (
//     <div className="space-y-4 p-6">
//       <h2 className="text-xl font-semibold">Upload & Preview File</h2>
//       <input type="file" onChange={handleFileChange} className="block" />
//       {renderPreview()}
//     </div>
//   );
// }
