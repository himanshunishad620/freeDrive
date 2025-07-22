import { Route, Routes } from "react-router-dom";
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
import Directory from "../components/dashboard/Directory";
import { useAuth } from "../contexts/AuthContext";

export default function AppRoutes() {
  const { isAuthenticated, loading } = useAuth();
  if (loading) return <h1>Loading....</h1>;
  return (
    <Routes>
      <Route
        path="/"
        element={<ProtectedRoute isAuthenticated={isAuthenticated} />}
      >
        <Route index element={<LandingPage />} />
        <Route path="dashboard" element={<DasboardLayout />}>
          <Route index element={<Storage />} />
          <Route path="rootDirectory/:_id" element={<Directory />} />
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
