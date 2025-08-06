import { AiOutlineFileUnknown } from "react-icons/ai";
import { BsFiletypeDocx, BsFiletypeJava } from "react-icons/bs";
import { FaRegFileImage } from "react-icons/fa";
import { FaRegFileZipper } from "react-icons/fa6";
import { LuFileAudio, LuFileText } from "react-icons/lu";
import { PiFilePyBold, PiFileXlsBold } from "react-icons/pi";
import { RiFileGifLine, RiFileVideoLine } from "react-icons/ri";
import {
  TbFileTypeCss,
  TbFileTypeCsv,
  TbFileTypeHtml,
  TbFileTypeJs,
  TbFileTypePpt,
  TbFileTypeSvg,
} from "react-icons/tb";
import { VscFilePdf } from "react-icons/vsc";

export default function GetFileType({ extension }) {
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
