import IconButton from "./IconButton";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function AboutHeader() {
  const navigate = useNavigate();
  return (
    <h1
      onClick={() => navigate(-1)}
      className="sticky top-0 left-0 z-10 flex items-center bg-white p-3 text-2xl font-semibold text-[#5b5b5b]"
    >
      <IconButton type="button" icon={<FaArrowLeft />} />
      About Us
    </h1>
  );
}
