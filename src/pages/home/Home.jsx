import { Navigate, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/contact")}>Contact</button>
    </div>
  );
}
