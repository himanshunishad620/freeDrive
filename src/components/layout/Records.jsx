import formatBytesSplit from "../../services/formatBytes";
import { GrStorage } from "react-icons/gr";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegFolderClosed } from "react-icons/fa6";
import { useReadDirectoryRecordQuery } from "../../api/directoryApi";
import { FaInfinity } from "react-icons/fa6";

export default function Records() {
  const { data } = useReadDirectoryRecordQuery();
  const memory = formatBytesSplit(data?.result.totalSpaceOccupied);
  return (
    <div className="grid grid-cols-2 gap-3 p-3 md:grid-cols-3">
      <div className="col-span-2 flex aspect-5/1 w-full items-center gap-5 bg-white p-1 md:col-span-1 md:p-5">
        <div className="flex aspect-square w-4/24 items-center justify-center rounded-full bg-[#cfe6ff] md:w-3/12">
          <GrStorage className="text-2xl text-blue-500 md:text-4xl" />
        </div>
        <div className="w-19/24">
          <p className="md:text-md text-[13px] leading-2.5 font-semibold text-[#5b5b5b]">
            Total Space
          </p>
          <p className="text-md flex items-center gap-3 font-semibold text-[#363636] md:text-2xl">
            {memory.value} {memory.unit} /
            <FaInfinity className="text-xl md:text-3xl" />
          </p>
        </div>
      </div>
      <div className="flex aspect-5/2 w-full items-center gap-5 bg-white p-1 md:aspect-5/1 md:w-full md:p-5">
        <div className="flex aspect-square w-12/24 items-center justify-center rounded-full bg-[#cfe6ff] md:w-3/12">
          <FaRegFolderClosed className="text-2xl text-blue-500 md:text-4xl" />
        </div>
        <div className="w-19/24">
          <p className="md:text-md text-[13px] leading-2.5 font-semibold text-[#5b5b5b]">
            Total Folders
          </p>
          <p className="text-md font-semibold text-[#363636] md:text-2xl">
            {data?.result.totalFolders || 0}
          </p>
        </div>
      </div>
      <div className="flex aspect-5/2 w-full items-center gap-5 bg-white p-1 md:aspect-5/1 md:w-full md:p-5">
        <div className="flex aspect-square w-12/24 items-center justify-center rounded-full bg-[#cfe6ff] md:w-3/12">
          <FaRegFileAlt className="text-2xl text-blue-500 md:text-4xl" />
        </div>
        <div className="w-19/24">
          <p className="md:text-md text-[13px] leading-2.5 font-semibold text-[#5b5b5b]">
            Total Files
          </p>
          <p className="text-md font-semibold text-[#363636] md:text-2xl">
            {data?.result.totalFiles || 0}
          </p>
        </div>
      </div>
    </div>
  );
}
