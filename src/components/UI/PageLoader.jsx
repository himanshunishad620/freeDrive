import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

export default function PageLoader() {
  const [msg, setMsg] = useState(null);
  useEffect(() => {
    setTimeout(
      () =>
        setMsg(
          "It might take few seconds for once because of Render Server which gets inactive in free version!  ",
        ),
      4000,
    );
  }, []);
  return (
    <div className="fixed top-0 left-0 flex h-screen w-screen flex-col items-center justify-center bg-white/10">
      <FaSpinner className="animate-spin text-3xl" />
      <p className="text-lg">Loading....</p>
      <p className="text-red-500">{msg}</p>
    </div>
  );
}
