import { FaSpinner } from "react-icons/fa";

export default function FIleAndFolderSpinner() {
  return (
    <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black/10 duration-300">
      <FaSpinner className="animate-spin text-white" />
    </div>
  );
}
