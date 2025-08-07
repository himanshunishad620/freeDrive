import Records from "../layout/Records";
import FileContainer from "../layout/FileContainer";
import FileManagerHeader from "../UI/FileManagerHeader";

export default function FileManager() {
  return (
    <div className="flex h-full w-full flex-col bg-[#f2f2f2]">
      <FileManagerHeader />
      <Records />
      <FileContainer />
    </div>
  );
}
