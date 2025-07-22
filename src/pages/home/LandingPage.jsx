import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div>
      <p className="text-center text-5xl">Welcome to Dashboard</p>
      {/* <button onClick={() => navigate("/dashboard")}>Dashboard</button> */}
    </div>
  );
}
