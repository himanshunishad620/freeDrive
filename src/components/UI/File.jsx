import { useBreadcrumbs } from "../../contexts/BreadcrumbsContext";
import { LuFileText, LuFileAudio } from "react-icons/lu";
import { VscFilePdf } from "react-icons/vsc";
import { RiFileVideoLine, RiFileGifLine } from "react-icons/ri";
import { FaRegFileImage } from "react-icons/fa";
import { PiFileXlsBold, PiFilePyBold } from "react-icons/pi";
import { BsFiletypeDocx, BsFiletypeJava } from "react-icons/bs"; //docs
import { FaRegFileZipper } from "react-icons/fa6";
import { AiOutlineFileUnknown } from "react-icons/ai";
import {
  TbFileTypeCsv,
  TbFileTypeJs,
  TbFileTypeHtml,
  TbFileTypeCss,
  TbFileTypeSvg,
  TbFileTypePpt,
} from "react-icons/tb";
import { Fragment } from "react";

// function getFileType(extension) {
//   switch (extension) {
//     case "txt":
//       <LuFileText className="text-4xl text-[#d0d0d0] md:text-6xl" />;
//       break;
//     case "doc":
//     case "docx":
//       <BsFiletypeDocx className="text-4xl text-[#d0d0d0] md:text-6xl" />;
//       break;
//     case "pdf":
//       <VscFilePdf className="text-4xl text-[#d0d0d0] md:text-6xl" />;
//       break;

//     // Spreadsheets
//     case "xls":
//     case "xlsx":
//       <PiFileXlsBold className="text-4xl text-[#d0d0d0] md:text-6xl" />;
//       break;
//     case "csv":
//       <TbFileTypeCsv className="text-4xl text-[#d0d0d0] md:text-6xl" />;
//       break;

//     // Presentations
//     case "ppt":
//     case "pptx":
//       <TbFileTypePpt className="text-4xl text-[#d0d0d0] md:text-6xl" />;
//       break;

//     // Images
//     case "jpg":
//     case "jpeg":
//     case "png":
//     case "webp":
//       return <FaRegFileImage className="text-4xl text-[#d0d0d0] md:text-6xl" />;
//       break;

//     case "gif":
//       <RiFileGifLine className="text-4xl text-[#d0d0d0] md:text-6xl" />;
//       break;
//     case "svg":
//       <TbFileTypeSvg className="text-4xl text-[#d0d0d0] md:text-6xl" />;
//       break;
//       <VscFilePdf className="text-4xl text-[#d0d0d0] md:text-6xl" />;
//       break;

//     // Audio
//     case "mp3":
//     case "wav":
//     case "aac":
//     case "ogg":
//       <LuFileAudio className="text-4xl text-[#d0d0d0] md:text-6xl" />;
//       break;

//     // Video
//     case "mp4":
//     case "mov":
//     case "mkv":
//     case "avi":
//     case "webm":
//       <RiFileVideoLine className="text-4xl text-[#d0d0d0] md:text-6xl" />;
//       break;

//     // Archives
//     case "zip":
//     case "rar":
//     case "7z":
//     case "tar":
//     case "gz":
//       <FaRegFileZipper className="text-4xl text-[#d0d0d0] md:text-6xl" />;
//       break;

//     // Code & Data
//     case "html":
//     case "htm":
//       <TbFileTypeHtml className="text-4xl text-[#d0d0d0] md:text-6xl" />;
//       break;
//     case "css":
//       <TbFileTypeCss className="text-4xl text-[#d0d0d0] md:text-6xl" />;
//       break;
//     case "js":
//       <TbFileTypeJs className="text-4xl text-[#d0d0d0] md:text-6xl" />;
//       break;

//     case "py":
//       <PiFilePyBold className="text-4xl text-[#d0d0d0] md:text-6xl" />;
//       break;
//     case "java":
//       return <BsFiletypeJava className="text-4xl text-[#d0d0d0] md:text-6xl" />;
//       break;

//     default:
//         <AiOutlineFileUnknown className="text-4xl text-[#d0d0d0] md:text-6xl" />
//       break;
//   }
// }
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
  // console.log(file.fileDownloadId);
  const handleClick = () => {
    console.log(file.fileName);
    const fileArr = file.fileName.split(".");
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
  // console.log(file.fileType);
  // const fileIconSwitch = () => {
  //   switch (file.fileType) {
  //     case value:
  //       break;

  //     default:
  //       break;
  //   }
  // };
  return (
    <div
      className={`flex cursor-pointer flex-col items-center justify-start pt-2 duration-200 ${selected._id === file._id ? "bg-[#f3f3f3] shadow-md shadow-[#d6d6d6]" : "hover:bg-[#f3f3f3]"}`}
      key={file._id}
      onClick={handleClick}
    >
      {/* <LuFileText className="text-4xl text-[#d0d0d0] md:text-6xl" /> */}
      {getFileType(extension)}
      <p className="text-center text-[10px] font-medium text-[#5b5b5b] md:text-[12px]">
        {file.fileName}
      </p>
    </div>
  );
}
