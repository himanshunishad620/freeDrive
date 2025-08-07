import LightButton from "../../components/UI/LightButton";
import Button from "../../components/UI/Button";
import axios from "axios";
import { useState } from "react";
import {
  FiLogOut,
  FiUpload,
  FiHardDrive,
  FiBarChart2,
  FiUser,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { TbShieldShare } from "react-icons/tb";

const LandingPage = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const handleLogout = async (e) => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        "https://resumakebackend.onrender.com/api/auth/logout",
        {
          withCredentials: true,
        },
      );
      navigate(0);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-500/10">
      <header className="flex items-center justify-between p-6">
        <div className="flex items-center space-x-2">
          <FiHardDrive className="text-2xl text-indigo-600" />
          <span className="text-xl font-bold text-indigo-800">FreeDrive</span>
        </div>
        <div className="w-30">
          <LightButton
            label={"Logout"}
            isLoading={isLoading}
            onClick={handleLogout}
            startIcon={<FiLogOut className="text-lg" />}
          />
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-800 md:text-5xl">
            Your <span className="text-indigo-600">Free</span> Cloud Storage
            Solution
          </h1>
          <p className="mb-10 text-xl text-gray-600">
            Secure, private, and completely free cloud storage with no hidden
            limits. Store, share, and access your files from anywhere.
          </p>
          <div className="m-auto w-50">
            <Button
              label={"Go to Dashboard"}
              startIcon={<FiBarChart2 className="text-lg" />}
              onClick={() => navigate("/dashboard")}
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-24 grid gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-white p-8 shadow-md transition-shadow hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
              <FiUpload className="text-xl text-indigo-600" />
            </div>
            <h3 className="mb-3 text-xl font-semibold">Unlimited Uploads</h3>
            <p className="text-gray-600">
              Store as many files as you need with our truly free storage model.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-md transition-shadow hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
              <TbShieldShare className="text-xl text-indigo-600" />
            </div>
            <h3 className="mb-3 text-xl font-semibold">Share Securely</h3>
            <p className="text-gray-600">
              Share access of your files without sharing your phone number.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-md transition-shadow hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
              <FiUser className="text-xl text-indigo-600" />
            </div>
            <h3 className="mb-3 text-xl font-semibold">Private by Design</h3>
            <p className="text-gray-600">
              We never scan, analyze, or sell your data - unlike other "free"
              services.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-24 border-t border-gray-200 bg-white py-8">
        <p className="text-center">
          © {new Date().getFullYear()} FreeDrive. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
