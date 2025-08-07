import IconButton from "./IconButton";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function FileManagerHeader() {
  const navigate = useNavigate();
  return (
    <h1 className="flex items-center px-3 pt-3 pl-6 text-2xl font-semibold text-[#5b5b5b]">
      <IconButton icon={<FaArrowLeft />} onClick={() => navigate(-1)} />
      Hello There! 👋🏼
    </h1>
  );
}
