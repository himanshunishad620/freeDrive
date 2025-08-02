import { useBreadcrumbs } from "../../contexts/BreadcrumbsContext";
import { LuFileText, LuFileAudio } from "react-icons/lu";
import { VscFilePdf } from "react-icons/vsc";
import { RiFileVideoLine, RiFileGifLine } from "react-icons/ri";
import { FaRegFileImage } from "react-icons/fa";
import { PiFileXlsBold, PiFilePyBold } from "react-icons/pi";
import { BsFiletypeDocx, BsFiletypeJava } from "react-icons/bs"; //docs
import { FaRegFileZipper, FaSpinner } from "react-icons/fa6";
import { AiOutlineFileUnknown } from "react-icons/ai";
import {
  TbFileTypeCsv,
  TbFileTypeJs,
  TbFileTypeHtml,
  TbFileTypeCss,
  TbFileTypeSvg,
  TbFileTypePpt,
} from "react-icons/tb";
import { useFetchFileUrlQuery } from "../../api/fileApi";
import { useState } from "react";

function getFileType(extension) {
  switch (extension) {
    // Documents
    case "txt":
      return <LuFileText className="text-4xl text-[#d0d0d0] md:text-6xl" />;

    case "doc":
    case "docx":
      return <BsFiletypeDocx className="text-4xl text-[#d0d0d0] md:text-6xl" />;

    case "pdf":
      return <VscFilePdf className="text-4xl text-[#d0d0d0] md:text-6xl" />;

    // Spreadsheets
    case "xls":
    case "xlsx":
      return <PiFileXlsBold className="text-4xl text-[#d0d0d0] md:text-6xl" />;

    case "csv":
      return <TbFileTypeCsv className="text-4xl text-[#d0d0d0] md:text-6xl" />;

    // Presentations
    case "ppt":
    case "pptx":
      return <TbFileTypePpt className="text-4xl text-[#d0d0d0] md:text-6xl" />;

    // Images
    case "jpg":
    case "jpeg":
    case "png":
    case "webp":
      return <FaRegFileImage className="text-4xl text-[#d0d0d0] md:text-6xl" />;

    case "gif":
      return <RiFileGifLine className="text-4xl text-[#d0d0d0] md:text-6xl" />;

    case "svg":
      return <TbFileTypeSvg className="text-4xl text-[#d0d0d0] md:text-6xl" />;

    // Audio
    case "mp3":
    case "wav":
    case "aac":
    case "ogg":
      return <LuFileAudio className="text-4xl text-[#d0d0d0] md:text-6xl" />;

    // Video
    case "mp4":
    case "mov":
    case "mkv":
    case "avi":
    case "webm":
      return (
        <RiFileVideoLine className="text-4xl text-[#d0d0d0] md:text-6xl" />
      );

    // Archives
    case "zip":
    case "rar":
    case "7z":
    case "tar":
    case "gz":
      return (
        <FaRegFileZipper className="text-4xl text-[#d0d0d0] md:text-6xl" />
      );

    // Code & Data
    case "html":
    case "htm":
      return <TbFileTypeHtml className="text-4xl text-[#d0d0d0] md:text-6xl" />;

    case "css":
      return <TbFileTypeCss className="text-4xl text-[#d0d0d0] md:text-6xl" />;

    case "js":
      return <TbFileTypeJs className="text-4xl text-[#d0d0d0] md:text-6xl" />;

    case "py":
      return <PiFilePyBold className="text-4xl text-[#d0d0d0] md:text-6xl" />;

    case "java":
      return <BsFiletypeJava className="text-4xl text-[#d0d0d0] md:text-6xl" />;

    default:
      return (
        <AiOutlineFileUnknown className="text-4xl text-[#d0d0d0] md:text-6xl" />
      );
  }
}

export default function File({ file }) {
  const extension = file.fileName.split(".").pop().toLowerCase();
  const { select, selected, setDisabled } = useBreadcrumbs();
  const [previousSelect, setPreviousSelect] = useState({});
  console.log(file.fileDownloadId);
  const { data, isLoading } = useFetchFileUrlQuery(file.fileDownloadId);
  console.log(file || null);
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
    // const link = document.createElement("a");
    // link.href =
    //   "https://scripts.vaultifier.space/rapidapi/telegram/downloads/file_4324.png";
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);

    if (!data || previousSelect._id === selected._id) return;
    window.open(data.file_path, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={`flex aspect-square w-full cursor-pointer flex-col items-center justify-evenly pt-2 duration-200 ${selected._id === file._id ? "bg-[#f3f3f3] shadow-md shadow-[#d6d6d6]" : "hover:bg-[#f3f3f3]"}`}
      key={file._id}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      {/* <LuFileText className="text-4xl text-[#d0d0d0] md:text-6xl" /> */}
      {isLoading ? (
        <FaSpinner className="animate-spin" />
      ) : file.fileType.startsWith("image/") ? (
        <img className="aspect-square w-2/3" src={data.file_path} alt="" />
      ) : (
        getFileType(extension)
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
