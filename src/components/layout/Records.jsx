import React from "react";
import { GrStorage } from "react-icons/gr";

import { FaRegFileAlt } from "react-icons/fa";
import { FaRegFolderClosed } from "react-icons/fa6";
import { useReadDirectoryRecordQuery } from "../../api/directoryApi";
import formatBytesSplit from "../../constant/formatBytes";
import { FaInfinity } from "react-icons/fa6";

export default function Records() {
  const { data } = useReadDirectoryRecordQuery();
  const memory = formatBytesSplit(data?.result.totalSpaceOccupied);
  // console.log(data || isLoading);
  // console.log(memory);
  // const l = `h-2 w-${memory}/5120 bg-blue-500 md:h-3.5`;
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
            {memory.value} {memory.unit} /<FaInfinity className="text-3xl" />
          </p>
          {/* <div className="mt-0 h-2.5 w-9/10 border-2 border-blue-500 bg-[#cfe6ff] md:mt-1 md:h-4 md:w-full">
            <div
              style={{ width: memory.percent }}
              className="h-2 bg-blue-500 md:h-3.5"
            ></div>
          </div> */}
          {/* <input type="range" min="0" max="5120" value={17} /> */}
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

      {/* <div className="flex aspect-3/1 w-full items-center gap-5 rounded-xl bg-white p-5">
        <div className="flex aspect-square w-3/12 items-center justify-center rounded-full bg-[#cfe6ff]">
          <IoFolderOpenOutline className="text-5xl text-blue-500" />
        </div>
        <div className="w-3/4">
          <p className="font-semibold text-[#5b5b5b]">Total Files</p>
          <p className="text-2xl font-semibold text-[#363636]">833</p>
         
        </div>
      </div>
      <div className="flex aspect-3/1 w-full items-center gap-5 rounded-xl bg-white p-5">
        <div className="flex aspect-square w-3/12 items-center justify-center rounded-full bg-[#cfe6ff]">
          <IoFolderOpenOutline className="text-5xl text-blue-500" />
        </div>
        <div className="w-3/4">
          <p className="font-semibold text-[#5b5b5b]">Total Folders</p>
          <p className="text-2xl font-semibold text-[#363636]">839</p>
          
        </div>
      </div> */}

      {/* <div className="aspect-3/1 w-full rounded-xl bg-amber-200">
        
      </div>
      <div className="aspect-3/1 w-full rounded-xl bg-amber-200"></div> */}
    </div>
  );
}
