import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";

export default function App() {
  // const baseUrl = import.meta.env.VITE_BASE_URL;

  // console.log(appConfig);
  return (
    <div>
      <AppRoutes />
      <ToastContainer />
    </div>
  );
}
