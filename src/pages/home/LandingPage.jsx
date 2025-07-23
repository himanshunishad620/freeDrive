import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button";
import axios from "axios";

export default function LandingPage() {
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
      // console.log(res);
    } catch (error) {
      // console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3">
      <p className="text-4xl">Welcome to Dashboard</p>
      <div className="w-60">
        <Button label={"Logout"} onClick={handleLogout} isLoading={isLoading} />
      </div>

      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
    </div>
  );
}
