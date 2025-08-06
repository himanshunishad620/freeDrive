import Sidebar from "./Sidebar";
import Main from "./Main";
import BreadcrumbProvider from "../../contexts/BreadcrumbsContext";

export default function DasboardLayout() {
  return (
    <div className="flex h-screen w-screen bg-[#f2f2f2] p-0 md:p-3">
      <Sidebar />
      <BreadcrumbProvider>
        <Main />
      </BreadcrumbProvider>
    </div>
  );
}
