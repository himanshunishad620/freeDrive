import { useRef } from "react";
import { LuFileText } from "react-icons/lu";
import { useBreadcrumbs } from "../../contexts/BreadcrumbsContext";

export default function File({ file }) {
  const { select, selected, setDisabled } = useBreadcrumbs();

  const handleClick = () => {
    select({
      _id: file._id,
      fileName: file.fileName.split(".")[0],
      type: "file",
      fileSize: file.fileSize,
    });
    setDisabled(false);
  };
  //  const handleDownload = () => {
  //   const link = document.createElement("a");
  //   link.href = imageUrl;          // Image URL
  //   link.download = "image.jpg";   // File name when saved
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  return (
    <div
      className={`flex cursor-pointer flex-col items-center justify-start pt-2 duration-200 ${selected._id === file._id ? "shadow-md shadow-[#d6d6d6]" : "hover:bg-[#f3f3f3]"}`}
      key={file._id}
      onClick={handleClick}
    >
      <LuFileText className="text-4xl text-[#d0d0d0] md:text-6xl" />
      <p className="text-center text-[10px] font-medium text-[#5b5b5b] md:text-[12px]">
        {file.fileName}
      </p>
    </div>
  );
}
