import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div>
      LandingPage
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
    </div>
  );
}
