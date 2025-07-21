import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Directory() {
  const { _id } = useParams();
  const navigate = useNavigate();

  const numericId = parseInt(_id); // Ensure it's a number

  return (
    <div>
      <h2>Current Directory ID: {_id}</h2>

      <div style={{ marginTop: "1rem" }}>
        {/* History navigation */}
        <button onClick={() => navigate(1)}>Forward</button>
        <button onClick={() => navigate(-1)}>Backward</button>

        {/* Navigate to next directory */}
        <button
          onClick={() => navigate(`../rootDirectory/${numericId + 1}`)}
          disabled={isNaN(numericId)}
        >
          Increment
        </button>
      </div>
    </div>
  );
}
