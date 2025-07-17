import { useState } from "react";
import { useLoginMutation } from "../../api/authApi";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [Login] = useLoginMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await Login({
        email: "himanshunishad1@gmail.com",
        password: "Himan@6405",
      }).unwrap();
      console.log(res);
      navigate(0);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center gap-5">
      <button
        className="rounded-md border-2 border-gray-400 p-5"
        onClick={handleSubmit}
      >
        {loading ? "Loading.." : "Submit"}
      </button>
    </div>
  );
}
