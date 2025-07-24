import React from "react";
import { LuFolderGit2 } from "react-icons/lu";
import { LuFolder } from "react-icons/lu";
import { useBreadcrumbs } from "../../contexts/BreadcrumbsContext";
import ListedFolder from "./ListedFolder";
export default function Breadcrumbs() {
  const { visitedFolders } = useBreadcrumbs();
  return (
    <div className="flex items-center">
      {visitedFolders.map((folder) => (
        <ListedFolder folder={folder} />
      ))}
    </div>
  );
}
