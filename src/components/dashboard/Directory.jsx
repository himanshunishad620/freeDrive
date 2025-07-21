import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Directory() {
  const { _id } = useParams();
  //     console.log(_id);
  const navigate = useNavigate();
  return (
    <div>
      {_id}

      <button onClick={() => navigate(1)}>Forward</button>
      <button onClick={() => navigate(-1)}>Backward</button>
    </div>
  );
}
