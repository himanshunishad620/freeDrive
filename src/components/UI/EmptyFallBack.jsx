import { TbMoodEmpty } from "react-icons/tb";
export default function EmptyFallBack() {
  return (
    <div className="mt-[-80px] flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <TbMoodEmpty className="text-7xl text-[#eaeaea]" />
      <h1 className="text-3xl font-semibold text-[#eaeaea]">Folder Empty</h1>
    </div>
  );
}
