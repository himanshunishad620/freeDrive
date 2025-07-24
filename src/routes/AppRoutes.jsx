import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import useAuthStatus from "../hooks/useAuthStatus";
import LandingPage from "../pages/home/LandingPage";
import DasboardLayout from "../components/layout/DasboardLayout";
import Storage from "../components/dashboard/Storage";
import Setting from "../components/dashboard/Setting";
import About from "../components/dashboard/About";
import Contact from "../components/dashboard/Contact";
// import Directory from "../components/dashboard/Directory";
import { useAuth } from "../contexts/AuthContext";
import FileManager from "../components/dashboard/FileManager";

export default function AppRoutes() {
  const { isAuthenticated, loading, _id } = useAuth();
  if (loading)
    return (
      <h1 className="text-center text-3xl">
        Loading....,Server restarting, it might take few seconds for once.
      </h1>
    );
  return (
    <Routes>
      <Route
        path="/"
        element={<ProtectedRoute isAuthenticated={isAuthenticated} />}
      >
        <Route index element={<LandingPage />} />
        <Route path="dashboard" element={<DasboardLayout />}>
          <Route
            index
            element={<Navigate to={"fileManager"} state={{ _id }} replace />}
          />
          <Route path="storage" element={<Storage />} />
          <Route path="fileManager" element={<FileManager />} />
          <Route path="settings" element={<Setting />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Route>
      <Route
        path="auth"
        element={<PublicRoute isAuthenticated={isAuthenticated} />}
      >
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}
