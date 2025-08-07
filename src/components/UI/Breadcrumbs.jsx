import { LuFolder } from "react-icons/lu";
import { useBreadcrumbs } from "../../contexts/BreadcrumbsContext";
export default function Breadcrumbs() {
  const { visitedFolders } = useBreadcrumbs();
  return (
    <span className="flex items-center rounded-full p-2 text-[13px] font-medium">
      {visitedFolders.map((folder, ind) => (
        <p
          className="flex items-center gap-1 text-[15px] text-[#5b5b5b]"
          key={ind}
        >
          <LuFolder />
          {folder.toLowerCase()}
        </p>
      ))}
    </span>
  );
}
