import React, { useState } from "react";
import { MdOutlineUploadFile, MdCancel } from "react-icons/md";
import { LuFileAudio } from "react-icons/lu";
import Button from "../UI/Button";
import IconButton from "../UI/IconButton";
import useFileUpload from "../../hooks/useFileUpload";
import { useAddFileMutation } from "../../api/directoryApi";
import { toast } from "react-toastify";
export default function AddFile({ handleAddFileToggle, _id }) {
  const { uploadFile, isLoading } = useFileUpload();
  const [addFile] = useAddFileMutation();
  const [file, setFile] = useState(null);
  const [fileUploadLoading, setFileUploadLoading] = useState(false);
  const [url, setUrl] = useState(null);
  const handleFileChange = (e) => {
    // const upload=e.target.files[0]
    console.log(e.target.files[0]);
    //     if (e?.target?.files[0]) return;
    setFile(e.target.files[0]);
    setUrl(URL.createObjectURL(e.target.files[0]));
  };
  const handleFileUpload = async (e) => {
    setFileUploadLoading(true);
    e.preventDefault();
    try {
      await uploadFile(file);
      const res = await addFile({
        parentFolderId: _id,
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type,
      });
      console.log(res);
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
        {/* <MdCancel className="absolute top-[-10px] right-[-10px] rounded-full bg-white p-1 text-4xl" /> */}
        {/* <div className="absolute top-2 right-2 rounded-full bg-white">
          <IconButton icon={<MdCancel />} onClick={handleAddFileToggle} />
        </div> */}
        <h1 className="mb-5 flex justify-between text-center text-2xl font-bold text-blue-500">
          Upload File{" "}
          <IconButton icon={<MdCancel />} onClick={handleAddFileToggle} />
        </h1>
        <label htmlFor="fileInput">
          <div className="mb-5 flex aspect-square flex-1 cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-400 p-2 duration-200 hover:bg-[#f3f3f3]">
            {!file && (
              <>
                <MdOutlineUploadFile className="text-8xl text-[#c6c6c6]" />
                <h2 className="font-bold text-[#c6c6c6]">Upload File</h2>
              </>
            )}
            {file?.type.startsWith("video/") && (
              <>
                {/* <MdOutlineUploadFile className="text-8xl text-[#c6c6c6]" /> */}
                <video
                  src={url}
                  controls
                  //   width="400"
                  className="h-2/3 rounded shadow"
                />
              </>
            )}
            {file?.type.startsWith("audio/") && (
              <>
                <LuFileAudio className="text-8xl text-[#c6c6c6]" />
                <audio
                  src={url}
                  controls
                  //   width="400"
                  className="w-4/5 rounded"
                />
              </>
            )}
            {file?.type.startsWith("image/") && (
              <>
                {/* <MdOutlineUploadFile className="text-8xl text-[#c6c6c6]" /> */}
                <img src={url} className="h-full w-full rounded shadow" />
              </>
            )}
            {file?.type === "application/pdf" && (
              <iframe
                src={url}
                title="PDF Preview"
                className="h-2/3 w-full rounded border"
              />
            )}
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
