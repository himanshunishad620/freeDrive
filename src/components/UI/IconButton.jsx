import { FaSpinner } from "react-icons/fa6";

export default function IconButton({
  icon,
  onClick,
  toolTip,
  disabled,
  type,
  notHover,
  isLoading,
}) {
  return (
    <button
      disabled={disabled}
      title={toolTip}
      type={type}
      onClick={onClick}
      className={`rounded-full p-1 text-lg duration-200 md:p-2 md:text-xl ${disabled ? "cursor-not-allowed text-[#c0c0c0]" : `cursor-pointer ${!notHover ? "text-[#5b5b5b]" : "bg-[#e6effa] text-blue-500"} hover:bg-[rgb(230,239,250)] hover:text-blue-500`}`}
    >
      {isLoading ? <FaSpinner className="animate-spin" /> : icon}
    </button>
  );
}
