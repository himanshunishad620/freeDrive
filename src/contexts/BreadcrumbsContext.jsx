import { createContext, useContext, useState } from "react";
const BreadcrumbsContext = createContext();

export default function BreadcrumbProvider({ children }) {
  const [selected, setSelected] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [visitedFolders, setVisitedFolders] = useState(["root>"]);
  const select = (item) => {
    setSelected(item);
  };
  const addVisitedFolder = (folderName) => {
    setVisitedFolders((pre) => [...pre, `${folderName + ">"}`]);
  };
  const removerVisitedFolder = (folder) => {
    setVisitedFolders((pre) => pre.filter((i) => i !== folder));
  };

  return (
    <BreadcrumbsContext.Provider
      value={{
        visitedFolders,
        addVisitedFolder,
        removerVisitedFolder,
        select,
        setDisabled,
        disabled,
        selected,
      }}
    >
      {children}
    </BreadcrumbsContext.Provider>
  );
}

export const useBreadcrumbs = () => useContext(BreadcrumbsContext);
