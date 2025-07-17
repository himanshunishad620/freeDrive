import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/about")}>About</button>
    </div>
  );
}
