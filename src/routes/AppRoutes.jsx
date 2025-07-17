import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Contact from "../pages/home/Contact";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import useAuthStatus from "../hooks/useAuthStatus";
import About from "../pages/home/About";

export default function AppRoutes() {
  const { isAuthenticated, loading } = useAuthStatus();
  if (loading) return <h1>Loading....</h1>;
  return (
    <Routes>
      <Route
        path="/"
        element={<ProtectedRoute isAuthenticated={isAuthenticated} />}
      >
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
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
