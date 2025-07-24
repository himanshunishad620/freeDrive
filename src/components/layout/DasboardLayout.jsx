import Sidebar from "./Sidebar";
import Main from "./Main";

export default function DasboardLayout() {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <Main />
    </div>
  );
}
