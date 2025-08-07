import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <div>
      <AppRoutes />
      <ToastContainer />
    </div>
  );
}
